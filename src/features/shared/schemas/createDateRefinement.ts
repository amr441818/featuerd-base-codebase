import z from 'zod';

// Date validation helper
export const createDateRefinement = <
  T extends z.ZodType<{ startDate: Date; endDate?: Date | null }, any, any>,
>(
  schema: T,
) => {
  return schema.refine((data) => !data.endDate || data.endDate >= data.startDate, {
    message: 'End date must not be earlier than Start date',
    path: ['endDate'],
  });
};
