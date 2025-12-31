import React from 'react';
import FeedBackForm from '../_components/FeedBackForm';

export const metadata = {
    title: 'Add Feedback'
}

const AddFeedbackPage = () => {
    return (
        <section className='add-feedback py-10 md:py-12 lg:py-20'>
            <div className='container'>
                <FeedBackForm></FeedBackForm>
            </div>
        </section>
    );
};

export default AddFeedbackPage;