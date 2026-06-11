import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './CartSlice';
import { toast } from 'react-toastify';

function Drinks() {

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

    const drinkItems = [
        {
            name: "Cold Coffee",
            price: 120,
            img: "https://images.ctfassets.net/v601h1fyjgba/71VWCR6Oclk14tsdM9gTyM/6921cc6b21746f62846c99fa6a872c35/Iced_Latte.jpg"       
        },
        {
            name: "Mango Shake",
            price: 100,
            img: "https://aromaticessence.co/wp-content/uploads/2021/04/Mango_shake_1.jpg"
        },
        {
            name: "Strawberry Shake",
            price: 110,
            img: "https://www.unicornsinthekitchen.com/wp-content/uploads/2018/08/Strawberry-Milkshake-square.jpg"
        },
        {
            name: "Fresh Lime Soda",
            price: 80,
            img: "https://static.vecteezy.com/system/resources/thumbnails/033/657/578/small_2x/lime-soda-ready-to-serve-in-the-kitchen-table-ai-generated-photo.jpg"        
        },
        {
            name: "Chocolate MilkShake",
            price: 130,
            img: "https://img.freepik.com/premium-photo/delicious-chocolate-milkshake-with-drizzles-chocolate-syrup-isolated-white-background_878783-10258.jpg?w=2000"
        },
        {
            name: "Orange Juice",
            price: 90,
            img: "https://wallpaperaccess.com/full/2185825.jpg"
        },
        {
            name: "WaterMelon Juice",
            price: 95,
            img: "https://www.thedeliciouscrescent.com/wp-content/uploads/2019/05/Watermelon-Juice-Image.jpg"
        },
        {
            name: "Lassi",
            price: 85,
            img: "https://facts.net/wp-content/uploads/2025/03/37-facts-about-lassi-1743186096.jpg"
        }
    ];
  return (
    <>
        <div className='min-h-screen bg-gradient-to-br from-cyan-100 via-white to-sky-50 p-6'>
            {/* Title */}
            <h1 className='text-4xl font-bold text-center text-green-700 mb-10 mt-10'>
                Drinks 🥤
            </h1>

            {/* Grid */}
            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto'>

                {drinkItems.map((item, index) => (
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

export default Drinks;