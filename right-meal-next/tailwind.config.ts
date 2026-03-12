import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/features/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
    	extend: {
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		backgroundImage: {
    			'primary-gradient': 'linear-gradient(90deg, #28A272 56.07%, #0F3C2A 100%)'
    		},
    		fontSize: {
    			display: [
    				'clamp(2.75rem, 5vw + 1rem, 3.75rem)',
    				{
    					lineHeight: '1.2',
    					fontWeight: '700',
    					letterSpacing: '-0.02em'
    				}
    			],
    			h1: [
    				'clamp(2rem, 4vw + 1rem, 2.75rem)',
    				{
    					lineHeight: '1.2',
    					fontWeight: '700',
    					letterSpacing: '-0.01em'
    				}
    			],
    			h2: [
    				'clamp(1.5rem, 3vw + 1rem, 2rem)',
    				{
    					lineHeight: '1.3',
    					fontWeight: '600',
    					letterSpacing: '-0.01em'
    				}
    			],
    			h3: [
    				'clamp(1.25rem, 2vw + 1rem, 1.5rem)',
    				{
    					lineHeight: '1.35',
    					fontWeight: '600'
    				}
    			],
    			h4: [
    				'clamp(1.125rem, 1.5vw + 0.875rem, 1.25rem)',
    				{
    					lineHeight: '1.4',
    					fontWeight: '600'
    				}
    			],
    			'body-lg': [
    				'clamp(1.25rem, 2vw + 1rem, 1.5rem)',
    				{
    					lineHeight: '1.6'
    				}
    			],
    			body: [
    				'clamp(1.125rem, 1.5vw + 0.875rem, 1.375rem)',
    				{
    					lineHeight: '1.6'
    				}
    			],
    			button: [
    				'clamp(1.125rem, 1.5vw + 0.875rem, 1.25rem)',
    				{
    					lineHeight: '1.5',
    					fontWeight: '600'
    				}
    			],
    			'body-sm': [
    				'clamp(0.875rem, 1vw + 0.75rem, 1rem)',
    				{
    					lineHeight: '1.5'
    				}
    			],
    			caption: [
    				'clamp(1rem, 1.5vw + 0.75rem, 1.125rem)',
    				{
    					lineHeight: '1.4'
    				}
    			],
    			label: [
    				'clamp(0.875rem, 1vw + 0.75rem, 1rem)',
    				{
    					lineHeight: '1.4',
    					fontWeight: '500'
    				}
    			]
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
