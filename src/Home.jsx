import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {

  const navigate = useNavigate();

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
      title: "Welcome to FoodFleet 🍽️",
      subtitle: "Delicious food delivered fast at your doorstep",
      button: "Order Now",
      link: "/veg",
    },
    {
      image: "https://i.pinimg.com/originals/08/9b/ce/089bce0b11f9a94c850061e14843f511.jpg",
      title: "Fresh Vegetarian Delights 🥗",
      subtitle: "Healthy & tasty vegetarian dishes",
      button: "Order Veg",
      link: "/veg",
    },
    {
      image: "https://t4.ftcdn.net/jpg/04/33/60/53/360_F_433605388_BXxpb7eQS7wURfnSE719tktOBbI8QGnS.jpg",
      title: "Juicy Non-Veg Meals 🍗",
      subtitle: "Delicious & mouthwatering options",
      button: "Order Non-Veg",
      link: "/nonveg",
    },
    {
      image: "https://png.pngtree.com/thumb_back/fw800/background/20230706/pngtree-crispy-potato-chips-shower-perfect-for-snack-fast-food-and-chips-image_3808641.jpg",
      title: "Crispy Starters 🍤",
      subtitle: "Kickstart your hunger with crispy bites",
      button: "Order Starters",
      link: "/starters",
    },
    {
      image: "https://png.pngtree.com/background/20230610/original/pngtree-variety-of-drinks-sitting-on-a-dark-surface-picture-image_3098922.jpg",
      title: "Refreshing Drinks 🥤",
      subtitle: "Chill with cool beverages",
      button: "Order Drinks",
      link: "/drinks",
    },
    {
      image: "https://img.freepik.com/premium-photo/delicious-cheesecake-dessert-dark-background_826582-349.jpg",
      title: "Sweet Desserts 🍰",
      subtitle: "End your meal perfectly",
      button: "Order Desserts",
      link: "/desserts",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-red-100 to-yellow-100">

        {/* Carousel Section */}
        <div className="w-full relative [&_.slick-prev]:opacity-50 [&_.slick-next]:opacity-50 ">

          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className="relative w-full h-[90vh]">
                <img
                  src={slide.image}
                  alt={`slide-${index}`}
                  className="w-full h-[90vh] object-cover"
                />

                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
                  <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-2xl text-white mb-6 drop-shadow-md">
                    {slide.subtitle}
                  </p>
                  <Link
                    to={slide.link}
                    className="bg-red-500 text-white px-8 py-3 rounded-full text-lg hover:bg-red-600 transition"
                  >
                    {slide.button}
                  </Link>
                </div>

              </div>
            ))}
          </Slider>
        </div>

        {/* Hero Section */}
        <div className="text-center py-10 px-4">
          <h1 className="text-5xl font-bold text-red-600 mb-4">
            Welcome to FoodFleet 🍽️
          </h1>

          <p className="text-lg text-gray-700 mb-8">
            Delicious food delivered fast at your doorstep
          </p>
        </div>

        {/* Categories */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 pb-16">

          <Link to="/veg" className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 transition">
            <h2 className="text-2xl font-semibold text-green-600">Veg</h2>
            <p className="text-gray-600 mt-2">Healthy & tasty vegetarian dishes</p>
          </Link>

          <Link to="/nonveg" className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 transition">
            <h2 className="text-2xl font-semibold text-red-600">Non-Veg</h2>
            <p className="text-gray-600 mt-2">Juicy & delicious meals</p>
          </Link>

          <Link to="/starters" className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 transition">
            <h2 className="text-2xl font-semibold text-red-600">Starters</h2>
            <p className="text-gray-600 mt-2">Crispy bites to kickstart your hunger.</p>
          </Link>

          <Link to="/drinks" className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 transition">
            <h2 className="text-2xl font-semibold text-red-600">Drinks</h2>
            <p className="text-gray-600 mt-2">Refreshing beverages to chill your mood</p>
          </Link>

          <Link to="/desserts" className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 transition">
            <h2 className="text-2xl font-semibold text-red-600">Desserts</h2>
            <p className="text-gray-600 mt-2">Sweet treats to end your meal perfectly.</p>
          </Link>

        </div>

        {/* Trending Section */}
        <div className="max-w-6xl mx-auto px-6 pb-16">

          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              🔥 Trending Now
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white p-4 rounded-xl shadow hover:scale-105 transition">
              <h3 className="font-semibold text-zinc-700">Veg Biriyani</h3>
              <p className="text-sm text-gray-500">⭐ 4.7 Rating</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow hover:scale-105 transition">
              <h3 className="font-semibold text-zinc-700">Chicken Burger</h3>
              <p className="text-sm text-gray-500">⭐ 4.6 Rating</p>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow hover:scale-105 transition">
              <h3 className="font-semibold text-zinc-700">Chocolate Cake</h3>
              <p className="text-sm text-gray-500">⭐ 4.9 Rating</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow hover:scale-105 transition">
              <h3 className="font-semibold text-zinc-700">Pasta Alfredo</h3>
              <p className="text-sm text-gray-500">⭐ 4.8 Rating</p>
            </div>

          </div>

        </div>

        {/* Offer Banner */}
        <div className="max-w-6xl mx-auto px-6 pb-16">
            <div className="bg-red-500 text-white p-8 rounded-2xl text-center shadow-lg">
              <h2 className="text-3xl font-bold mb-2">🔥 Special Offers</h2>
              <p className="text-lg">Get 50% OFF on your first order + Free Delivery</p>
            </div>
        </div>

        {/* Why choose us */}
        <div className="max-w-6xl mx-auto px-6 pb-16">

            <h2 className="text-3xl font-bold text-red-400 text-center mb-8">
                ❤️ Why FoodFleet?
            </h2>

            <div className="grid md:grid-cols-4 gap-6 text-center">

              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-bold text-zinc-600">⚡ Fast Delivery</h3>
              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-bold text-zinc-600">🥗 Fresh Food</h3>
              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-bold text-zinc-600">📱 Easy Ordering</h3>
              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-bold text-zinc-600">💳 Secure Payment</h3>
              </div>

            </div>
        </div>

      </div>
    </>
  );
}

export default Home;