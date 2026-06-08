import React, { useDebugValue } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addToCart } from './CartSlice';

function Thali() {
  let dispatch = useDispatch();

  const handleAddToCart = (item) => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

    if(!loggedUser) {
        toast.error("Please login first to add items to cart");
        return;
    }

    dispatch(addToCart(item));
    toast.success(`${item.name} Added to Cart`);
  };

  const comboItems = [
    {
        name: "Veg Thali Combo",
        price: 199,
        img: "https://st2.depositphotos.com/5653638/11520/i/950/depositphotos_115207410-stock-photo-indian-thali-indian-food-thali.jpg"
    }, 
    {
        name: "Chicken Meal Box",
        price: 249,
        img: "https://as2.ftcdn.net/v2/jpg/09/88/11/03/1000_F_988110383_QRPRbb6aT0GWW8fgS43VW2yRfXXF4Zrf.jpg"
    }, 
    {
        name: "Burger + Fries Combo",
        price: 179,
        img : "https://img.freepik.com/premium-photo/classic-burger-fries-combo_1003686-14032.jpg?w=996"
    },
    {
        name: "Pizza Combo Pack",
        price : 299,
        img: "https://product-assets.faasos.io/production/product/image_1669369150179_Two_Loaded-Veg_Medium_Pizza_Combo.jpg"
    }, 
    {
        name: "Family Feast Combo",
        price: 499,
        img: "https://img.freepik.com/premium-photo/fast-food-combo-platter_729149-3348.jpg?w=2000"
    },
    {
        name: "Mini Snack Combo",
        price: 149,
        img: "https://chefstandards.com/wp-content/uploads/2025/07/10-Chain-Restaurant-Combo-Starters-Wed-Never-Order-Again-Plus-6-That-Absolutely-Nailed-It.jpg"
    },
    {
        name: "South Indian Combo",
        price: 189,
        img: "https://i.pinimg.com/originals/0f/7e/d6/0f7ed66d0774c4708f1ad94067535813.jpg"
    },  
    {
        name: "Breakfast Combo",
        price: 129,
        img: "https://images.unsplash.com/photo-1525351484163-7529414344d8"
    }    
];

return (
    <>
        <div className='min-h-screen bg-gradient-to-br from-yellow-100 via-white to-orange-50 p-6'>

            {/* Title */}
            <h1 className='text-4xl font-bold text-center text-orange-700 mb-10 mt-10'>
                Combos 🍱
            </h1>

            {/* Grid */}
            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto'>

                {comboItems.map((item, index) => (
                    <div key={index}
                        className='bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition'
                    >

                        <img src={item.img} alt={item.name} className='w-full h-48 object-cover' />

                        <div className='p-5'>
                            <h2 className='text-xl font-semibold text-gray-800'>
                                {item.name}
                            </h2>

                            <p className='text-orange-600 font-bold mt-2'>
                                ₹{item.price}
                            </p>


                            <button onClick={() => handleAddToCart(item)}
                                    className='mt-4 w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition'>
                                        Add to Cart
                            </button>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    </>
)
}

export default Thali;