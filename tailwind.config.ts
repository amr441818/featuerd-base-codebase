import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          // Direct hex value for convenience
          light: '#4EC0F4',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
          // Direct hex value for convenience
          dark: '#00344B',
        },
        neutral: {
          DEFAULT: 'hsl(var(--neutral))',
          foreground: 'hsl(var(--neutral-foreground))',
          // Direct hex value for convenience
          blue: '#007AB1',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
          // Direct hex value for convenience
          gray: '#818181',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
          // Direct hex values for convenience
          red: '#FF0000',
          'red-bg': '#FFEDEA',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        'montserrat-arabic': ['var(--font-montserrat-arabic)', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(120px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },

        'scale-up': {
          '0%': { opacity: '0', transform: 'none' },
          '100%': { opacity: '1', transform: 'scale(3) translate(-33.1%, 20.2%) ' },
        },
        formIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.97)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },

        'scale-down': {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.95)' },
        },
        'fade-down': {
          '0%': { opacity: '0', transform: 'translateY(-120px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-right': {
          '0%': { opacity: '0', transform: 'translateX(-120px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-left': {
          '0%': { opacity: '0', transform: 'translateX(120px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '400% 400%',
            'background-position': 'right center',
          },
        },
        'modal-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'modal-out': {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.95)' },
        },
        gradient: {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
        'fade-down': 'fade-down 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
        'fade-left': 'fade-left 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
        'fade-right': 'fade-right 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
        'scale-up': 'scale-up 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
        'scale-down': 'scale-down 0.2s cubic-bezier(0.22, 1, 0.36, 1)',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'fade-out': 'fade-out 0.6s ease-in forwards',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        gradient: 'gradient 4s ease-in-out infinite',
        'modal-in': 'modal-in 0.20s ease-out forwards',
        'modal-out': 'modal-out 0.1s ease-in forwards',
        formIn: 'formIn 700ms ease-out forwards',
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
