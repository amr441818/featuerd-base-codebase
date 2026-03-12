import { ChangeEvent, Dispatch, ReactNode, SetStateAction } from 'react';

import { FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';

//components / reusableComponents/ formLayout
export type FormLayoutProps = {
  children: ReactNode;
  title?: string;
};

//components / reusableComponents/ mainPageCard
export type MainCardProps = {
  children: ReactNode;
};

export type MainListProps = {
  children?: ReactNode;
  title?: string;
};

interface Pagination {
  total: number;
  last_page: number;
  per_page: number;
  current_page: number;
}

export type TableColumn = {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string;
};

export type TableRow = {
  id: string | number;
  [key: string]: string | number | boolean | null | undefined;
};

export type OptionType = {
  value: string | number;
  label: string;
};

export type TableProps = {
  tableHead: TableColumn[];
  tableBody: TableRow[];
  allColumns?: string[];
  isLoading?: { [key: number]: boolean };
  isLoadingDelivery?: { [key: number]: boolean };
  linkNavigation?: string;
  hasCheckbox?: boolean;
  pageAdd?: boolean;
  showAddButton?: boolean;
  enableEdit?: boolean;
  enableDelete?: boolean;
  enableSearch?: boolean;
  enableFilter?: boolean;
  searchValue?: string;
  resetFilters?: () => void;
  typesHandler?: (id: string) => void;
  handleSelect?: (value: OptionType, stateName: string) => void;
  developerOptions?: OptionType[];
  cityOptions?: OptionType[];
  areaOptions?: OptionType[];
  types?: { id: string; name: string }[];
  setSearch?: Dispatch<SetStateAction<string>>;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onView?: (id: string) => void;
  pagination?: Pagination;
  setPage: (page: number) => void;
  page: number;
  openCloseModal: Dispatch<SetStateAction<boolean>>;
};

// Generic version that works with any form data type
export type CustomTextAreaProps<TFieldValues extends FieldValues = FieldValues> = {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  name: Path<TFieldValues>;
  placeholder: string;
  label?: string;
  labelLang?: string;
  required?: boolean;
  register: UseFormRegister<TFieldValues>;
  className?: string;
  rows?: number;
  maxLength?: number;
};

export type PhoneValidationExampleProps = {
  label?: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
};

// Generic version for input component
export type CustomInputProps<TFieldValues extends FieldValues = FieldValues> = {
  register: UseFormRegister<TFieldValues>;
  validation?: RegisterOptions<TFieldValues, Path<TFieldValues>>;
  type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'date';
  placeholder: string;
  name: string;
  error?: string;
  className?: string;
  required?: boolean;
  disabled?: boolean;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

//components / reusableComponents/ NumberInput
export type CustomNumberInputProps = {
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
  disabled?: boolean;
};

//components / reusableComponents/ customSelect
export type CustomSelectProps = {
  styles?: {
    bg?: string;
    text?: string;
    border?: string;
  };
  options: OptionType[];
  editOption?: OptionType | null;
  label?: string;
  onChange: (value: OptionType) => void;
  width?: string;
  icon?: ReactNode;
  className?: string;
  value?: OptionType;
  isDisabled?: boolean;
  placeholder?: string;
};

export type CustomAnySelectProps = {
  label?: string;
  type: string;
  id?: string;
  onChange: (value: number) => void;
  options?: OptionType[];
  value?: number;
};

export type ModalProps = {
  children: ReactNode;
  title?: string;
  openCloseModal: Dispatch<SetStateAction<boolean>>;
  resetEditData?: Dispatch<SetStateAction<unknown[]>>;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isOpen: boolean;
  onClose?: () => void;
};

// Alternative approach if you want to define specific form data interfaces
// Example form data interface for your forms
export interface ExampleFormData {
  name: string;
  email: string;
  description: string;
  phone: string;
  age: number;
}

// You can then use it like this in your components:
// type SpecificCustomInputProps = CustomInputProps<ExampleFormData>;
