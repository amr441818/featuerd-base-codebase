'use client';

import { Send } from 'lucide-react';

import { Button, SchemaForm } from '@/features/shared';

import { useServerForm } from '../_hooks';
import { testServerAction } from './_actions';
import { formSchema } from './_actions/schema';

/**
 * 📝 مكون ServerForm
 * مثال عملي للفورم اللي بيستخدم الـ Server Actions مع React Hook Form.
 */
export function ServerForm() {
  const { form, action, isPending, state } = useServerForm({
    schema: formSchema,
    actionFn: testServerAction,
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  return (
    <section className='flex items-center justify-center px-4 py-12'>
      <div className='w-full max-w-2xl overflow-hidden rounded-[2rem] border border-border/40 bg-background shadow-2xl'>
        {/* Header */}
        <div className='relative p-8 pb-0 text-center'>
          <div className='mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary'>
            <Send size={32} />
          </div>
          <h2 className='mb-2 text-3xl font-black text-foreground'>تواصل معنا</h2>
          <p className='text-muted-foreground'>
            أرسل لنا استفسارك وسنقوم بالرد عليك في أقرب وقت ممكن.
          </p>
        </div>

        <SchemaForm
          form={form}
          action={action}
          fields={[
            { name: 'name', label: 'الاسم الكامل', type: 'input' },
            { name: 'email', label: 'البريد الإلكتروني', type: 'input' },
            { name: 'message', label: 'الرسالة', type: 'textarea' },
          ]}
        >
          {(render) => (
            <div className='space-y-6 p-8'>
              <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
                <div className='group transition-all'>{render('name')}</div>
                <div className='group transition-all'>{render('email')}</div>
              </div>

              <div className='group transition-all'>{render('message')}</div>

              {/* Success/Error Message */}
              {state?.message && (
                <div
                  className={`flex items-center gap-3 rounded-2xl p-5 text-sm font-bold duration-500 animate-in fade-in slide-in-from-bottom-2 ${
                    state.success
                      ? 'border border-green-200 bg-green-50 text-green-700'
                      : 'border border-red-200 bg-red-50 text-red-700'
                  }`}
                >
                  <div
                    className={`h-2.5 w-2.5 rounded-full ${state.success ? 'animate-pulse bg-green-500' : 'bg-red-500'}`}
                  />
                  {state.message}
                </div>
              )}

              {/* Submit Action */}
              <div className='pt-4'>
                <Button
                  className='w-full bg-primary py-7 text-xl shadow-lg transition-all duration-300'
                  loading={isPending}
                  type='submit'
                >
                  {isPending ? (
                    'جاري الإرسال...'
                  ) : (
                    <span className='flex items-center gap-2'>
                      إرسال الرسالة الآن
                      <Send size={20} className='rtl:rotate-180' />
                    </span>
                  )}
                </Button>
              </div>
            </div>
          )}
        </SchemaForm>
      </div>
    </section>
  );
}
