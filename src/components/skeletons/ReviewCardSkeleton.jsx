import React from 'react';

const ReviewCardSkeleton = () => {
    return (
        <div className='w-full md:w-6/12 lg:w-4/12 px-3 mb-6'>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 animate-pulse">
                {/* Header Skeleton */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                        <div className="space-y-2">
                            <div className="h-4 bg-gray-200 rounded w-24"></div>
                            <div className="h-3 bg-gray-100 rounded w-16"></div>
                        </div>
                    </div>
                    <div className="h-6 bg-gray-100 rounded-lg w-12"></div>
                </div>

                {/* Review Text Skeleton */}
                <div className="space-y-2 mb-6">
                    <div className="h-4 bg-gray-100 rounded w-full"></div>
                    <div className="h-4 bg-gray-100 rounded w-full"></div>
                    <div className="h-4 bg-gray-100 rounded w-2/3"></div>
                </div>

                {/* Footer Skeleton */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
                        <div className="h-4 bg-gray-100 rounded w-16"></div>
                    </div>
                    <div className="h-4 bg-gray-100 rounded w-20"></div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCardSkeleton;