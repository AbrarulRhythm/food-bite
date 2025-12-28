import FoodCard from '@/components/cards/FoodCard';
import InputSearch from '@/components/InputSearch';
import React from 'react';

const getFoods = async (search) => {
    const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`, { next: { revalidate: 10 } });
    const data = await res.json();
    return data.foods || [];
}

export const metadata = {
    title: 'Foods'
}

const FoodsPage = async ({ searchParams }) => {
    const { search = '' } = await searchParams;
    const foods = await getFoods(search);

    return (
        <section className='foods pt-10 pb-4 md:pt-12 md:pb-6 lg:pt-20 lg:pb-14'>
            <div className='container'>
                <div className='flex flex-wrap items-center -mx-3 mb-7'>
                    <div className='w-full md:w-6/12 px-3 mb-6 md:mb-0'>
                        <h2 className='text-2xl md:text-3xl font-bold'>Total <span className=' text-orange-400'>{foods.length}</span> Foods Found</h2>
                    </div>
                    <div className='w-full md:w-6/12 px-3'>
                        <InputSearch></InputSearch>
                    </div>
                </div>

                <div className='flex flex-wrap -mx-3'>
                    {
                        foods.map(food => {
                            return (
                                <FoodCard
                                    key={food.id}
                                    food={food}
                                ></FoodCard>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default FoodsPage;