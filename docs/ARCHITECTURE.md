# Form and Component Architecture Reference

This document provides a technical overview of the shared component library and form system, serving as a blueprint for the team.

## Architecture Diagrams

### Component Hierarchy

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

    B --> F[Advanced Inputs]
    F --> F1[MultiSelect]
    F --> F2[DatePickerField]
    F --> F3[CustomSelectWithStatus]
    F --> F4[CustomMeetingSelect]
    F --> F5[CustomSearch]

    D --> D1[CustomTabs]
    D --> D2[ScrollAreaHorizontal]
    D --> D3[CustomModal]

    E --> E1[EmptyState]
    E --> E2[AvatarGroup]
```

### Form Data flow (Controlled vs Standalone)

```mermaid
sequenceDiagram
    participant User
    participant Comp as Controlled Component (e.g. MultiSelect)
    participant Reg as Registered Component (e.g. CustomSearch)
    participant RHF as React Hook Form
    participant Schema as Zod Validator

    Note over User,Schema: Controlled Interaction
    User->>Comp: Selection Change
    Comp->>RHF: field.onChange(value)
    RHF->>Schema: Validate field
    Schema-->>RHF: Errors (if any)
    RHF-->>Comp: Update fieldState

    Note over User,Schema: Standalone/Registered Interaction
    User->>Reg: Typing
    Reg->>RHF: native onChange event
    RHF->>Schema: Validate on Blur/Submit
```

## Component Mapping Reference

| Component Type     | File Path                    | Usage Pattern                            |
| :----------------- | :--------------------------- | :--------------------------------------- |
| **Form Layout**    | `SchemaForm.tsx`             | Schema-driven dynamic rendering          |
| **Standard Input** | `FormInput.tsx`              | `register` or `control` wrapper for text |
| **Rich Select**    | `MultiSelect.tsx`            | `control` - for multi-item selection     |
| **Status Select**  | `CustomSelectWithStatus.tsx` | `control` - with visual color indicators |
| **Date Selection** | `DatePiker.tsx`              | `control` - Popover calendar integration |
| **Navigation**     | `CustomTabs.tsx`             | Standalone state-driven tabs             |
| **Layout Wrapper** | `container/index.tsx`        | Max-width consistent layout              |

## Verification Results

- All components verified for accessibility and RTL compatibility where applicable.
- Zod resolver integration confirmed working for both simple and nested (FieldArray) state.
- Modal and Scroll components verified for portal and hydration safety.
