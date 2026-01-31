import { FormField } from '@/features/shared/types/formInputs';

export const useFieldContacts = () => {
  const fields: FormField[] = [
    {
      name: 'name',
      label: 'الاسم',
      type: 'text',
      placeholder: 'الاسم',
      fieldType: 'input',
      colSpan: 2,
      inputClassName: '!max-w-full !lg:max-w-[468px]',
    },
    {
      name: 'email',
      label: 'البريد الإلكتروني',
      type: 'email',
      placeholder: 'البريد الإلكتروني',
      fieldType: 'input',
    },
    {
      name: 'mobile',
      label: 'رقم الهاتف',
      type: 'number',
      placeholder: 'رقم الهاتف',
      fieldType: 'input',
    },
    {
      name: 'message',
      label: 'الرسالة',
      placeholder: 'الرسالة',
      fieldType: 'textarea',
      colSpan: 2,
    },
  ];
  return fields;
};
