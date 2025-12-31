import moment from 'moment';
import React from 'react';
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

const FeedbackCard = ({ feedback }) => {
    const { message, date, updatedAt } = feedback;

    return (
        <div className='w-full md:w-6/12 lg:w-4/12 px-3 mb-6'>
            <div className='bg-white rounded-md p-6 h-full'>
                <p className='text-gray-500 text-sm mb-2'>{moment(date).format('ll')}</p>
                <p className='text-gray-800'>{message}</p>
                <div className='flex items-center justify-between mt-4'>
                    <div>
                        {updatedAt && <div className='flex text-sm text-gray-500 gap-1.5'>Updated at: <p>{moment(updatedAt).format('ll')}</p></div>}
                    </div>
                    <div className='flex items-center gap-2'>
                        <button className='w-9 h-9 bg-amber-500 text-white flex justify-center items-center rounded-md text-lg cursor-pointer hover:bg-amber-600 duration-300'>
                            <FaRegEdit />
                        </button>
                        <button className='w-9 h-9 bg-red-500 text-white flex justify-center items-center rounded-md text-lg cursor-pointer hover:bg-red-700 duration-300'>
                            <FaRegTrashAlt />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackCard;