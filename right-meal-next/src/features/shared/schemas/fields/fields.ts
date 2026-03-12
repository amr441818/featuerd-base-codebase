import { z } from 'zod';

export const createFields = (t: (key: string) => string) => {
  return {
    email: z
      .string()
      .trim()
      .min(1, { message: t('emailRequired') }) // required
      .email({ message: t('invalidEmail') }),

    password: z
      .string()
      .min(8, { message: t('password_min') })
      .regex(/[A-Z]/, { message: t('password_uppercase') })
      .regex(/[a-z]/, { message: t('password_lowercase') })
      .regex(/[0-9]/, { message: t('password_number') })
      .regex(/[^A-Za-z0-9]/, { message: t('password_symbol') }),

    name: (type: 'name' | 'first' | 'last' = 'name') =>
      z
        .string()
        .trim()
        .min(1, {
          message:
            type === 'name'
              ? t('nameRequired')
              : type === 'first'
                ? t('firstNameRequired')
                : t('lastNameRequired'),
        }),

    // Portfolio/Program/Project name field
    entityName: (maxLength: number = 50) =>
      z
        .string()
        .min(1, { message: 'Name is required' })
        .max(maxLength, { message: `Name must not exceed ${maxLength} characters` })
        .regex(/^[a-zA-Z0-9\s\S]*$/, {
          message: 'Name can only contain letters, numbers, and special characters',
        }),

    // Start date with preprocessing to convert string to Date
    startDate: z.preprocess(
      (val) => (typeof val === 'string' || val instanceof Date ? new Date(val) : undefined),
      z.date({ message: 'Start date is required' }),
    ),

    // End date (optional) with preprocessing
    endDate: z.preprocess(
      (val) => (typeof val === 'string' || val instanceof Date ? new Date(val) : undefined),
      z.date().optional(),
    ),

    // Description field (optional)
    description: z.string().optional(),

    // Optional string field (for risk_type, location, goals, etc.)
    optionalString: z.string().optional(),
  };
};
