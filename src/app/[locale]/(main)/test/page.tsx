'use client';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
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
          <div>
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
