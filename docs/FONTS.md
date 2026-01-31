# Font Configuration

## Overview

This project uses two fonts:

- **Inter** - For English content (from Google Fonts)
- **Montserrat Arabic** - For Arabic content (local font files)

## Font Files Location

All Montserrat Arabic font files are located in: `public/fonts/`

Available weights:

- Thin (250)
- ExtraLight (275)
- Light (300)
- Regular (400)
- Medium (500)
- SemiBold (600)
- Bold (700)
- ExtraBold (800)
- Black (900)

## Implementation

### 1. Font Definition

Fonts are defined in:

- `public/fonts/montserrat-arabic.ts` - Montserrat Arabic configuration
- `src/app/[locale]/layout.tsx` - Inter from Google Fonts

### 2. Automatic Language Switching

The layout automatically applies the correct font based on the locale:

```tsx
<body className={locale === 'ar' ? montserratArabic.className : inter.className}>
```

### 3. Using Fonts in Components

You can use the fonts via Tailwind classes:

```tsx
// For Inter (English)
<div className="font-inter">English Text</div>

// For Montserrat Arabic
<div className="font-montserrat-arabic">نص عربي</div>
```

### 4. CSS Variables

The fonts are also available as CSS variables:

- `--font-inter`
- `--font-montserrat-arabic`

## Notes

- The font automatically switches based on the current locale (ar/en)
- All font weights are loaded for maximum flexibility
- Fonts use `display: swap` for better performance
