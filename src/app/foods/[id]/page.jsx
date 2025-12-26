import React from 'react';

const getSingleFood = async (id) => {
    const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`);
    const data = await res.json();
    return data.details;
}

const FoodDetails = async ({ params }) => {
    const { id } = await params;
    const food = await getSingleFood(id);

    // Extracting YouTube ID for embed
    const videoId = food.video?.split('v=')[1];

    return (
        <section className='food-details py-10 md:py-12 lg:py-20'>
            <div className='container'>
                {!food ? (
                    <div className="min-h-screen flex items-center justify-center">
                        <h2 className="text-2xl font-bold text-gray-800">Food Not Found</h2>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        {/* Media Section (Left - 7 Columns) */}
                        <div className="lg:col-span-7 space-y-8">
                            {/* Main Image */}
                            <div className="rounded-3xl overflow-hidden shadow-2xl bg-white">
                                <img
                                    src={food.foodImg}
                                    alt={food.title}
                                    className="w-full h-[400px] object-cover"
                                />
                            </div>

                            {/* Video Section */}
                            {videoId && (
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold">Watch the Recipe</h3>
                                    <div className="aspect-video rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                                        <iframe
                                            className="w-full h-full"
                                            src={`https://www.youtube.com/embed/${videoId}`}
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Content Section (Right - 5 Columns) */}
                        <div className="lg:col-span-5">
                            <div className="bg-white rounded-3xl p-8 shadow-xl sticky top-8 border border-gray-100">
                                {/* Badges */}
                                <div className="flex gap-2 mb-6">
                                    <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase">
                                        {food.category}
                                    </span>
                                    <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase">
                                        {food.area}
                                    </span>
                                </div>

                                <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                                    {food.title}
                                </h1>

                                <div className="flex items-center gap-4 mb-8">
                                    <span className="text-4xl font-black text-orange-600">${food.price}</span>
                                    <span className="text-gray-400 line-through text-lg">${(food.price * 1.2).toFixed(0)}</span>
                                </div>

                                <p className="text-gray-600 leading-relaxed mb-8">
                                    Indulge in our signature <span className="font-semibold text-gray-800">{food.title}</span>.
                                    A perfect blend of traditional {food.area} flavors crafted specifically for
                                    {food.category === 'Vegan' ? ' a plant-based' : ' a premium'} dining experience.
                                </p>

                                {/* Features */}
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
                                        <p className="text-xs text-orange-500 font-bold uppercase">Category</p>
                                        <p className="font-semibold text-gray-800">{food.category}</p>
                                    </div>
                                    <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                                        <p className="text-xs text-blue-500 font-bold uppercase">Origin</p>
                                        <p className="font-semibold text-gray-800">{food.area}</p>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="space-y-3">
                                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-2xl transition-all text-lg cursor-pointer">
                                        Add to Cart
                                    </button>
                                    <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-4 rounded-2xl transition-all text-lg cursor-pointer">
                                        Back to Menu
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default FoodDetails;