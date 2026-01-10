import React from 'react';
import FeedBackForm from '../_components/FeedBackForm';
import { postFeedback } from '@/actions/server/feedback';

export const metadata = {
    title: 'Add Feedback'
}

const AddFeedbackPage = async () => {
    // const feedbackPost = await postFeedback();

    return (
        <section className='add-feedback py-10 md:py-12 lg:py-20'>
            <div className='container'>
                <FeedBackForm
                    feedbackPost={postFeedback}
                ></FeedBackForm>
            </div>
        </section>
    );
};

export default AddFeedbackPage;