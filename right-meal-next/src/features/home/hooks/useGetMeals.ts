import { useAppQuery } from '@/features/shared/hooks';
import { ApiResponse } from '@/features/shared/types/global';
import { HomeService, MealData } from '../services/apis';

interface UseGetMealsParams {
    menuId?: number;
    dayId: number | 'all';
    categoryId: number | 'all';
    initialData?: any; // The structure expected by useAppQuery (ApiResponse)
}

const useGetMeals = ({ menuId, dayId, categoryId, initialData }: UseGetMealsParams) => {
    const { data, isFetching } = useAppQuery<{ data: MealData[] }>({
        queryKey: ['meals', menuId, dayId, categoryId],
        queryFn: (headers) => {
            const mealsParams: any = { is_paginated: 1 };

            if (categoryId !== 'all') {
                mealsParams.meal_category_id = categoryId;
            }

            if (dayId !== 'all') {
                mealsParams.day_id = dayId;
            }

            // Add menuId constraint if needed in the future:
            // if (menuId) mealsParams.menu_id = menuId;

            return HomeService.getMeals(mealsParams, headers) as unknown as Promise<ApiResponse<{ data: MealData[] }>>;
        },
        initialData,
        staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    });

    return {
        isFetching,
        meals: data?.data?.data ?? [],
    };
};

export default useGetMeals;
