'use client';

import { useCallback, useRef, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, CloudUpload, ImageIcon, Loader2, X, ZoomIn } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import z from 'zod';

import {
  AvatarGroup,
  Button,
  Container,
  CustomModal,
  CustomTabs,
  EmptyState,
  FieldConfig,
  FormFieldArray,
  FormInput,
  FormSubmit,
  HorizonalScrollare,
  SchemaForm,
} from '@/features/shared';

import { Card } from '@/components/ui/card/index';

import { addLogoWatermark } from '@/lib/addLogoWatermark';
import { compressImage } from '@/lib/imageCompression';

// ─── Types ────────────────────────────────────────────────────────────────────
type ProcessedImage = {
  id: string;
  originalName: string;
  previewUrl: string;
  file: File;
  status: 'pending' | 'processing' | 'done' | 'error';
};

// ─── Image Uploader Section ───────────────────────────────────────────────────
function ImageUploaderSection() {
  const [images, setImages] = useState<ProcessedImage[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processFile = useCallback(async (file: File, id: string) => {
    setImages((prev) =>
      prev.map((img) => (img.id === id ? { ...img, status: 'processing' } : img)),
    );
    try {
      const compressed = await compressImage(file);
      const watermarked = await addLogoWatermark(compressed);
      const previewUrl = URL.createObjectURL(watermarked);
      setImages((prev) =>
        prev.map((img) =>
          img.id === id ? { ...img, file: watermarked, previewUrl, status: 'done' } : img,
        ),
      );
    } catch {
      setImages((prev) => prev.map((img) => (img.id === id ? { ...img, status: 'error' } : img)));
    }
  }, []);

  const addFiles = useCallback(
    (files: FileList | File[]) => {
      const validFiles = Array.from(files).filter((f) => f.type.startsWith('image/'));
      if (!validFiles.length) return;

      const newImages: ProcessedImage[] = validFiles.map((file) => ({
        id: `${Date.now()}-${Math.random()}`,
        originalName: file.name,
        previewUrl: URL.createObjectURL(file),
        file,
        status: 'pending',
      }));

      setImages((prev) => [...prev, ...newImages]);

      // Process each image
      newImages.forEach((img) => processFile(img.file, img.id));
    },
    [processFile],
  );

  const removeImage = (id: string) => {
    setImages((prev) => {
      const img = prev.find((i) => i.id === id);
      if (img?.previewUrl) URL.revokeObjectURL(img.previewUrl);
      return prev.filter((i) => i.id !== id);
    });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    addFiles(e.dataTransfer.files);
  };

  const doneImages = images.filter((img) => img.status === 'done');
  const processingCount = images.filter(
    (img) => img.status === 'processing' || img.status === 'pending',
  ).length;

  return (
    <section className='flex flex-col gap-6'>
      <h2 className='text-2xl font-bold'>Image Uploader & Processor</h2>
      <Card className='border-dashed-none overflow-hidden border-2 p-0 shadow-md'>
        {/* Drop Zone */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`relative flex cursor-pointer flex-col items-center justify-center gap-3 rounded-t-lg border-2 border-dashed px-8 py-12 transition-all duration-200 ${
            isDragging
              ? 'scale-[0.99] border-blue-500 bg-blue-50'
              : 'border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-blue-50/50'
          }`}
        >
          <input
            ref={fileInputRef}
            type='file'
            multiple
            accept='image/*'
            className='hidden'
            onChange={(e) => e.target.files && addFiles(e.target.files)}
          />
          <div
            className={`rounded-full p-4 transition-colors ${isDragging ? 'bg-blue-100' : 'bg-white shadow-sm'}`}
          >
            <CloudUpload
              className={`h-8 w-8 transition-colors ${isDragging ? 'text-blue-600' : 'text-gray-400'}`}
            />
          </div>
          <div className='text-center'>
            <p className='text-sm font-medium text-gray-700'>
              Drop images here or{' '}
              <span className='text-blue-600 underline underline-offset-2'>browse</span>
            </p>
            <p className='mt-1 text-xs text-gray-400'>
              Each image will be compressed &amp; watermarked automatically
            </p>
          </div>
          {processingCount > 0 && (
            <div className='flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-xs font-medium text-blue-700'>
              <Loader2 className='h-3 w-3 animate-spin' />
              Processing {processingCount} image{processingCount > 1 ? 's' : ''}…
            </div>
          )}
        </div>

        {/* Processing queue (pending/processing) */}
        {images.some((img) => img.status !== 'done') && (
          <div className='border-t bg-white px-6 py-4'>
            <p className='mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500'>
              Queue
            </p>
            <div className='flex flex-col gap-2'>
              {images
                .filter((img) => img.status !== 'done')
                .map((img) => (
                  <div
                    key={img.id}
                    className='flex items-center gap-3 rounded-lg bg-gray-50 px-3 py-2'
                  >
                    <ImageIcon className='h-4 w-4 shrink-0 text-gray-400' />
                    <span className='flex-1 truncate text-sm text-gray-700'>
                      {img.originalName}
                    </span>
                    {(img.status === 'pending' || img.status === 'processing') && (
                      <Loader2 className='h-4 w-4 animate-spin text-blue-500' />
                    )}
                    {img.status === 'error' && (
                      <span className='text-xs font-medium text-red-500'>Failed</span>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeImage(img.id);
                      }}
                      className='rounded-full p-0.5 text-gray-400 hover:bg-gray-200 hover:text-gray-600'
                    >
                      <X className='h-4 w-4' />
                    </button>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Processed Gallery */}
        {doneImages.length > 0 && (
          <div className='border-t bg-white px-6 py-5'>
            <div className='mb-4 flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <CheckCircle className='h-4 w-4 text-green-500' />
                <p className='text-sm font-semibold text-gray-700'>
                  {doneImages.length} processed image{doneImages.length > 1 ? 's' : ''}
                </p>
              </div>
              <button
                onClick={() => setImages([])}
                className='text-xs text-gray-400 underline underline-offset-2 hover:text-red-500'
              >
                Clear all
              </button>
            </div>

            <PhotoProvider
              speed={() => 300}
              easing={(type) =>
                type === 2
                  ? 'cubic-bezier(0.36, 0, 0.66, -0.56)'
                  : 'cubic-bezier(0.34, 1.56, 0.64, 1)'
              }
              toolbarRender={({ onScale, scale }) => (
                <div className='flex items-center gap-2'>
                  <button
                    onClick={() => onScale(scale + 0.5)}
                    className='px-2 py-1 text-sm text-white/80 hover:text-white'
                  >
                    ＋
                  </button>
                  <button
                    onClick={() => onScale(scale - 0.5)}
                    className='px-2 py-1 text-sm text-white/80 hover:text-white'
                  >
                    －
                  </button>
                </div>
              )}
            >
              <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
                {doneImages.map((img) => (
                  <div key={img.id} className='group relative'>
                    <PhotoView src={img.previewUrl}>
                      <div className='relative aspect-square cursor-zoom-in overflow-hidden rounded-lg border border-gray-200 bg-gray-100 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-md'>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={img.previewUrl}
                          alt={img.originalName}
                          className='h-full w-full object-cover'
                        />
                        {/* Hover overlay */}
                        <div className='absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-200 group-hover:bg-black/30'>
                          <ZoomIn className='h-6 w-6 scale-75 text-white opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100' />
                        </div>
                      </div>
                    </PhotoView>
                    {/* Remove button */}
                    <button
                      onClick={() => removeImage(img.id)}
                      className='absolute -right-1.5 -top-1.5 z-10 hidden h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white shadow-md transition-all hover:bg-red-600 group-hover:flex'
                    >
                      <X className='h-3 w-3' />
                    </button>
                    <p className='mt-1.5 truncate px-0.5 text-center text-[11px] text-gray-400'>
                      {img.originalName}
                    </p>
                  </div>
                ))}
              </div>
            </PhotoProvider>
          </div>
        )}
      </Card>
    </section>
  );
}

const formSchema = z.object({
  title: z
    .string()
    .min(5, 'Title must be at least 5 characters.')
    .max(32, 'Title must be at most 32 characters.'),
  description: z
    .string()
    .min(10, 'Description must be at least 10 characters.')
    .max(200, 'Description must be at most 200 characters.'),
  severity: z.string().min(1, 'Please select severity.'),
  type: z.string().min(1, 'Please select a type.'),
  active: z.boolean(),
  notifications: z.boolean(),
  steps: z
    .array(
      z.object({
        text: z.string().min(1, 'Step description is required'),
      }),
    )
    .min(1, 'At least one step is required'),
  dueDate: z.string().optional(),
  tags: z.array(z.string()).optional(),
});
type FormValues = z.infer<typeof formSchema>;

const Page = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('tab1');

  const avatars = [
    { fallback: 'JD', alt: 'John Doe' },
    { fallback: 'AS', alt: 'Alice Smith' },
    { fallback: 'BK', alt: 'Bob Knight' },
    { fallback: '+5', alt: 'More' },
  ];

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: 'Sample Task',
      description: 'This is a sample task description.',
      severity: 'medium',
      type: 'feature',
      active: true,
      notifications: true,
      steps: [{ text: 'Step 1' }, { text: 'Step 2' }],
      dueDate: new Date().toISOString(),
      tags: ['1', '2'],
    },
  });
  const fields: FieldConfig[] = [
    {
      name: 'title',
      label: 'Title',
      type: 'input',
      placeholder: 'Enter title',
    },
    {
      name: 'type',
      label: 'Category',
      type: 'select',
      options: [
        { label: 'Bug', value: 'bug' },
        { label: 'Feature', value: 'feature' },
        { label: 'Improvement', value: 'improvement' },
      ],
      placeholder: 'Select category',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      maxLength: 200,
      description: 'Detailed explanation of the item',
    },
    {
      name: 'severity',
      label: 'Severity',
      type: 'select',
      options: [
        { label: 'Low', value: 'low' },
        { label: 'Medium', value: 'medium' },
        { label: 'High', value: 'high' },
        { label: 'Critical', value: 'critical' },
      ],
    },
    {
      name: 'active',
      label: 'Is Active',
      type: 'switch',
    },
    {
      name: 'notifications',
      label: 'Enable Notifications',
      type: 'checkbox',
    },
    {
      name: 'dueDate',
      label: 'Deadline (Schema)',
      type: 'date',
    },
    {
      name: 'tags',
      label: 'Tags (Schema Multi-Select)',
      type: 'multi-select',
      options: [
        { id: '1', label: 'React' },
        { id: '2', label: 'Next.js' },
        { id: '3', label: 'Tailwind' },
      ],
    },
  ];

  function onSubmit(data: FormValues) {
    console.log(data);
  }
  return (
    <Container className='mb-20 mt-20 flex flex-col gap-16 px-6'>
      <h1 className='text-4xl font-extrabold text-blue-600'>Component Reference Guide</h1>

      <ImageUploaderSection />

      <section className='flex flex-col gap-6'>
        <h2 className='text-2xl font-bold'>Buttons Showcase</h2>
        <div className='flex flex-wrap gap-4 rounded-lg border bg-white p-6 shadow-sm'>
          <Button variant='default'>Default Button</Button>
          <Button variant='outline'>Outline Button</Button>
          <Button variant='destructive'>Destructive Button</Button>
          <Button variant='secondary'>Secondary Button</Button>
          <Button loading>Loading State</Button>
          <Button disabled>Disabled State</Button>
        </div>
      </section>

      <section className='flex flex-col gap-6'>
        <h2 className='text-2xl font-bold'>Tabs Showcase</h2>
        <div className='rounded-lg border bg-white p-6 shadow-sm'>
          <CustomTabs
            tabs={[
              { value: 'tab1', label: 'General' },
              { value: 'tab2', label: 'Security' },
              { value: 'tab3', label: 'Notifications' },
            ]}
            tab={activeTab}
            setTab={setActiveTab}
          />
          <div className='mt-4 rounded-lg bg-gray-50 p-4'>
            {activeTab === 'tab1' && <p>General settings content...</p>}
            {activeTab === 'tab2' && <p>Security settings content...</p>}
            {activeTab === 'tab3' && <p>Notifications settings content...</p>}
          </div>
        </div>
      </section>

      <section className='flex flex-col gap-6'>
        <h2 className='text-2xl font-bold'>Avatar Group</h2>
        <div className='flex items-center gap-8 rounded-lg border bg-white p-6 shadow-sm'>
          <div>
            <p className='mb-2 text-sm text-gray-500'>Default (Grayscale)</p>
            <AvatarGroup avatars={avatars} />
          </div>
          <div className='mt-1'>
            <p className='mb-2 text-sm text-gray-500'>Color (Grayscale off)</p>
            <AvatarGroup avatars={avatars} grayscale={false} />
          </div>
          <div>
            <p className='mb-2 text-sm text-gray-500'>RTL Layout</p>
            <AvatarGroup avatars={avatars} rtl={true} />
          </div>
        </div>
      </section>

      <section className='flex flex-col gap-6'>
        <h2 className='text-2xl font-bold'>Empty State</h2>
        <div className='rounded-lg border bg-white p-6 shadow-sm'>
          <EmptyState
            title='No Items Found'
            subtitle="Try adjusting your filters or search terms to find what you're looking for."
            StateIcon={<div className='text-4xl'>🔍</div>}
          />
        </div>
      </section>

      <section className='flex flex-col gap-6'>
        <h2 className='text-2xl font-bold'>Modal Demo</h2>
        <div className='rounded-lg border bg-white p-6 shadow-sm'>
          <Button onClick={() => setOpen(true)} variant='outline'>
            Open Custom Modal
          </Button>
          <CustomModal title='Reference Modal' onOpenChange={setOpen} open={open}>
            <div className='p-4'>
              <p className='mb-4 text-gray-600'>
                This is a reusable modal component. It supports custom headers, footers, and
                responsive behavior.
              </p>
              <Button onClick={() => setOpen(false)}>Close Modal</Button>
            </div>
          </CustomModal>
        </div>
      </section>

      <section className='flex flex-col gap-6'>
        <h2 className='text-2xl font-bold'>Horizontal Scroll Showcase</h2>
        <Card className='p-6'>
          <HorizonalScrollare />
        </Card>
      </section>

      <section className='flex flex-col gap-6'>
        <h2 className='text-2xl font-bold'>Comprehensive Schema Form</h2>
        <Card className='border-2 border-dashed bg-gray-50 p-10'>
          <SchemaForm form={form} fields={fields} onSubmit={onSubmit}>
            {(render) => (
              <div className='grid grid-cols-12 gap-6'>
                <div className='col-span-12 md:col-span-8'>{render('title')}</div>

                <div className='col-span-12 md:col-span-4'>{render('type')}</div>
                <div className='col-span-12'>{render('description')}</div>
                <div className='col-span-12 md:col-span-4'>{render('severity')}</div>
                <div className='col-span-6 flex items-end pb-2 md:col-span-4'>
                  {render('active')}
                </div>
                <div className='col-span-6 flex items-end pb-2 md:col-span-4'>
                  {render('notifications')}
                </div>
                <div className='col-span-12 md:col-span-6'>{render('dueDate')}</div>
                <div className='col-span-12 md:col-span-6'>{render('tags')}</div>

                <div className='col-span-12 mt-4 border-t pt-6'>
                  <h3 className='mb-4 text-lg font-semibold'>Field Array (Steps)</h3>
                  <FormFieldArray name='steps'>
                    {(index: number) => (
                      <div className='mb-4'>
                        <FormInput
                          name={`steps.${index}.text`}
                          label={`Step ${index + 1}`}
                          placeholder='What needs to be done?'
                        />
                      </div>
                    )}
                  </FormFieldArray>
                </div>

                <div className='col-span-12 mt-6 flex justify-end gap-3'>
                  <Button type='button' variant='outline' onClick={() => form.reset()}>
                    Reset
                  </Button>
                  <FormSubmit>
                    {(loading) => (
                      <Button variant='secondary' type='submit' disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit Form'}
                      </Button>
                    )}
                  </FormSubmit>
                </div>
              </div>
            )}
          </SchemaForm>
        </Card>
      </section>
    </Container>
  );
};

export default Page;
