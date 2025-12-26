import React from 'react';

const FoodCardSkeleton = () => {
    return (
        <div className='w-full md:w-6/12 lg:w-4/12 px-3 mb-6'>
            <div className='h-full bg-white borde border-white rounded-md animate-pulse'>
                {/* Image Placeholder */}
                <div className="w-full h-56 bg-gray-200 rounded-t-md relative">

                    <div className="absolute top-4 left-4">
                        <span className="w-20 h-5 block bg-gray-300 rounded-full"></span>
                    </div>
                </div>

                {/* Content Placeholder */}
                <div className="px-4 py-4 space-y-4">
                    <div className="flex justify-between">
                        <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                    </div>

                    <div className="space-y-2">
                        <div className="h-3 bg-gray-200 rounded w-full"></div>
                        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                    </div>

                    {/* Button Placeholders */}
                    <div className="flex gap-3 pt-2">
                        <div className="h-12 bg-gray-200 rounded-md flex-1"></div>
                        <div className="h-12 bg-gray-200 rounded-md flex-1"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCardSkeleton;