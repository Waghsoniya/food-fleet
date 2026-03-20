import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          About FoodFleet
        </h1>
        <p className="text-gray-600 text-lg">
          Fresh • Fast • Flavor
        </p>
      </div>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
          alt="food"
          className="rounded-xl shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Who We Are
          </h2>

          <p className="text-gray-600 mb-4">
            FoodFleet is a modern food ordering platform created to bring
            delicious meals directly to your doorstep. Our platform makes
            ordering food simple, quick, and enjoyable.
          </p>

          <p className="text-gray-600">
            With a variety of dishes including veg, non-veg, starters,
            refreshing drinks, and sweet desserts, FoodFleet helps you
            explore your favorite meals anytime.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-8">

        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold mb-3">🎯 Our Mission</h3>
          <p className="text-gray-600">
            Our mission is to provide fast, reliable food delivery while
            ensuring great taste and customer satisfaction.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold mb-3">🌟 Our Vision</h3>
          <p className="text-gray-600">
            We aim to become a trusted food platform where customers can
            easily discover and enjoy their favorite meals anytime.
          </p>
        </div>

      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-3 gap-8 text-center">

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-4xl font-bold text-orange-500">500+</h2>
          <p className="text-gray-600 mt-2">Happy Customers</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-4xl font-bold text-orange-500">100+</h2>
          <p className="text-gray-600 mt-2">Delicious Dishes</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-4xl font-bold text-orange-500">24/7</h2>
          <p className="text-gray-600 mt-2">Food Service</p>
        </div>

      </div>

    </div>
  );
}

export default About;