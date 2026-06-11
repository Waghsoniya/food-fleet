import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";
import { toast } from "react-toastify";

function Veg({ search }) {

  let dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  // stores selected category
  const [selectedCategory, setSelectedCategory] = useState("All");
  const itemsPerPage = 12;

  const vegItems = { 
    Paneer: 
    [
      { name: "Paneer Butter Masala", price: 220, img: "https://img.freepik.com/premium-photo/classic-paneer-butter-masala_1264082-137.jpg?w=2000" }, 
      { name: "Palak Paneer", price: 200, img: "https://img.freepik.com/premium-photo/indian-palak-paneer-with-spinach-cottage-cheese_1072167-2540.jpg?w=2000" }, 
      { name: "Kadai Paneer", price: 220, img: "http://1.bp.blogspot.com/_GlkYxavu-Ts/StVnaw3GCJI/AAAAAAAAARM/2b3PenJbX7g/w1200-h630-p-k-no-nu/kadhai-paneer1.JPG" }, 
      { name: "Shahi Paneer", price: 240, img: "https://1.bp.blogspot.com/-KzKj1aBe7-k/XeeVsF5b-2I/AAAAAAAAEII/XOksle75D5IKvng5l7OMWaX9K_0hCQX7wCLcBGAsYHQ/s1600/shahi%2Bpaneerr.jpg" }, 
      { name: "Paneer Tikka", price: 220, img: "https://tandoormorni.com/wp-content/uploads/2025/04/Smoky-Tandoori-Paneer-Tikka-Delight.png" }, 
      { name: "Paneer Bhurji", price: 200, img: "http://www.ezpzcooking.com/wp-content/uploads/2010/05/paneer-bhurji-featured.jpg" }, 
      { name: "Paneer Pizza", price: 280, img: "https://cdn.grofers.com/assets/search/usecase/banner/paneer_makhani_pizza_01.png" }, 
      { name: "Paneer Manchurian", price: 180, img: "https://orders.popskitchen.in/storage/2024/09/image-167.png" }, 
      { name: "Paneer Salad", price: 120, img: "https://img.freepik.com/premium-photo/palak-paneer-salad-delight_762785-229339.jpg" },
    ], 
    Rice: 
    [
      { name: "Veg Biryani", price: 180, img: "https://img.freepik.com/premium-photo/indian-veg-biryani-veg-pulav-4k-hd-photo-indian-vegetable-pulao_1193781-13320.jpg?w=1060" }, 
      { name: "Veg Pulao", price: 140, img: "https://thumbs.dreamstime.com/b/fragrant-veg-pulao-bliss-colorful-rice-fresh-veggies-bowl-aromatic-vegetable-pulao-india-colorful-veggies-372269437.jpg" }, 
      { name: "Rajma Chawal", price: 130, img: "https://img.freepik.com/premium-photo/rajma-chawal-plate-front-view-featuring-kidney-beans-curry-rice-concept-food-styling-indian-cuisine-rajma-chawal-food-photography-front-view-shot_864588-156132.jpg?w=2000" }, 
      { name: "Curd Rice", price: 130, img: "https://simmertoslimmer.com/wp-content/uploads/2023/04/Curd-rice-thayir-sadam.jpg" }, 
      { name: "Lemon Rice", price: 120, img: "https://www.flavourstreat.com/wp-content/uploads/2020/12/turmeric-lemon-rice-recipe-02.jpg" }, 
      { name: "Tamarind Rice", price: 130, img: "https://i.pinimg.com/originals/5a/c7/34/5ac7346f08e49a2d6419805ab069516d.jpg" },
    ],
     Dal: 
     [
      { name: "Dal Tadka", price: 130, img: "https://img.freepik.com/premium-photo/dal-tadka-is-popular-indian-dish-where-cooked-spiced-lentils-are-finished-with-tempering-made-ghee-oil-spices_35691-35108.jpg?w=2000" }, 
      { name: "Dal Makhani", price: 150, img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgi-4KaNqJPIybLa9P0NJ1lex9jpLF5SD6X3vP5rTP9oG_C72ZkJDMTdDsaPc4ScbEngnHKr5Q0fjkH8rt-Ek7AYRlLjFaLIR7m1bD85cftcOlaRAPLpglf0R1YE15f6dHwkkDog9k_1R-TmTCginfetQskgKnWuV8ZPWu6SxgTabnjsWWq5FjjaiF1-g/s1920/dal-makhani-recipe.jpeg" },
    ], 
    Curry: 
    [
      { name: "Aloo Gobi", price: 120, img: "https://www.slimmingeats.com/blog/wp-content/uploads/2020/01/aloo-gobi-27.jpg" }, 
      { name: "Baingan Bharta", price: 125, img: "https://www.vegandietfood.com/wp-content/uploads/2026/01/Baingan-Bharta-Recipe.jpg" }, 
      { name: "Chana Masala", price: 150, img: "https://www.daveseats.com/images/chana_masala.jpg" }, 
      { name: "Mix Veg Curry", price: 160, img: "https://mykitchendiaries.com/wp-content/uploads/2025/08/Whisk_0ddd22690e.webp" }, 
      { name: "Bhindi Masala", price: 140, img: "https://static.vecteezy.com/system/resources/previews/061/061/091/non_2x/bhindi-masala-crisp-okra-and-aromatic-spices-indian-homestyle-dish-in-modern-high-resolution-photo.jpg" }, 
      { name: "Jeera Aloo", price: 120, img: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/02/Jeera-Aloo-Recipe.jpg" }, 
      { name: "Mugalai Vegetable Korma", price: 160, img: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://allrecipesss.com/wp-content/uploads/2025/08/Navratan-Korma.webp" }, 
      { name: "Veg Handi", price: 180, img: "https://static.india.com/wp-content/uploads/2024/12/FEATURE-2024-12-08T153033.031.jpg##image/jpg" }, 
      { name: "Veg Kolhapuri", price: 190, img: "https://myfoodstory.com/wp-content/uploads/2022/04/Veg-Kolhapuri-3.jpg" }, 
      { name: "Veg Jalfrezi", price: 200, img: "https://vegecravings.com/wp-content/uploads/2020/01/Vegetable-Jalfrezi-Recipe-Step-By-Step-Instructions-scaled.jpg" }, 
      { name: "Malai Kofta", price: 180, img: "https://img.justhungryeveryday.com/malai-kofta647ab4311a3a6-2-1600.jpg" }, 
      { name: "Tawa Paneer", price: 220, img: "https://1.bp.blogspot.com/-rqLUVWFgS-g/VuAgOinQQpI/AAAAAAAAVxA/0jDpGv2o7W0/s1600/Tawa%2BPaneer%2B%25283%2529%2B-%2B1.jpg" },
    ], 
    Snacks: 
    [
      { name: "Masala Dosa", price: 120, img: "https://1.bp.blogspot.com/-rqLUVWFgS-g/VuAgOinQQpI/AAAAAAAAVxA/0jDpGv2o7W0/s1600/Tawa%2BPaneer%2B%25283%2529%2B-%2B1.jpg" }, 
      { name: "Chole Bhature", price: 150, img: "https://im.whatshot.in/img/2019/Oct/haldirams-1571133692.jpg" }, 
      { name: "Pav Bhaji", price: 180, img: "https://static.vecteezy.com/system/resources/previews/016/282/565/large_2x/cheese-pav-bhaji-recipe-is-a-street-food-bhaji-pav-recipe-with-addition-of-cheese-free-photo.jpg" }, 
      { name: "Stuffed Paratha", price: 120, img: "https://static.vecteezy.com/system/resources/previews/016/282/565/large_2x/cheese-pav-bhaji-recipe-is-a-street-food-bhaji-pav-recipe-with-addition-of-cheese-free-photo.jpg" }, 
      { name: "Kothimbir Vadi", price: 150, img: "https://i0.wp.com/southindianrecipes.in/wp-content/uploads/2021/08/Kothimbir-Vadi.jpg" }, 
      { name: "Thalipeeth", price: 140, img: "https://www.lifeberrys.com/img/article/thalipeeth-maharashtra-1688137247-lb.jpg" }, 
      { name: "Veg Momos", price: 120, img: "https://cdn.foodaciously.com/static/recipes/ee9fd204-25cf-4e97-be5a-d7626470d420/easy-vegan-momos-recipe-7ab341154a5c13d6d9642300e7e2c92d-2560.jpg" }, 
      { name: "Spring Roll", price: 140, img: "https://www.fajarmag.com/wp-content/uploads/2020/04/spring-roll-recipe-step-by-step-instructions-scaled.jpg" }, 
      { name: "Veg Cutlet", price: 100, img: "https://www.funfoodfrolic.com/wp-content/uploads/2020/06/Cutlet-Thumbnail.jpg" }, 
      { name: "Veg Sandwich", price: 90, img: "https://recipes.net/wp-content/uploads/2023/05/vegetarian-grilled-vegetable-sandwich-recipe_abfe5bcd980d1819796719f32051e674-768x768.jpeg" },
      { name: "Veg Burger", price: 120, img: "https://indianfoods.co.in/wp-content/uploads/2026/01/Veg-Burger-Featured-Image-e1768460351955.png" }, 
      { name: "Veg Pizza", price: 250, img: "https://static.vecteezy.com/system/resources/previews/047/734/497/large_2x/enjoy-the-delicious-flavors-of-a-vegetarian-pizza-with-fresh-tomatoes-onions-and-green-peas-on-a-crispy-crust-from-a-nearby-pizzeria-add-basil-herbs-parsley-and-spices-for-an-extra-kick-photo.jpg" }, 
      { name: "Veg Hakka Noodles", price: 150, img: "https://i1.wp.com/yourfoodfantasy.com/wp-content/uploads/2018/04/Hakka-Noodles-Recipe-Indo-Chinese-Cuisine-.jpg?w=1345&ssl=1" }, 
      { name: "Veg Manchurian", price: 160, img: "https://img.freepik.com/premium-photo/top-view-vegetable-manchurian-with-gravy_641503-88234.jpg?w=1480" },
    ], 
    Soups: 
    [
      { name: "Manchow Soup", price: 130, img: "https://images.unsplash.com/photo-1547592180-85f173990554" },

      { name: "Cream of Mushroom Soup", price: 140, img: "https://images.unsplash.com/photo-1547592166-23ac45744acd" },

      { name: "Veg Clear Soup", price: 110, img: "https://images.unsplash.com/photo-1547592180-85f173990554" },

      { name: "Lemon Coriander Soup", price: 120, img: "https://images.unsplash.com/photo-1547592180-85f173990554" },

      { name: "Palak Soup", price: 120, img: "https://images.unsplash.com/photo-1547592180-85f173990554" },

      { name: "Mixed Veg Soup", price: 130, img: "https://images.unsplash.com/photo-1547592180-85f173990554" },

      { name: "Mushroom Soup", price: 140, img: "https://images.unsplash.com/photo-1547592166-23ac45744acd" },

      { name: "Broccoli Soup", price: 150, img: "https://images.unsplash.com/photo-1547592180-85f173990554" },

      { name: "Noodle Soup", price: 140, img: "https://images.unsplash.com/photo-1617093727343-374698b1b08d" },

      { name: "French Onion Soup", price: 160, img: "https://images.unsplash.com/photo-1547592180-85f173990554" },

      { name: "Cream of Tomato Soup", price: 120, img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/11/tomato-soup-recipe.jpg" },

      { name: "Cheese Corn Soup", price: 150, img: "https://static.fanpage.it/wp-content/uploads/sites/22/2021/07/creamy-corn-soup.jpg" },
    ],
    Salads: [
      { name: "Veg Salad", price: 80,
        img: "https://img.freepik.com/premium-photo/vegetable-salad-photos_1057389-81665.jpg"
      },
      { name: "Fruit Salad", price: 100,
        img: "https://www.barefootfarmbyron.com/wp-content/uploads/2023/09/delicious-breakfast-fruit-salad-recipe-start-your-day-with-a-burst-of-freshness-1.jpg"
      },
      { name: "Paneer Salad", price: 120,
        img: "https://img.freepik.com/premium-photo/palak-paneer-salad-delight_762785-229339.jpg"
      },
      { name: "Green Salad", price: 90,
        img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
      },
      { name: "Kachumber Salad", price: 90,
        img: "https://images.unsplash.com/photo-1540420773420-3366772f4999"
      }, 
      { name: "Sprouts Salad", price: 110,
        img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
      },
      { name: "Corn Salad", price: 120,
        img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1"
      }, 
      { name: "Russian Salad", price: 150,
        img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
      },
      { name: "Mixed Veg Salad", price: 110,
        img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
      },
      { name: "Paneer Tikka Salad", price: 160,
        img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
      },
      { name: "Beetroot Salad", price: 100,
        img: "https://images.unsplash.com/photo-1540420773420-3366772f4999"
      },
      { name: "Cucumber Salad", price: 80,
        img: "https://images.unsplash.com/photo-1546793665-c74683f339c1"
      }
    ]
  };

  const allItems = Object.keys(vegItems).flatMap((category) => 
  vegItems[category].map((item) => ({
    ...item,
    category,
  }))
);

// const filteredItems = allItems.filter((item) => 
//   item.name.toLowerCase().includes((search || "").toLowerCase())
// );


// search + category filter
const filteredItems = allItems.filter((item) => {

  //search filter
  const matchesSearch = item.name
                            .toLowerCase()
                            .includes((search || "").toLowerCase());

  //category filter
  const matchesCategory =
    selectedCategory === "All" ||
    item.category === selectedCategory;

  return matchesSearch && matchesCategory;
});

  /* RESET PAGE WHEN SEARCH CHANGES */
  // useEffect(() => {
  //   setCurrentPage(1);
  // }, [search]);

  // reset page when search or category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedCategory]);

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
    <div className='min-h-screen bg-gradient-to-br from-green-100 via-white to-lime-50 p-6'>

    <h1 className="text-4xl font-bold text-center text-green-700 mb-10 mt-10">
      Veg Menu 🥗
    </h1>

    {/* CATEGORY FILTER */}

    <div className="flex flex-wrap justify-center gap-3 mb-10">

      <button
        onClick={() => setSelectedCategory("All")}
        className={`px-5 py-2 rounded-full font-semibold transition ${
          selectedCategory === "All"
            ? "bg-green-600 text-white"
            : "bg-white text-gray-700 border border-green-300 hover:bg-green-100"
        }`}
      >
        All
      </button>

      {Object.keys(vegItems).map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-5 py-2 rounded-full font-semibold transition ${
            selectedCategory === category
              ? "bg-green-600 text-white"
              : "bg-white text-gray-700 border border-green-300 hover:bg-green-100"
          }`}
        >
          {category}
        </button>
      ))}
    </div>

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