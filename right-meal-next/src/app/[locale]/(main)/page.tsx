import { AnimatedSection } from '@/features/shared/components';

import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Linkora - Home',
  description: 'Your premier destination for beauty clinics and beauty salons.',
};

export default async function Home() {
  

  // const [plansResponse, menusResponse, categoriesResponse, mealsResponse, allergensResponse] = await Promise.all([
  //   HomeService.getPlans({ is_active: 1 }),
  //   HomeService.getMenus({ is_active: 1 }),
  //   HomeService.getMealCategories({ is_active: 1 }),
  //   HomeService.getMeals(mealsParams),
  //   HomeService.getAllergens({ is_active: 1 })
  // ]);


  return <div className='flex flex-col gap-10 lg:gap-20 pb-20 overflow-x-hidden'>
    
    <AnimatedSection>
      {/* <HeroSection  /> */}
      <div className='flex items-center justify-center h-screen'>
        <h1 className='text-4xl font-bold'>home page</h1>
      </div>
    </AnimatedSection>
   
  </div>;
}

