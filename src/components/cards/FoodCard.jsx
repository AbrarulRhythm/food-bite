import Link from 'next/link';
import React from 'react';

const FoodCard = ({ food }) => {
    const { id, title, foodImg, price, category } = food;

    return (
        <div className='w-full md:w-6/12 lg:w-4/12 px-3 mb-6'>
            <div className='h-full bg-white borde border-white rounded-md group'>
                {/* Food Image */}
                <div className='overflow-hidden rounded-t-md relative'>
                    <img src={foodImg} className='h-56 w-full object-cover group-hover:scale-110 duration-300' alt="" />
                    <div className="absolute top-4 left-4">
                        <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                            {category}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className='p-4'>
                    <div className='flex items-center justify-between mb-4'>
                        <h3 className='font-bold text-xl text-gray-800 truncate'>{title}</h3>
                        <span className="text-xl font-extrabold text-orange-400">${price}</span>
                    </div>

                    <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                        Delicious {category.toLowerCase()} style {title} prepared with fresh ingredients.
                    </p>

                    {/* Action Buttons */}
                    <div className='flex items-center gap-2.5'>
                        <Link href={`/foods/${id}`} className='text-white text-center px-3 py-3.5 rounded-md w-full bg-orange-500 hover:bg-orange-600 duration-300 cursor-pointer '>
                            View Details
                        </Link>
                        <button className='text-white px-3 py-3.5 rounded-md w-full bg-blue-500 hover:bg-blue-600 duration-300 cursor-pointer '>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;