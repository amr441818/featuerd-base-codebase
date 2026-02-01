# App Routing & Structure 🗺️

This project uses the **Next.js App Router** with a specific structure to handle internationalization (i18n), authentication, and modular pages.

## 📂 Directory Layout

The core of the application logic resides in `src/app/`.

```text
src/app/
├── [locale]/           # i18n Dynamic Segment (English/Arabic)
│   ├── (auth)/         # Public Route Group (Login, Register)
│   ├── (main)/         # Protected Route Group (Dashboard, Features)
│   ├── globals.css     # Global styles
│   └── layout.tsx      # Root Layout (Providers, i18n context)
├── apis/               # API Routes & Middleware
│   ├── auth/           # NextAuth handlers
│   └── [...nextauth]/  # Auth configuration
└── middleware.ts       # Route protection and locale redirection
```

---

## 🌍 Internationalization (i18n)

We use `next-intl` to handle multi-language support. The `[locale]` segment in the path ensures every route is prefixed with the language (e.g., `/en/dashboard` or `/ar/dashboard`).

### Key Files:

- **`[locale]/layout.tsx`**: Configures the `NextIntlClientProvider` and sets the text direction (`ltr` vs `rtl`) based on the locale.
- **`messages/`**: (Root directory) Contains JSON files for translations.

---

## 🏗️ Route Groups

We use parenthesis to group routes without affecting the URL structure.

### 1. `(auth)`

- **Purpose:** Handles unauthenticated users.
- **Example Route:** `/login` (URL: `/[locale]/login`)
- **Isolation:** Keeps authentication UI logic separate from the rest of the app.

### 2. `(main)`

- **Purpose:** Handles the core application UI (Authenticated area).
- **Example Route:** `/[locale]/`
- **Authenticated Layout:** Typically includes the sidebar, navbar, and main content wrapper.

---

## 🔌 API & Middleware

### API Routes (`src/app/apis`)

Server-side endpoints and authentication handlers are located here. This keeps the frontend and "backend-frontend" logic separated.

### Middleware

The `middleware.ts` file (in the project root) is responsible for:

- Redirecting users to their preferred locale.
- Protecting `(main)` routes by checking for valid session tokens.

---

## 💡 Best Practices

- **Keep Layouts Clean:** Use [Providers](file:///c:/work/featuerd-base-codebase/src/providers/providers.tsx) to wrap the app instead of polluting the root layout.
- **Route Specificity:** Add pages inside the appropriate group (`auth` or `main`) to ensure they inherit the correct layout and protection.
- **Client vs Server:** Prefer Server Components by default. Only use `'use client'` when interactivity (hooks, event listeners) is needed.

> [!IMPORTANT]
> When adding a new feature, remember to add a page in `src/app/[locale]/(main)/[feature-name]/page.tsx` and use a component from `src/features/[feature-name]`.
