import { ReactNode } from "react";

export type FieldType =
  | 'input'
  | 'textarea'
  | 'select'
  | 'checkbox'
  | 'switch'
  | 'date'
  | 'multi-select'
  | 'radio-group';

export type FieldConfig = {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  options?: { label: string; value?: string; id?: string;[key: string]: any }[];
  maxLength?: number;
  description?: string;
  icon?:ReactNode,
  /** 🔥 الجديد */
  visible?: (values: Record<string, any>) => boolean;
  disabled?: boolean;
  className?: string;
  renderOption?: (option: { label: string; value?: string; id?: string;[key: string]: any }) => React.ReactNode;
  renderTrigger?: (value: string | undefined) => React.ReactNode;
};
