import { connect } from "@/app/lib/dbConnect";
import { revalidatePath } from "next/cache";

const feedbackCollection = connect('feedbacks');

// FeedBack GET
export async function GET() {
    try {
        const result = await feedbackCollection.find().sort({ date: -1 }).toArray();

        return Response.json({
            success: true,
            data: result
        }, { status: 200 });
    }
    catch (error) {
        console.error('Database Error: ', error);

        return Response.json({
            success: false,
            message: 'Something went wrong on the server',
            error: process.env.NODE_ENV === 'development' ? error.message : null
        }, { status: 500 });
    }
}

// GeedBack POST
export async function POST(req) {
    try {
        const { message } = await req.json();

        if (!message || typeof message !== 'string') {
            return Response.json(
                { message: 'Please send a valid message' },
                { status: 4000 }
            )
        }

        const newFeedBack = { message, date: new Date().toISOString() };

        const result = await feedbackCollection.insertOne(newFeedBack);
        revalidatePath('/feedback');

        return Response.json({
            success: true,
            data: result,
        }, { status: 201 });
    }
    catch (error) {
        console.error('Database Error: ', error);

        return Response.json({
            success: false,
            message: 'Something went wrong on the server',
            error: process.env.NODE_ENV === 'development' ? error.message : null
        }, { status: 500 });
    }
}