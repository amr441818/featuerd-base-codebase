# Feature-Based Architecture Guide 🏗️

This project follows a **Feature-Based** structure to keep code modular, scalable, and easy to maintain. Every major business logic or UI module should live within `src/features/`.

## 📁 Standard Feature Structure

Using `src/features/tasks` as a reference, every feature should follow this layout:

```text
src/features/[feature-name]/
├── index.ts         # Public API (Entry point) 👈
├── components/      # UI components specific to this feature
│   ├── forms/       # Complex forms (using react-hook-form)
│   ├── modals/      # Dialogs and Modals
│   ├── tables/      # Data tables and columns
│   ├── Cards/       # Specific card layouts
│   └── filters/     # List/Table filtration components
├── hooks/           # Custom React Query hooks (API connectors)
├── services/        # API definition (using apiServiceCall)
├── types/           # TypeScript interfaces and types
└── utils/           # Helper functions for this feature
```

---

## 🚫 The "Public API" Restriction

Every feature must have an `index.ts` file that acts as the **only** entry point for other parts of the application.

### The Rule

- **DO NOT** import directly from internal feature folders (e.g., `import { X } from '@/features/tasks/components/X'`).
- **DO** import only from the feature root (e.g., `import { X } from '@/features/tasks'`).

### Why this restriction? 🧠

1. **Encapsulation:** It hides the internal details of how a feature is built. The team can move files inside a feature without breaking every import in the project.
2. **Readability:** Clean, short import statements.
3. **Implicit Contract:** It defines what is "Public" and what is "Internal". Internal helpers should NOT be exported from `index.ts`.
4. **Avoid Dependency Hell:** It helps prevent circular dependencies by centralizing exports.

---

## 🛠️ Step-by-Step: Making a New Feature

### 1. Define Types (`types/`)

Start by defining the data structure your feature will handle.

```typescript
// types/user.ts
export interface User {
  id: number;
  name: string;
}
```

### 2. Create the Service (`services/`)

Define your API calls in a clean service object.

```typescript
// services/apis.ts
import apiServiceCall from '@/lib/apiServiceCall';

export const UsersService = {
  getUsers: async (headers?: any) => {
    const data = await apiServiceCall({
      method: 'GET',
      url: 'users',
      headers,
    });
    return data;
  },
};
```

### 3. Create a Custom Hook (`hooks/`)

Wrap the service in a React Query hook for state management and caching.

```typescript
// hooks/useGetUsers.tsx
import { useAppQuery } from '@/hooks/useAppQuery';

import { UsersService } from '../services/apis';

export const useGetUsers = () => {
  return useAppQuery({
    queryKey: ['users'],
    queryFn: (headers) => UsersService.getUsers(headers),
  });
};
```

### 4. Build Components (`components/`)

Use your hook inside components.

```tsx
// components/UserList.tsx
import { useGetUsers } from '../hooks/useGetUsers';

export const UserList = () => {
  const { data, isLoading } = useGetUsers();

  if (isLoading) return <div>Loading...</div>;

  return (
    <ul>
      {data?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
```

---

## 💡 Best Practices

- **Isolation:** Components in a feature should only import from their own feature folder or global `@/components`. Avoid cross-feature imports unless necessary.
- **Naming:** Hooks should start with `use`. Services should end with `Service`.
- **Modals & Forms:** Keep forms in separate files (`components/forms/`) to make them reusable within different modals or pages.
- **Table Columns:** Define table columns in a separate `columns.tsx` inside `components/tables/` to keep the main table component clean.

> [!TIP]
> Always check [src/features/tasks](file:///c:/mywork/featuerd-base-codebase/src/features/tasks) for the most complete example of complex table and filter implementation.
