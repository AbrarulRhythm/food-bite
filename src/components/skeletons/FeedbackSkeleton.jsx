import React from 'react';

const FeedbackSkeleton = () => {
    return (
        <div className='w-full md:w-6/12 lg:w-4/12 px-3 mb-6'>
            <div className='bg-white rounded-md p-6 h-full animate-pulse'>
                {/* Date Loading */}
                <div className='w-4/12 h-3.5 rounded-sm bg-gray-200 mb-3.5'></div>
                <div className='w-10/12 h-5 rounded-sm bg-gray-200'></div>

                <div className='flex items-center justify-between mt-7'>
                    <div className='w-4/12 h-3.5 rounded-sm bg-gray-200'></div>
                    <div className='flex items-center gap-2'>
                        <div className='w-9 h-9 rounded-md bg-gray-200'></div>
                        <div className='w-9 h-9 rounded-md bg-gray-200'> </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackSkeleton;