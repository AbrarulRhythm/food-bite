'use server'

import { connect } from "@/app/lib/dbConnect"
import { revalidatePath } from "next/cache";

// Get Feeback
export async function getFeedbacks() {
    try {
        const feedbackCollection = connect('feedbacks');
        const result = await feedbackCollection.find().sort({ date: -1 }).toArray();

        return {
            success: true,
            data: JSON.parse(JSON.stringify(result))
        };
    }
    catch (error) {
        console.error('Feedback Fetch Error: ', error);
        return {
            success: false,
            message: 'Data not found'
        };
    }
}

// Post Feedback
export async function postFeedback(payload) {
    try {
        const feedbackCollection = connect('feedbacks');

        const { message } = payload;

        if (!message || typeof message !== 'string' || message.trim().length === 0) {
            return {
                success: false,
                message: 'Please provide a valid message'
            }
        }

        const newFeedBack = { message, date: new Date().toISOString() };
        revalidatePath('/feedback');

        const result = await feedbackCollection.insertOne(newFeedBack);

        return {
            success: true,
            data: JSON.parse(JSON.stringify(result))
        };
    }
    catch (error) {
        console.error('Database error:', error);

        return {
            success: false,
            message: 'Something went wrong on the server',
        }
    }
}