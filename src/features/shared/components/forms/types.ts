export type FieldType =
  | 'input'
  | 'textarea'
  | 'select'
  | 'checkbox'
  | 'switch'
  | 'date'
  | 'multi-select';

export type FieldConfig = {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  options?: { label: string; value?: string; id?: string; [key: string]: any }[];
  maxLength?: number;
  description?: string;
  /** 🔥 الجديد */
  visible?: (values: Record<string, any>) => boolean;
  disabled?: boolean;
  className?: string;
};
