import Image from 'next/image';
import React from 'react';

const ReviewCard = ({ review }) => {
    const { user, photo, rating, review: revieText, likes, date } = review;

    // Formated Date
    const formattedDate = new Date(date).toLocaleDateString('bn-BD', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className='w-full md:w-6/12 lg:w-4/12 px-3 mb-6'>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 transition-all hover:shadow-md h-full">
                {/* User Card Info */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <Image
                            width={48}
                            height={48}
                            src={photo}
                            alt={user}
                            className="w-12 h-12 rounded-full object-cover border-2 border-orange-100"
                        />
                        <div>
                            <h4 className="font-bold text-gray-800 text-lg">{user}</h4>
                            <p className="text-xs text-gray-400">{formattedDate}</p>
                        </div>
                    </div>

                    {/* Reating Star */}
                    <div className="flex items-center gap-1 bg-orange-50 px-2 py-1 rounded-lg">
                        <span className="text-orange-500 font-bold text-sm">{rating}</span>
                        <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>
                </div>

                {/* Review Text */}
                <div className="mb-6">
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {revieText}
                    </p>
                </div>

                {/* Card Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <button className="flex items-center gap-2 group transition-colors">
                        <div className="p-2 rounded-full group-hover:bg-red-50 transition-colors">
                            <svg
                                className="w-6 h-6 text-gray-400 group-hover:text-red-500 transition-colors"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <span className="text-sm font-medium text-gray-500 group-hover:text-red-500">
                            {likes.length} টি লাইক
                        </span>
                    </button>

                    <button className="text-xs font-semibold text-blue-500 hover:underline">
                        রিপোর্ট করুন
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;