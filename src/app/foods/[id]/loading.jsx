import React from 'react';

const loading = () => {
    return (
        <section className='food-details py-10 md:py-12 lg:py-20'>
            <div className='container'>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* Media Skeleton */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="w-full h-100 bg-gray-200 rounded-3xl"></div>
                        <div className="space-y-4">
                            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                            <div className="aspect-video bg-gray-200 rounded-3xl"></div>
                        </div>
                    </div>

                    {/* Content Skeleton */}
                    <div className="lg:col-span-5">
                        <div className="bg-white rounded-3xl p-8 shadow-xl">
                            <div className="flex gap-2 mb-6">
                                <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
                                <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
                            </div>
                            <div className="h-10 bg-gray-200 rounded w-3/4 mb-4"></div>
                            <div className="h-12 bg-gray-200 rounded w-1/3 mb-8"></div>

                            <div className="space-y-3 mb-8">
                                <div className="h-4 bg-gray-200 rounded w-full"></div>
                                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="h-20 bg-gray-100 rounded-2xl"></div>
                                <div className="h-20 bg-gray-100 rounded-2xl"></div>
                            </div>

                            <div className="space-y-3">
                                <div className="h-14 bg-gray-200 rounded-2xl w-full"></div>
                                <div className="h-14 bg-gray-100 rounded-2xl w-full"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default loading;