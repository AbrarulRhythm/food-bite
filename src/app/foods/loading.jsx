import InputSearch from '@/components/InputSearch';
import FoodCardSkeleton from '@/components/skeletons/FoodCardSkeleton';
import React, { Suspense } from 'react';

const loading = () => {
    return (
        <section className='foods pt-10 pb-4 md:pt-12 md:pb-6 lg:pt-20 lg:pb-14'>
            <div className='container'>
                <div className='flex flex-wrap items-center -mx-3 mb-7'>
                    <div className='w-full md:w-6/12 px-3 mb-6 md:mb-0'>
                        <h2 className='text-2xl md:text-3xl font-bold'>Total <span className=' text-orange-400'>0</span> Foods Found</h2>
                    </div>
                    <div className='w-full md:w-6/12 px-3'>
                        <Suspense fallback={<input type="text" placeholder="Loading search..." className="w-full p-2 border rounded" />}>
                            <InputSearch></InputSearch>
                        </Suspense>
                    </div>
                </div>

                <div className='flex flex-wrap -mx-3'>
                    {
                        [...Array(12)].map((_, index) => {
                            return (
                                <FoodCardSkeleton
                                    key={index}
                                ></FoodCardSkeleton>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default loading;