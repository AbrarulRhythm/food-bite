'use client'

import ReviewCard from '@/components/cards/ReviewCard';
import React, { useEffect, useState } from 'react';
import ReviewLoading from './ReviewLoading';

const ReviewsPage = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://taxi-kitchen-api.vercel.app/api/v1/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data.reviews || []);
                setLoading(false);
            })
    }, []);

    if (loading) {
        return <ReviewLoading></ReviewLoading>
    }

    return (
        <section className='pt-10 pb-4 md:pt-12 md:pb-6 lg:pt-20 lg:pb-14'>
            <div className='container'>
                <div className='flex flex-wrap -mx-3 mb-7'>
                    <div className='w-full md:w-6/12 px-3'>
                        <h2 className='text-2xl md:text-3xl font-bold'>Total <span className=' text-orange-400'>{reviews.length}</span> Reviews Found</h2>
                    </div>
                    <div className='w-full md:w-6/12 px-3'></div>
                </div>

                <div className='flex flex-wrap -mx-3'>
                    {
                        reviews.map(review => {
                            return (
                                <ReviewCard
                                    key={review.id}
                                    review={review}
                                ></ReviewCard>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default ReviewsPage;