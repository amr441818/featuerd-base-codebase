# Shared Feature Module 📦

The `src/features/shared` module contains the fundamental building blocks used throughout the application. It provides standardized hooks, UI components, and form utilities to ensure consistency and speed up development.

## 📁 Directory Structure

```text
src/features/shared/
├── components/      # Global UI components & Form wrappers
│   ├── forms/       # All Form Components (Wrappers + Legacy Custom Inputs)
│   └── modals/      # Standardized dialogs (CustomModal)
├── hooks/           # Core API and Utility hooks
├── schemas/         # Shared Zod validation schemas
└── types/           # Global TypeScript interfaces
```

---

## 🎣 Core Hooks

### `useAppQuery`

A wrapper around `@tanstack/react-query`'s `useQuery` that automatically handles session headers and status checks.

**Usage:**

```typescript
import { useAppQuery } from '@/features/shared';

const { data } = useAppQuery({
  queryKey: ['my-data'],
  queryFn: (headers) => myService.fetchData(headers),
});
```

### `useAppMutation`

Similar to `useAppQuery`, designed for POST/PUT/DELETE operations with automated header handling and error notifications.

---

## 🖼️ Shared UI Components

### `CustomModal`

A standardized modal component based on Radix UI.

**Usage:**

```tsx
import { CustomModal } from '@/features/shared';

<CustomModal open={isOpen} onOpenChange={setIsOpen} title='Modal Title'>
  <p>Modal content goes here.</p>
</CustomModal>;
```

### `AvatarGroup`

Displays a set of user avatars with a "+N" overflow indicator.

### `DatePiker` (Pure UI)

A date picker component using Radix Popover and a custom Calendar.

- **Location:** `forms/DatePiker.tsx`
- **Use when:** You need a date picker without `react-hook-form` integration.

---

## 📝 Form System

We have consolidated all valid form components into `src/features/shared/components/forms`.

### 1. Form Wrappers (Recommended)

Components that integrate with `react-hook-form` to handle validation and state automatically.

- `Form`: The main wrapper.
- `FormInput`, `FormSelect`: Automatically connect to the form context.
- `FormDatePicker`: Integrated date picker for forms.
- `FormMultiSelect`: Multi-selection component for forms.
- `SchemaForm`: Fully dynamic form generation from Zod schema and FieldConfig.

**Usage Example:**

```tsx
import {
  Form,
  FormDatePicker,
  FormInput,
  FormMultiSelect,
  FormSubmit,
  useForm,
} from '@/features/shared';

const form = useForm({
  resolver: zodResolver(mySchema),
  defaultValues: { email: '', dueDate: '', tags: [] },
});

<Form form={form} onSubmit={handleSubmit}>
  <FormInput name='email' label='Email' />
  <FormDatePicker name='dueDate' label='Due Date' />
  <FormMultiSelect name='tags' label='Tags' options={[{ id: '1', label: 'Tag 1' }]} />
  <FormSubmit>Submit</FormSubmit>
</Form>;
```

### 2. Legacy / Custom Inputs

Isolated input components that may require manual `control` or `register` passing. These are widely used in existing modals and views.

- `CustomInput`, `CustomSelect`, `CustomCheckbox`, `CustomButton`.
- `CustomMeetingSelect`, `CustomSelectWithStatus`.

---

## 🎨 Styling & Themes

The shared module leverages CSS variables (defined in `globals.css`) to maintain a consistent look and feel.

- **Colors:** Use variables like `var(--primary)`, `var(--secondary)`, and `var(--tertiary)` for brand consistency.
- **Components:** UI components like `CustomButton` and `Navbar` are already wired to these variables.
- **Responsive:** Container and Layout components ensure a consistent grid system across all features.

---

## 💡 Best Practices

- **Feature-First:** If a component is only used by ONE feature, keep it in that feature's folder. Only move it to `shared` if it's used (or intended to be used) across multiple modules.
- **Consistency:** Always use `FormInput` or `CustomInput` instead of native `<input>` to ensure the project style guide is followed.
- **Types:** Always check `src/features/shared/types` before creating a new interface for generic entities like `User`, `Project`, or `ApiResponse`.

> [!TIP]
> Use the [index.ts](file:///c:/mywork/featuerd-base-codebase/src/features/shared/index.ts) entry point for all your imports to keep them clean:
> `import { useAppQuery, CustomModal } from '@/features/shared';`
