'use client'

import React, { useState } from 'react';
import { toast } from 'react-toastify';

const FeedBackForm = () => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const message = e.target.message.value.trim();

        if (!message || message.length === 0) {
            setError(true);
            return;
        }

        try {
            setError(false);
            setLoading(true);

            const res = await fetch('http://localhost:3000/api/feedback/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message })
            });

            if (!res.ok) {
                throw new Error('No correct response was received from the server.');
            }

            const data = await res.json();

            if (data?.data?.insertedId) {
                toast.success('Feedback added successfully! 🎉');
                e.target.reset(); // form reset
            }
        }
        catch (error) {
            console.error('Submission Error:', error.message);
            toast.error('Sorry, something went wrong. Please try again.')
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <div className='flex flex-wrap -mx-3 items-center justify-center'>
            <div className='w-full md:w-9/12 lg:w-8/12 px-3'>
                <div className='bg-white px-6 py-8 rounded-lg'>
                    <h1 className='text-2xl font-semibold mb-6 text-gray-900 text-center'>Add your feedback</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-2'>
                            <textarea name="message" className={`${error ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-orange-500'} w-full border focus:outline-0 px-4 py-3.5 text-gray-600 rounded-md`} rows='4' placeholder='Add your feedback...'></textarea>
                            <span className={`${error ? 'block text-red-500' : 'hidden'} text-sm`}>Please write your feedback</span>
                        </div>
                        <button
                            disabled={loading}
                            className='bg-orange-500 py-3 px-5 rounded-md hover:bg-orange-600 duration-300 cursor-pointer w-full md:w-auto disabled:bg-orange-700 disabled:cursor-default'>{loading ? 'Sending...' : 'Submit Feedback'}</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FeedBackForm;