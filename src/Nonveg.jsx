import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './CartSlice';
import { toast } from 'react-toastify';

function Nonveg({ search }) {

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

    const nonvegItems = [
        {
            name: "Chicken Biriyani",
            price: 280,
            img: "https://static.vecteezy.com/system/resources/previews/035/375/552/large_2x/ai-generated-chicken-biryani-kerala-style-chicken-dhum-biriyani-made-using-jeera-rice-and-spices-arranged-in-a-brass-serving-bowl-photo.jpg"       
        },
        {
            name: "Butter Chicken",
            price: 300,
            img: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/06/Best-Instant-Pot-Butter-Chicken-Recipe.jpg"
        },
        {
            name: "Chicken Tandoori",
            price: 320,
            img: "https://www.kitchensanctuary.com/wp-content/uploads/2025/07/Tandoori-Chicken-Square-FS.jpg"
        },
        {
            name: "Mutton Curry",
            price: 350,
            img: "https://4.bp.blogspot.com/-zShWOyuROCk/WG-ApLGxNTI/AAAAAAAACks/n2iNqhu25Sw2Vlmvf9hEGd-CnwYsp1EoQCLcB/s1600/mutton%2Bcurry.JPG"        
        },
        {
            name: "Chicken Lollipop",
            price: 240,
            img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/chicken-lollipop-recipe.jpg"
        },
        {
            name: "Egg Curry",
            price: 180,
            img: "https://images.services.kitchenstories.io/EPAs3NYa-v4uK2NumQYwhJ4Cd58=/3840x0/filters:quality(85)/images.kitchenstories.io/wagtailOriginalImages/R2899-photo-final-3x4.jpg"
        },
        {
            name: "Fish Fry",
            price: 260,
            img: "https://i.pinimg.com/originals/52/dc/fe/52dcfe0613322e4d45cd46aac779e296.jpg"
        },
        {
            name: "Chicken Pakora",
            price: 220,
            img: "https://blissfulbitesbytay.com/wp-content/uploads/2020/09/Chicken-pakoda-1579x2048.jpg"
        }
    ];

    const filteredItems = nonvegItems.filter((item) =>
    item.name.toLowerCase().includes((search || "").toLowerCase())
);
  return (
    <>
        <div className='min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50 p-6'>
            {/* Title */}
            <h1 className='text-4xl font-bold text-center text-green-700 mb-10 mt-10'>
                Non-Veg Menu 🍗
            </h1>

            {/* Grid */}
            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto'>

                {filteredItems.map((item, index) => (
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

export default Nonveg;