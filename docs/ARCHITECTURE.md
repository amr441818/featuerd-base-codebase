# Form and Component Architecture Reference

This document provides a technical overview of the shared component library and form system, serving as a blueprint for the team.

## Architecture Diagrams

### Component Hierarchy

![Component Hierarchy](./images/component_hierarchy.png)

```mermaid
graph TD
    A[Container] --> B[Page Content]
    B --> C[SchemaForm / Custom Form]
    B --> D[Layout Components]
    B --> E[Feedback Components]

    C --> C1[FormContext Provider]
    C1 --> C2[FormFieldRenderer]
    C2 --> C3[FormInput]
    C2 --> C4[FormTextarea]
    C2 --> C5[FormSelect]
    C2 --> C6[FormCheckbox]
    C2 --> C7[FormSwitch]
    C2 --> C8[FormDatePicker]
    C2 --> C9[FormMultiSelect]

    B --> F[Base UI Components]
    F --> F1[CustomButton]
    F --> F2[AvatarGroup]
    F --> F3[EmptyState]

    D --> D1[CustomTabs]
    D --> D2[HorizonalScrollare]
    D --> D3[CustomModal]
```

### Form Data flow (Controlled vs Standalone)

![Form Data Flow](./images/form_data_flow.png)

```mermaid
sequenceDiagram
    participant User
    participant Comp as Controlled Component (e.g. FormMultiSelect)
    participant Reg as Native Input (e.g. FormInput)
    participant RHF as React Hook Form
    participant Schema as Zod Validator

    Note over User,Schema: Controlled Interaction
    User->>Comp: Selection Change
    Comp->>RHF: field.onChange(value)
    RHF->>Schema: Validate field
    Schema-->>RHF: Errors (if any)
    RHF-->>Comp: Update fieldState

    Note over User,Schema: Form Wrapper Interaction
    User->>Reg: Typing
    Reg->>RHF: controller onChange event
    RHF->>Schema: Validate on Change/Blur/Submit
```

## Component Mapping Reference

| Component Type     | File Path (in `forms/`) | Usage Pattern                             |
| :----------------- | :---------------------- | :---------------------------------------- |
| **Form Layout**    | `SchemaForm.tsx`        | Schema-driven dynamic rendering           |
| **Standard Input** | `FormInput.tsx`         | `control` managed input                   |
| **Rich Select**    | `FormMultiSelect.tsx`   | `control` - for multi-item selection      |
| **Date Selection** | `FormDatePicker.tsx`    | `control` - Popover calendar integration  |
| **Button**         | `CustomButton.tsx`      | Specialized button with gradient/loading  |
| **Navigation**     | `CustomTabs.tsx`        | Standalone state-driven tabs (parent dir) |
| **Layout Wrapper** | `container/index.tsx`   | Max-width consistent layout               |

## Design System & Theme

The application uses CSS variables for theming, enabling consistent styling across components.

| Variable       | Role       | Description                                           |
| :------------- | :--------- | :---------------------------------------------------- |
| `--primary`    | Main Brand | Used for primary buttons, nav highlights (Blue/Green) |
| `--secondary`  | Action/Alt | Used for secondary actions (Teal)                     |
| `--tertiary`   | Dark Alt   | Used for deep backgrounds/headers                     |
| `--background` | Base BG    | Main application background (Light Gray/White)        |

## Verification Results

- All legacy standalone inputs (`CustomSearch`, `CustomInput` etc) have been consolidated into the `Form*` prefix wrappers.
- `FormFieldRenderer` updated to support all field types including `date` and `multi-select`.
- Global CSS simplified to use standardized Tailwind theme variables.
- Navbar and Footer updated to consume these variables for better maintainability.
