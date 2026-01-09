'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const DeleteButton = ({ id }) => {
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#fb5200",
            cancelButtonColor: "#ddd",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                setIsDeleting(true);

                try {
                    const res = await fetch(`${process.env.NEXT_PUBLIC_server}/api/feedback/${id}`, {
                        method: 'DELETE'
                    });

                    const data = await res.json();

                    if (data.data.deletedCount) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your feedback has been deleted.",
                            icon: "success",
                            timer: 1500
                        });

                        router.refresh();
                    }
                    else {
                        throw new Error(data.message || "Failed to delete");
                    }
                }
                catch (error) {
                    console.error('Delete error: ', error);
                    Swal.fire("Error!", error.message || "Something went wrong", "error");
                } finally {
                    setIsDeleting(false);
                }
            }
        });
    }

    return (
        <button
            onClick={handleDelete}
            className='w-9 h-9 bg-red-500 text-white flex justify-center items-center rounded-md text-lg cursor-pointer hover:bg-red-700 duration-300'>
            <FaRegTrashAlt />
        </button>
    );
}

export default DeleteButton;