import apiServiceCall from '@/lib/apiServiceCall';

export interface CategoryData {
    id: number;
    name: {
        en: string;
        ar: string;
    };
    localized_name: string;
    is_active: boolean;
}

export interface CategoriesResponse {
    success: boolean;
    data: {
        data: CategoryData[];
    };
}

export interface MealData {
    id: number;
    name: {
        en: string;
        ar: string;
    };
    description: {
        en: string;
        ar: string;
    };
    localized_name: string;
    localized_description: string;
    image: {
        id: number;
        url: string;
    } | null;
    cover: {
        id: number;
        url: string;
    } | null;
    in_stock: boolean;
    is_active: boolean;
    meal_category: string;
    calories: { calories: number }[];
    prices: any[];
}

export interface MealsResponse {
    success: boolean;
    data: {
        data: MealData[];
    };
}

export interface WorkingDay {
    id: number;
    day: string;
}

export interface MenuData {
    id: number;
    name: {
        en: string;
        ar: string;
    };
    localized_name: string;
    menu_types: string[];
    cut_of_day: {
        id: number;
        day: string;
    };
    working_days: WorkingDay[];
    is_active: true;
    menu_day_groups: { id: number }[];
    image: {
        id: number;
        url: string;
    };
}

export interface MenusResponse {
    success: boolean;
    data: {
        data: MenuData[];
        links: any;
        meta: any;
    };
    message: string;
}

export interface PlanData {
    id: number;
    name: {
        en: string;
        ar: string;
    };
    localized_name: string;
    description: {
        en: string;
        ar: string;
    };
    localized_description: string;
    is_active: boolean;
    image: {
        id: number;
        url: string;
    };
    carbohydrates: number;
    protiens: number;
    country_id: number;
    country: {
        id: number;
        name: string;
    };
}

export interface PlansResponse {
    success: boolean;
    data: {
        data: PlanData[];
    };
}

export interface AllergenData {
    id: number;
    name: {
        en: string;
        ar: string;
    };
    localized_name: string;
    image: {
        id: number;
        url: string;
    };
    is_active: boolean;
}

export interface AllergensResponse {
    success: boolean;
    data: {
        data: AllergenData[];
    };
}

export interface CalorieResult {
    bmr: number;
    tdee: number;
    caloric_intake: number;
    macronutrients: {
        protein: number;
        carbs: number;
        fats: number;
        macronutrient_percentages: {
            protein: string;
            carbs: string;
            fats: string;
        };
    };
    water_intake: number;
    water_intake_cups: number;
    bmi: number;
}

export interface CalorieResponse {
    success: boolean;
    data: CalorieResult;
    message: string;
}

export const HomeService = {
    getMenus: async (params?: Record<string, any>, headers?: any): Promise<MenusResponse> => {
        let url = 'menus';
        if (params) {
            const searchParams = new URLSearchParams(params as any);
            url += `?${searchParams.toString()}`;
        }
        const data = await apiServiceCall({
            method: 'GET',
            url,
            headers,
        });
        return data as MenusResponse;
    },
    getMealCategories: async (params?: Record<string, any>, headers?: any): Promise<CategoriesResponse> => {
        let url = 'meal-categories';
        if (params) {
            const searchParams = new URLSearchParams(params as any);
            url += `?${searchParams.toString()}`;
        }
        const data = await apiServiceCall({
            method: 'GET',
            url,
            headers,
        });
        return data as CategoriesResponse;
    },
    getMeals: async (params?: Record<string, any>, headers?: any): Promise<MealsResponse> => {
        let url = 'meals';
        if (params) {
            const searchParams = new URLSearchParams(params as any);
            url += `?${searchParams.toString()}`;
        }
        const data = await apiServiceCall({
            method: 'GET',
            url,
            headers,
        });
        return data as MealsResponse;
    },
    getPlans: async (params?: Record<string, any>, headers?: any): Promise<PlansResponse> => {
        let url = 'plan-categories';
        if (params) {
            const searchParams = new URLSearchParams(params as any);
            url += `?${searchParams.toString()}`;
        }
        const data = await apiServiceCall({
            method: 'GET',
            url,
            headers,
        });
        return data as PlansResponse;
    },
    getAllergens: async (params?: Record<string, any>, headers?: any): Promise<AllergensResponse> => {
        let url = 'allergens';
        if (params) {
            const searchParams = new URLSearchParams(params as any);
            url += `?${searchParams.toString()}`;
        }
        const data = await apiServiceCall({
            method: 'GET',
            url,
            headers,
        });
        return data as AllergensResponse;
    },
    calculateCalories: async (payload: {
        weight: string;
        height: string;
        date_of_birth: string;
        gender: string;
        activity_level: string;
        goal: string;
        allergy_ids: number[];
    }): Promise<CalorieResponse> => {
        const formData = new FormData();
        formData.append('weight', payload.weight);
        formData.append('height', payload.height);
        formData.append('date_of_birth', payload.date_of_birth);
        formData.append('gender', payload.gender);
        formData.append('activity_level', payload.activity_level);
        formData.append('goal', payload.goal);
        payload.allergy_ids.forEach((id, index) => {
            formData.append(`allergy_ids[${index}]`, id.toString());
        });
        const data = await apiServiceCall({
            method: 'POST',
            url: 'health/calculate',
            body: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer 8809|W9glX6TVazbZTsa5X82GK1lNlICLB5PSfFz6WFRBfa85e37f`,
            },
        });
        return data as CalorieResponse;
    },
};
