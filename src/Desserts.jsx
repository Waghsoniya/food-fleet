import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './CartSlice';
import { toast } from 'react-toastify';

function Desserts() {

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

    const dessertItems = [
        {
            name: "Chocolate Cake",
            price: 150,
            img: "https://tatyanaseverydayfood.com/wp-content/uploads/2022/03/The-Best-Dark-Chocolate-Cake-Recipe-3.jpg"       
        },
        {
            name: "Gulab Jamun",
            price: 90,
            img: "https://as2.ftcdn.net/v2/jpg/08/94/76/25/1000_F_894762571_KXz2mTpbcjHRGMg48iiU4CnI9v7La4EN.jpg"
        },
        {
            name: "Ice Cream Sundee",
            price: 120,
            img: "https://assets.rbl.ms/21919567/origin.jpg"
        },
        {
            name: "Brownie",
            price: 110,
            img: "https://i.lezzet.com.tr/images-xxlarge-recipe/browni-tadinda-islak-kek-1aec0988-7202-4486-9d86-2a6d5c42d335.jpg"        
        },
        {
            name: "Kaju Katli",
            price: 180,
            img: "https://png.pngtree.com/thumb_back/fw800/background/20220701/pngtree-scrumptious-kaju-katli-a-traditional-indian-sweet-presented-in-a-white-bowl-photo-image_32220548.jpg"
        },
        {
            name: "CheeseCake",
            price: 200,
            img: "https://www.recipetineats.com/wp-content/uploads/2022/11/Mini-cheesecake-close-up.jpg"
        },
        {
            name: "Falooda",
            price: 130,
            img: "https://www.cookwithkushi.com/wp-content/uploads/2019/06/best_falooda_ice_cream_Dessert_drink_Indian.jpg"
        },
        {
            name: "Rasgulla",
            price: 100,
            img: "https://i.pinimg.com/originals/98/3a/e8/983ae84fe28972ce2016da5dbb27f7c9.jpg"
        }
    ];
  return (
    <>
        <div className='min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50 p-6'>
            {/* Title */}
            <h1 className='text-4xl font-bold text-center text-green-700 mb-10 mt-10'>
                Desserts 🍰
            </h1>

            {/* Grid */}
            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto'>

                {dessertItems.map((item, index) => (
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

export default Desserts;