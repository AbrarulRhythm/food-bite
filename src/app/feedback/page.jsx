import FeedbackCard from '@/components/shared/FeedbackCard/FeedbackCard';
import Link from 'next/link';
import React from 'react';
import { FaPlus } from 'react-icons/fa6';

export const metadata = {
    title: 'Feedbacks'
}

export const dynamic = 'force-dynamic';

const getFeedback = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_server}/api/feedback/`, {
            // cache: 'force-cache',
            next: { revalidate: 60 }
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const feedbackData = await res.json();
        return feedbackData;
    }
    catch (error) {
        console.error('Feedback fetch error: ', error.message);

        return null;
    }
}

const FeedbackPage = async () => {
    const feedback = await getFeedback();

    return (
        <section className='feedbacks pt-10 pb-4 md:pt-12 md:pb-6 lg:pt-20 lg:pb-14'>
            <div className='container'>
                <div className='flex flex-wrap items-center -mx-3 mb-7'>
                    <div className='w-full md:w-6/12 px-3'>
                        <h2 className='text-2xl md:text-3xl font-bold'><span className='text-orange-500'>{feedback.data.length}</span> Feedbacks found</h2>
                    </div>
                    <div className='w-full md:w-6/12 px-3 flex md:justify-end mt-4 md:mt-0'>
                        <Link href='/feedback/add' className='flex items-center gap-2 bg-orange-500 py-3 px-5 rounded-md hover:bg-orange-600 duration-300'><FaPlus /> Add Feedback</Link>
                    </div>
                </div>

                <div className='flex flex-wrap -mx-3'>
                    {
                        feedback.data.map(fb => {
                            return (
                                <FeedbackCard
                                    key={fb._id}
                                    feedback={fb}
                                ></FeedbackCard>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default FeedbackPage;