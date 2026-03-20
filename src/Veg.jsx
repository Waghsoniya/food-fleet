import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";
import { toast } from "react-toastify";

function Veg({ search }) {

  let dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const vegItems = { 
    Paneer: 
    [
      { name: "Paneer Butter Masala", price: 220, img: "..." }, 
      { name: "Palak Paneer", price: 200, img: "..." }, 
      { name: "Kadai Paneer", price: 220, img: "..." }, 
      { name: "Shahi Paneer", price: 240, img: "..." }, 
      { name: "Paneer Tikka", price: 220, img: "..." }, 
      { name: "Paneer Bhurji", price: 200, img: "..." }, 
      { name: "Paneer Pizza", price: 280, img: "..." }, 
      { name: "Paneer Manchurian", price: 180, img: "..." }, 
      { name: "Paneer Salad", price: 120, img: "..." },
    ], 
    Rice: 
    [
      { name: "Veg Biryani", price: 180, img: "..." }, 
      { name: "Veg Pulao", price: 140, img: "..." }, 
      { name: "Rajma Chawal", price: 130, img: "..." }, 
      { name: "Curd Rice", price: 130, img: "..." }, 
      { name: "Lemon Rice", price: 120, img: "..." }, 
      { name: "Tamarind Rice", price: 130, img: "..." },
    ],
     Dal: 
     [
      { name: "Dal Tadka", price: 130, img: "..." }, 
      { name: "Dal Makhani", price: 150, img: "..." },
    ], 
    Curry: 
    [
      { name: "Aloo Gobi", price: 120, img: "..." }, 
      { name: "Baingan Bharta", price: 125, img: "..." }, 
      { name: "Chana Masala", price: 150, img: "..." }, 
      { name: "Mix Veg Curry", price: 160, img: "..." }, 
      { name: "Bhindi Masala", price: 140, img: "..." }, 
      { name: "Jeera Aloo", price: 120, img: "..." }, 
      { name: "Veg Kurma", price: 160, img: "..." }, 
      { name: "Veg Handi", price: 180, img: "..." }, 
      { name: "Veg Kolhapuri", price: 190, img: "..." }, 
      { name: "Veg Jalfrezi", price: 200, img: "..." }, 
      { name: "Malai Kofta", price: 180, img: "..." }, 
      { name: "Tawa Paneer", price: 220, img: "..." },
    ], 
    Snacks: 
    [
      { name: "Masala Dosa", price: 120, img: "..." }, 
      { name: "Chole Bhature", price: 150, img: "..." }, 
      { name: "Pav Bhaji", price: 180, img: "..." }, 
      { name: "Stuffed Paratha", price: 120, img: "..." }, 
      { name: "Kothimbir Vadi", price: 150, img: "..." }, 
      { name: "Thalipeeth", price: 140, img: "..." }, 
      { name: "Veg Momos", price: 120, img: "..." }, 
      { name: "Spring Roll", price: 140, img: "..." }, 
      { name: "Veg Cutlet", price: 100, img: "..." }, 
      { name: "Veg Sandwich", price: 90, img: "..." },
      { name: "Veg Burger", price: 120, img: "..." }, 
      { name: "Veg Pizza", price: 250, img: "..." }, 
      { name: "Veg Hakka Noodles", price: 150, img: "..." }, 
      { name: "Veg Manchurian", price: 160, img: "..." },
    ], 
    Soups: 
    [
      { name: "Veg Soup", price: 100, img: "..." }, 
      { name: "Tomato Soup", price: 90, img: "..." }, 
      { name: "Sweet Corn Soup", price: 110, img: "..." }, 
      { name: "Hot & Sour Soup", price: 120, img: "..." },
    ],
    Salads: 
    [
      { name: "Veg Salad", price: 80, img: "..." }, 
      { name: "Fruit Salad", price: 100, img: "..." },
    ], 
  };

  const allItems = Object.keys(vegItems).flatMap((category) => 
  vegItems[category].map((item) => ({
    ...item,
    category,
  }))
);

const filteredItems = allItems.filter((item) => 
  item.name.toLowerCase().includes((search || "").toLowerCase())
);


  /* RESET PAGE WHEN SEARCH CHANGES */
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  /* PAGINATION */
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const lastIndex = currentPage * itemsPerPage;
  const startIndex = lastIndex - itemsPerPage;

  const currentItems = filteredItems.slice(startIndex, lastIndex);

  const handleAddToCart = (item) => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

    if (!loggedUser) {
      toast.error("Please login first to add items to cart");
      return;
    }

    dispatch(addToCart(item));
    toast.success(`${item.name} Added to Cart`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50 p-6">

      <h1 className="text-4xl font-bold text-center text-green-700 mb-10 mt-10">
        Veg Menu 🥗
      </h1>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">

        {currentItems.length === 0 ? (
          <h2 className="col-span-4 text-center text-xl font-semibold text-gray-600">
            No food found 😔
          </h2>
        ) : (
          currentItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h2>

                <p className="text-green-600 font-bold mt-2">
                  ₹{item.price}
                </p>

                <button
                  onClick={() => handleAddToCart(item)}
                  className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        )}

      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
  <div className="flex justify-center items-center mt-8 gap-3">

    {/* 🔹 PREVIOUS */}
    <button
      onClick={() => setCurrentPage((prev) => prev - 1)}
      disabled={currentPage === 1}
      className={`px-4 py-2 rounded-lg ${
        currentPage === 1
          ? "bg-gray-300 cursor-not-allowed"
          : "bg-green-600 text-white hover:bg-green-700"
      }`}
    >
      &lt;&lt;
    </button>

    {/* 🔹 ONLY 3 PAGE BUTTONS */}
    {Array.from({ length: totalPages }, (_, i) => i + 1)
      .slice(
        Math.max(0, currentPage - 2),
        Math.max(3, currentPage + 1)
      )
      .map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`px-4 py-2 rounded-lg ${
            currentPage === page
              ? "bg-green-600 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          {page}
        </button>
      ))}

    {/* 🔹 NEXT */}
    <button
      onClick={() => setCurrentPage((prev) => prev + 1)}
      disabled={currentPage === totalPages}
      className={`px-4 py-2 rounded-lg ${
        currentPage === totalPages
          ? "bg-gray-300 cursor-not-allowed"
          : "bg-green-600 text-white hover:bg-green-700"
      }`}
    >
      &gt;&gt;
    </button>

  </div>
)}

    </div>
  );
}

export default Veg;