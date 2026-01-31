import { FormField } from '@/features/shared/types/formInputs';

export const useFields = () => {
  const loginFields = (): FormField[] => [
    {
      label: 'رقم الجوال',
      name: 'mobile',
      type: 'text',
      placeholder: 'رقم الجوال',
      fieldType: 'input',
      colSpan: 2,
    },
  ];
  const registerFields = (): FormField[] => [
    {
      label: 'الاسم',
      type: 'text',
      placeholder: 'الاسم',
      name: 'name',
      fieldType: 'input',
      colSpan: 2,
    },
    {
      label: 'رقم الجوال',
      type: 'text',
      placeholder: 'رقم الجوال',
      name: 'mobile',
      fieldType: 'input',
      colSpan: 2,
    },
  ];
  const editProfileFields = (): FormField[] => [
    {
      label: 'الاسم',
      type: 'text',
      placeholder: 'الاسم',
      name: 'name',
      fieldType: 'input',
      colSpan: 2,
    },
    {
      label: 'رقم الجوال',
      type: 'text',
      placeholder: 'رقم الجوال',
      name: 'mobile',
      fieldType: 'input',
      colSpan: 2,
    },
  ];
  return { loginFields, registerFields, editProfileFields };
};
