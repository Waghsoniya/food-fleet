import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './CartSlice';
import { toast } from 'react-toastify';

function Starters() {

    let dispatch = useDispatch();

    const handleAddToCart = (item) => {
        const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

        if (!loggedUser) {
            toast.error("Please login first to add items to cart");
            return;
        }

        dispatch(addToCart(item));
        toast.success(`${item.name} Added to Cart`);
    };

    const starterItems = [
        {
            name: "Paneer Tikka",
            price: 180,
            img: "https://2.bp.blogspot.com/-neI6rKuvsKI/VyN8GMrfhzI/AAAAAAAAHls/hugFFTKYgs8lrtUSXx0iEyG-KZwL4bPbwCLcB/s1600/tandoori-paneer-tikka4.jpg"       
        },
        {
            name: "Veg Spring Rolls",
            price: 140,
            img: "https://img.freepik.com/premium-photo/fried-vegetable-spring-rolls-with-sweet-chili-sauce-wooden-dish-generated-by-ai_1038983-13185.jpg"
        },
        {
            name: "Chicken Pakora",
            price: 200,
            img: "https://blissfulbitesbytay.com/wp-content/uploads/2020/09/Chicken-pakoda-1579x2048.jpg"
        },
        {
            name: "Hara Bhara Kabab",
            price: 160,
            img: "https://cdn.mygingergarlickitchen.com/images/800px/800px-hara-bhara-kabab-2.jpg"        
        },
        {
            name: "French Fries",
            price: 120,
            img: "https://pennywiseplates.com/wp-content/uploads/2025/01/takala_55866_Golden_crispy_homemade_French_fries_served_in_a__cc5db49f-0a62-4e07-b576-0eccd6a5894a_2-1024x574.png"
        },
        {
            name: "Chicken Lollipop",
            price: 220,
            img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/chicken-lollipop-recipe.jpg"
        },
        {
            name: "Veg Manchurian",
            price: 170,
            img: "https://www.cookshideout.com/wp-content/uploads/2014/11/Veg-Manchurian-Low-Fat-FI.jpg"
        },
        {
            name: "Cheese Balls",
            price: 190,
            img: "https://i.ytimg.com/vi/7Esrv-DYoOc/maxresdefault.jpg"
        }
    ];
  return (
    <>
        <div className='min-h-screen bg-gradient-to-br from-yellow-100 via-white to-amber-50 p-6'>
            {/* Title */}
            <h1 className='text-4xl font-bold text-center text-green-700 mb-10 mt-10'>
                Starters 🍗
            </h1>

            {/* Grid */}
            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto'>

                {starterItems.map((item, index) => (
                    <div key={index}
                    className='bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition'
                    >
                        <img src={item.img} alt={item.name} 
                          className='w-full h-48 object-cover'
                        />

                    <div className='p-5'>
                        <h2 className='text-xl font-semibold text-gray-800'>
                            {item.name}
                        </h2>

                        <p className='text-green-600 font-bold mt-2'>
                            ₹{item.price}
                        </p>

                        <button onClick={ () => handleAddToCart(item)} 
                        className='mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition'>
                            Add to Cart
                        </button>
                    </div>
                    </div>
                )) }

            </div>
        </div>
    </>
  );
}

export default Starters;