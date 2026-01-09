import { connect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

const feedbackCollection = connect('feedbacks');

export async function GET(req, { params }) {
    try {
        const { id } = await params;

        if (!id || id.length !== 24) {
            return Response.json(
                { message: 'Invalid ID format' },
                { status: 400 }
            )
        }

        const query = { _id: new ObjectId(id) };
        const result = await feedbackCollection.findOne(query);

        if (!result) {
            return Response.json({
                success: false,
                message: 'Data not found'
            }, { status: 404 });
        }

        return Response.json({
            success: true,
            data: result
        }, { status: 200 });
    }
    catch (error) {
        console.error('Database error: ', error);

        return Response.json({
            success: false,
            message: 'Something went wrong on the server',
            error: process.env.NODE_ENV === 'development' ? error.message : null
        }, { status: 500 });
    }
}

export async function DELETE(req, { params }) {
    try {
        const { id } = await params;

        if (!id || id.length !== 24) {
            return Response.json(
                { message: 'Invalid ID fromat' },
                { status: 400 }
            );
        }

        const query = { _id: new ObjectId(id) };
        const result = await feedbackCollection.deleteOne(query);
        revalidatePath('/feedback');

        if (result.deletedCount === 0) {
            return Response.json({
                success: false,
                message: 'No data found with this ID to delete'
            }, { status: 404 });
        }

        return Response.json({
            success: true,
            message: 'Successfully deleted the feedback',
            data: result
        }, { status: 200 });
    }
    catch (error) {
        console.error('Database error: ', error);

        return Response.json({
            success: false,
            message: 'Something went wrong on the server',
            error: process.env.NODE_ENV === 'development' ? error.message : null
        }, { status: 500 });
    }
}

export async function PATCH(req, { params }) {
    try {
        const { id } = await params;
        const body = await req.json();

        if (!id || id.length !== 24) {
            return Response.json(
                { message: 'Invalid ID format' },
                { status: 400 }
            )
        }

        if (!body.message) {
            return Response.json(
                { message: 'Update content is missing' },
                { status: 400 }
            );
        }

        const query = { _id: new ObjectId(id) };
        const updateDoc = {
            $set: {
                message: body.message,
                updatedAt: new Date().toISOString()
            }
        }

        const result = await feedbackCollection.updateOne(query, updateDoc);

        if (result.matchedCount === 0) {
            return Response.json({
                success: false,
                message: 'Data not found'
            }, { status: 404 });
        }

        return Response.json({
            success: true,
            message: 'Updated Successfully',
            data: result
        }, { status: 200 });
    }
    catch (error) {
        console.error('Update Error: ', error);

        return Response.json({
            success: false,
            message: 'Something went wrong on the server',
            error: process.env.NODE_ENV === 'development' ? error.message : null
        }, { status: 500 });
    }
}