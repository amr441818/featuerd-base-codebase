export type FieldType = 'input' | 'textarea' | 'select' | 'checkbox' | 'switch';

export type FieldConfig = {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  options?: { label: string; value: string }[];
  maxLength?: number;
  description?: string;
  /** 🔥 الجديد */
  visible?: (values: Record<string, any>) => boolean;
};
