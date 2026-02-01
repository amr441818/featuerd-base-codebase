import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-1 rounded-[10px] font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-70',
  {
    variants: {
      variant: {
        default: 'bg-gradient-90 text-white',
        secondary: 'bg-secondary text-secondary-foreground',
        outline: 'border border-input bg-background',
        destructive: 'bg-destructive text-destructive-foreground',
      },
      size: {
        default: 'px-[50px] py-3 text-[22px]',
        sm: 'px-4 py-2 text-sm',
        lg: 'px-8 py-4 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      disabled,
      icon,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    const isDisabled = disabled || loading;

    return (
      <Comp
        ref={ref}
        disabled={isDisabled}
        aria-busy={loading}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {loading ? (
          <span className='sub-loader !border-white !border-b-transparent' />
        ) : (
          <>
            {icon}
            {children}
          </>
        )}
      </Comp>
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
