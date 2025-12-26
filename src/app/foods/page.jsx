import FoodCard from '@/components/cards/FoodCard';
import React from 'react';

const getFoods = async () => {
    const res = await fetch('https://taxi-kitchen-api.vercel.app/api/v1/foods/random');
    const data = await res.json();
    return data.foods || [];
}

const FoodsPage = async () => {
    const foods = await getFoods();

    return (
        <section className='foods pt-10 pb-4 md:pt-12 md:pb-6 lg:pt-20 lg:pb-14'>
            <div className='container'>
                <div className='flex flex-wrap -mx-3 mb-7'>
                    <div className='w-full md:w-6/12 px-3'>
                        <h2 className='text-2xl md:text-3xl font-bold'>Total <span className=' text-orange-400'>{foods.length}</span> Foods Found</h2>
                    </div>
                    <div className='w-full md:w-6/12 px-3'></div>
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