import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './CartSlice';
import { toast } from 'react-toastify';

function Nonveg({ search }) {

    let dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const itemsPerPage = 12;

    const handleAddToCart = (item) => {
        const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

        if (!loggedUser) {
            toast.error("Please login first to add items to cart");
            return;
        }

        dispatch(addToCart(item));
        toast.success(`${item.name} Added to Cart`);
    };

    const nonvegItems = {
        Chicken: [
            { name: "Butter Chicken", price: 280, img: "https://feelgoodfoodie.net/wp-content/uploads/2023/04/Easy-Butter-Chicken-08.jpg" },
            { name: "Chicken Curry", price: 260, img: "https://kitchenofdebjani.com/wp-content/uploads/2023/04/easy-indian-chicken-curry-Recipe-for-beginners-Debjanir-rannaghar.jpg" },
            { name: "Chicken Kadai", price: 280, img: "https://i.pinimg.com/originals/09/2f/a9/092fa9604793b77095ae279a10ae1d1a.jpg" },
            { name: "Chicken Tikka", price: 300, img: "https://images.saymedia-content.com/.image/t_share/MTg0Mzg1ODQ2OTk5OTE4MDU4/7-coloured-chicken-tikka-kebabs.jpg" },
            { name: "Chicken Handi", price: 290, img: "https://i.ytimg.com/vi/_kkosy25Yuc/maxresdefault.jpg" },
            { name: "Chicken Bhuna", price: 280, img: "https://spiceeats.com/wp-content/uploads/2020/06/Bhuna-Chicken.jpg" },
            { name: "Chicken Kolhapuri", price: 300, img: "https://tastyhug.com/wp-content/uploads/2025/12/joZav76ISSgxmBbxHAbqeosimXcBPlWJz6DX6Zba.jpg" },
            { name: "Chicken Jalfrezi", price: 290, img: "https://www.shemins.com/wp-content/uploads/2016/05/shemins-jalfrezi-scaled.jpg" },
            { name: "Chicken Roast", price: 320, img: "https://realfood.tesco.com/media/images/RFO-1400x919-Spiced-Roast-Chicken-09a6012a-910c-4cd0-b20d-a16bb16e7d57-0-1400x919.jpg" },
            { name: "Chicken Pepper Fry", price: 280, img: "https://i.ytimg.com/vi/Zsw0oJ-tYMY/maxresdefault.jpg" },
            { name: "Chicken Masala", price: 270, img: "https://sadhyafoodie.com/wp-content/uploads/2022/06/chicken-masala-recipe.jpeg" },
            { name: "Chicken Do Pyaza", price: 290, img: "https://i.ytimg.com/vi/_PjpztAjYSk/maxresdefault.jpg" }
        ],

        Mutton: [
            { name: "Mutton Curry", price: 350, img: "https://static.toiimg.com/thumb/63201465.cms?width=1200&height=900" },
            { name: "Mutton Rogan Josh", price: 380, img: "https://1.bp.blogspot.com/-S_1HJb6StqY/X9WeCN8qLTI/AAAAAAAACjc/0VBiiWhlIlk5tsXxM6EsmMojTmM0UzAUQCLcBGAsYHQ/s709/Rogan-Josh-2-PictureTheRecipe.jpg" },
            { name: "Mutton Korma", price: 370, img: "https://theartisticcook.com/wp-content/uploads/2023/06/muttonkorma-latest1-1.jpg" },
            { name: "Mutton Handi", price: 360, img: "https://durantbarta.com/uploads/2/2025-03/handi_mutton.jpg" },
            { name: "Mutton Masala", price: 350, img: "https://www.heavenlyrecipe.com/wp-content/uploads/2025/12/Mutton_Masala_cti8q1.webp" },
            { name: "Mutton Bhuna", price: 370, img: "https://www.heavenlyrecipe.com/wp-content/uploads/2025/12/Mutton_Masala_cti8q1.webp" },
            { name: "Mutton Kolhapuri", price: 390, img: "https://img-global.cpcdn.com/recipes/631a4673d1d9c8ea/680x482cq70/kolhapuri-mutton-recipe-recipe-main-photo.jpg" },
            { name: "Mutton Keema", price: 340, img: "https://yummyindiankitchen.com/wp-content/uploads/2016/01/mutton-keema.jpg" },
            { name: "Mutton Fry", price: 360, img: "https://www.foodiaq.com/wp-content/uploads/2025/10/Mutton-chaap.jpg" },
            { name: "Mutton Pepper Fry", price: 380, img: "https://i.pinimg.com/736x/ce/9c/38/ce9c3804769a8960728c1871aeb1d33e.jpg" },
            { name: "Mutton Sukka", price: 390, img: "https://i.ytimg.com/vi/p5tLesAQL_M/maxresdefault.jpg" },
            { name: "Mutton Do Pyaza", price: 370, img: "https://i.ytimg.com/vi/Pcjys3nJ6Ug/maxresdefault.jpg" }
        ],

        Biryani: [
            { name: "Chicken Biryani", price: 250, img: "https://snackinstyle.com/wp-content/uploads/2025/01/number00004_58940_Pakistani_Chicken_Biryani_Recipe_Amateur_phot_5ef0c8b5-81cb-4585-8b3b-7cf86398c6c4.png" },
            { name: "Chicken Dum Biryani", price: 280, img: "https://img.freepik.com/premium-photo/traditional-hyderabadi-chicken-dum-biryani-made-basmati-rice-cooked-with-masala-spices_726363-1271.jpg?w=2000" },
            { name: "Hyderabadi Chicken Biryani", price: 300, img: "https://curlytales.com/wp-content/uploads/2022/07/Untitled-design-2022-07-25T105549.084.jpg" },
            { name: "Mutton Biryani", price: 350, img: "https://png.pngtree.com/thumb_back/fw800/background/20240328/pngtree-mutton-biryani-meal-in-a-plate-on-table-image_15645442.jpg" },
            { name: "Hyderabadi Mutton Biryani", price: 380, img: "https://shop.aeroplanerice.com/wp-content/uploads/2021/10/Best-Mutton-Biryani-Recipe.jpg" },
            { name: "Egg Biryani", price: 180, img: "https://eggcellent.recipes/wp-content/uploads/2024/07/Egg-Biryani-Recipe-1024x1024.png" },
            { name: "Prawn Biryani", price: 340, img: "https://i.ytimg.com/vi/p-E-NyNFPyQ/maxresdefault.jpg" },
            { name: "Fish Biryani", price: 320, img: "https://cdn.shopify.com/s/files/1/1785/5627/t/60/assets/historical_odyssey_fish_biryani-1701905854473_1800x.jpg?v=1701905856" },
            { name: "Keema Biryani", price: 320, img: "https://img.taste.com.au/pKD3ZpSb/taste/2016/11/lamb-keema-biryani-109579-1.jpeg" },
            { name: "Boneless Chicken Biryani", price: 320, img: "https://noilucky.com/wp-content/uploads/2023/08/maxresdefault-min-1024x576.jpg" },
            { name: "Special Family Biryani", price: 650, img: "https://www.hindustantimes.com/ht-img/img/2024/04/08/1600x900/awadhi1_1712578819545_1712578834320.jpeg" },
            { name: "Tandoori Chicken Biryani", price: 330, img: "https://www.iwmbuzz.com/wp-content/uploads/2021/02/prepare-this-delicious-chicken-tandoor-biryani-at-home-with-these-simple-recipes-5.jpg" }
        ],

        Seafood: [
            { name: "Fish Curry", price: 280, img: "https://www.thedeliciouscrescent.com/wp-content/uploads/2023/07/Fish-Curry-4.jpg" },
            { name: "Fish Fry", price: 300, img: "https://i.pinimg.com/originals/52/dc/fe/52dcfe0613322e4d45cd46aac779e296.jpg" },
            { name: "Fish Masala", price: 320, img: "https://thumbs.dreamstime.com/z/recheado-masala-fish-goan-classic-can-be-prepared-easily-your-barbecue-298171758.jpg" },
            { name: "Tandoori Fish", price: 350, img: "https://mealthy.com.hk/cdn/shop/files/tilaipiafish_2a6da253-5958-42b9-8c14-fbc73a2b07b1.png?v=1704022144" },
            { name: "Prawn Curry", price: 340, img: "https://thumbs.dreamstime.com/b/serving-spicy-prawn-curry-india-succulent-prawns-rich-red-gravy-captured-bold-high-resolution-traditional-372255163.jpg" },
            { name: "Prawn Masala", price: 360, img: "https://www.theloveofspice.com/wp-content/uploads/2021/02/prawn-curry-recipe.jpg" },
            { name: "Prawn Fry", price: 350, img: "https://www.thespruceeats.com/thmb/5xkGMB8ZXz3KGF_y4Uxf7ZfQAvQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ebi-fry-fried-shrimp-2031450-hero-01-46c436a89c164a9ab5980f888097fcd2.jpg" },
            { name: "Chilli Prawns", price: 370, img: "https://i.ytimg.com/vi/Jr1Vexsa4mY/maxresdefault.jpg" },
            { name: "Butter Garlic Prawns", price: 390, img: "https://casuallypeckish.com/wp-content/uploads/2020/09/Butter-garlic-prawns.jpg" },
            { name: "Fish Tikka", price: 340, img: "https://nishkitchen.com/wp-content/uploads/2019/02/Fish-tikka-2B.jpg" },
            { name: "Fish Fingers", price: 280, img: "https://www.coolinarco.com/wp-content/uploads/2025/03/ds0887_Homemade_Fish_Fingers_bc04cb9e-ac92-4fd7-aaa7-a34dfbe263b1.webp" },
            { name: "Prawn Pepper Fry", price: 380, img: "https://i.ytimg.com/vi/PMcJnDjo5ZY/maxresdefault.jpg" },
            { name: "Crab Curry", price: 420, img: "https://i.pinimg.com/originals/fc/4f/b1/fc4fb1e8139028195a091790367d9147.jpg" },
            { name: "Crab Masala", price: 450, img: "https://thumbs.dreamstime.com/b/crab-masala-indian-dish-prepared-spicy-gravy-full-masalas-india-133843863.jpg" },
            { name: "Crab Fry", price: 430, img: "https://maryzkitchen.com/wp-content/uploads/2021/01/20210102_110813-2048x1152.jpg" },
            { name: "Lobster Butter Masala", price: 650, img: "https://seafood-portal.com/thumb/768/decadent-lobster-butter-sauce-recipe.webp" },
            { name: "Grilled Lobster", price: 700, img: "https://seafooddishrecipes.com/wp-content/uploads/2025/07/garlic-butter-lobster.webp" },
            { name: "Squid Fry", price: 380, img: "https://thecortezkitchen.com/wp-content/uploads/2025/08/Golden-Fried-Squid-Rings-with-Tartar-Sauce.jpg" },
            { name: "Squid Pepper Fry", price: 400, img: "https://www.miarecipe.com/wp-content/uploads/2026/02/Salt-and-Pepper-Squid.jpg" },
            { name: "Calamari Rings", price: 350, img: "https://www.markwellfoods.com.au/wp-content/uploads/2022/03/panko-squid-rings-1-scaled.jpg" },
            { name: "Seafood Platter", price: 850, img: "https://c8.alamy.com/comp/PWM85X/fresh-seafood-platter-with-red-lobster-langoustine-prawns-mussels-oysters-clams-with-a-tartare-and-sweet-chilli-sauce-PWM85X.jpg" },
            { name: "Prawn Tikka", price: 390, img: "https://i.ytimg.com/vi/y-WcDo7mZwM/maxresdefault.jpg" },
            { name: "Prawn 65", price: 370, img: "https://4.bp.blogspot.com/-pEb_h0LF_XU/VfwZHQvP-FI/AAAAAAADmlo/U8RpznzHCDo/s1600/1.JPG" },
            { name: "Fish 65", price: 340, img: "https://4.bp.blogspot.com/-CfC6nzRcx60/UzEy__Pa-lI/AAAAAAAAB8M/v4KUlaTdt7A/s1600/fishh5555.jpg" },
            { name: "Pomfret Fry", price: 420, img: "https://www.licious.in/blog/wp-content/uploads/2022/09/Shutterstock_1827924218-750x750.jpg" },
            { name: "Surmai Fry", price: 450, img: "https://vanitascorner.com/wp-content/uploads/2021/05/Surmai-Tawa-masala.jpg" },
            { name: "Fish Manchurian", price: 330, img: "https://mapupa.com/wp-content/uploads/2024/12/Fish-Manchurian-Recipe.webp" },
            { name: "Garlic Butter Fish", price: 390, img: "https://i.pinimg.com/originals/31/ba/de/31bade8337bbe05ab5b8be98261c0015.jpg" },
            { name: "Fish Cutlets", price: 280, img: "https://png.pngtree.com/background/20230408/original/pngtree-homemade-fish-cutlets-and-tasty-fish-steak-delicious-fish-cutlet-photo-picture-image_2363268.jpg" },
            { name: "Prawn Noodles", price: 320, img: "https://www.mysugarfreekitchen.com/wp-content/uploads/2022/04/Prawn-Noodles-j.jpg" }
        ],

        Snacks: [
            { name: "Chicken 65", price: 220, img: "https://static01.nyt.com/images/2016/11/29/dining/recipelab-chick-noodle-still/recipelab-chick-noodle-still-superJumbo.jpg" },
            { name: "Chicken Lollipop", price: 250, img: "https://i.pinimg.com/originals/99/9f/d3/999fd38d32fa0847d547f3e9d9bf05f4.jpg" },
            { name: "Chicken Tikka", price: 260, img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/chicken-tikka-kebab.jpg" },
            { name: "Chicken Wings", price: 240, img: "https://recipe-graphics.grocerywebsite.com/0_GraphicsRecipes/5607_4k.jpg" },
            { name: "Chilli Chicken", price: 250, img: "https://3.bp.blogspot.com/-SoqfR5Hoaec/V_7M52DiuiI/AAAAAAAABaw/H-aYSCKQ1jsgpZRUMgSUgC_F0BI9QT6hQCLcB/s1600/Chilli+Chiken.jpg" },
            { name: "Dragon Chicken", price: 270, img: "https://www.hayleyrecipes.com/wp-content/uploads/2025/12/wch0rpjcz3vi13daka7x.webp" },
            { name: "Chicken Nuggets", price: 220, img: "https://www.cookingcrusade.com/wp-content/uploads/media/02/97538082-baked-chicken-nuggets-recipe-cookingcrusade.jpg" },
            { name: "Chicken Popcorn", price: 230, img: "https://images.culinarybite.com/large/perfect-kfc-popcorn-chicken.webp" },
            { name: "Seekh Kebab", price: 280, img: "https://image.shutterstock.com/z/stock-photo-seekh-kabab-154602098.jpg" },
            { name: "Tandoori Chicken", price: 320, img: "https://recipehub.com.au/wp-content/uploads/2024/07/Tandoori-Chicken-Recipe.jpg" },
            { name: "Mutton Seekh Kebab", price: 320, img: "https://img.freepik.com/premium-photo/indian-mutton-seekh-kabab-served-with-green-salad_762785-282139.jpg" },
            { name: "Chicken Manchurian", price: 240, img: "https://pupswithchopsticks.com/wp-content/uploads/chicken-manchurian-recipe-1.jpg" }
        ],

        Soups: [
            { name: "Chicken Soup", price: 120, img: "https://static01.nyt.com/images/2016/11/29/dining/recipelab-chick-noodle-still/recipelab-chick-noodle-still-superJumbo.jpg" },
            { name: "Chicken Manchow Soup", price: 140, img: "https://static.vecteezy.com/system/resources/thumbnails/039/074/352/small_2x/ai-generated-a-bowl-of-hot-and-sour-soup-an-asian-delight-with-a-perfect-balance-of-spicy-and-tangy-flavors-free-photo.jpeg" },
            { name: "Chicken Clear Soup", price: 130, img: "https://www.whiskaffair.com/wp-content/uploads/2016/08/Clear-Chicken-Soup-2-2.jpg" },
            { name: "Hot & Sour Chicken Soup", price: 140, img: "https://www.yummytummyaarthi.com/wp-content/uploads/2022/07/hot-and-sour-chicken-soup-1-720x480.jpg" },
            { name: "Chicken Sweet Corn Soup", price: 130, img: "https://insanelygoodrecipes.com/wp-content/uploads/2024/11/Chicken-and-Sweet-Corn-Soup-6.jpg" },
            { name: "Mutton Soup", price: 150, img: "https://www.foodfusion.com/wp-content/uploads/2018/12/Mutton-bone-soup-Recipe-by-Food-fusion-3.jpg" },
            { name: "Mutton Bone Soup", price: 170, img: "https://i.ytimg.com/vi/69t03dLfwHA/maxresdefault.jpg" },
            { name: "Seafood Soup", price: 180, img: "https://mybigfatgrainfreelife.com/wp-content/uploads/2023/08/easy-seafood-soup.jpg" },
            { name: "Prawn Soup", price: 160, img: "https://hillstreetgrocer.com/application/files/3616/3460/5582/Website_Tile_-_Prawn_Tom_Yum_Soup.jpeg" },
            { name: "Egg Drop Soup", price: 120, img: "https://static01.nyt.com/images/2024/10/28/multimedia/Egg-Drop-Souprex-lhwp/Egg-Drop-Souprex-lhwp-mediumSquareAt3X.jpg" },
            { name: "Chicken Noodle Soup", price: 150, img: "https://images.slurrp.com/prod/recipe_images/rachael-ray/pepper-steak-noodle-soup-1623170086_5OINEZUCL5HZKFQUC9QJ.webp" },
            { name: "Pepper Chicken Soup", price: 140, img: "https://foodal.com/wp-content/uploads/2020/01/The-Best-Recipe-for-Chicken-Mushroom-Leek-and-Pepper-Soup.jpg" }
        ],

        Salads: [
            { name: "Chicken Salad", price: 180, img: "https://www.maebells.com/wp-content/uploads/2024/06/Grilled-Chicken-Caesar-Salad-14.jpg" },
            { name: "Egg Salad", price: 120, img: "https://theforkedspoon.com/wp-content/uploads/2019/07/Egg-Salad-9-700x1050.jpg" },
            { name: "Chicken Caesar Salad", price: 220, img: "https://theartoffoodandwine.com/wp-content/uploads/2021/06/Grilled-Caesar-up-close.jpg" },
            { name: "Grilled Chicken Salad", price: 230, img: "https://iowagirleats.com/wp-content/uploads/2020/06/Grilled-Chicken-Summer-Salad-iowagirleats-02_srgb.jpg" },
            { name: "Chicken Tikka Salad", price: 240, img: "https://1.bp.blogspot.com/-7YBMPHBVoic/Xr7BRrM_cjI/AAAAAAAAXTc/b29maJOO3DUTrcGwx2Q6ezNgBuFGsfsNQCNcBGAsYHQ/s1600/Chicken%2BTikka%2BSalad%2Bwith%2BYogurt%2BMint%2BDressing%2B2.jpg" },
            { name: "Seafood Salad", price: 250, img: "https://www.tasteofhome.com/wp-content/uploads/2020/03/Easy-Citrus-Seafood-Salad_EXPS_TOHJJ20_242786_E02_05_1b.jpg" },
            { name: "Prawn Salad", price: 260, img: "https://img.freepik.com/premium-photo/prawn-salad_1006400-64.jpg" },
            { name: "Egg & Corn Salad", price: 140, img: "https://healthyfitnessmeals.com/wp-content/uploads/2020/03/instagram-In-Stream_Square___Chicken-avocado-salad-7.jpg" },
            { name: "Chicken Sprouts Salad", price: 200, img: "https://snackinstyle.com/wp-content/uploads/2025/04/foodmacro_Chicken_and_Shaved_Brussel_Sprout_Salad_Amateur_photo_386a6991-684a-4443-8dde-7f4418f88806.jpg" },
            { name: "Mixed Non-Veg Salad", price: 280, img: "https://i.ytimg.com/vi/acTu1Jl8-gY/maxresdefault.jpg" },
            { name: "Boiled Egg Salad", price: 130, img: "https://thatgirlcookshealthy.com/wp-content/uploads/2020/05/egg-leafy-green-salad-image.jpg" },
            { name: "Chicken Green Salad", price: 190, img: "https://sanitasbynikki.com/wp-content/uploads/2023/05/Green-Goddess-Grilled-Chicken-Salad-photo.jpg" }
        ]
    };


    // Convert category object to array
    const allItems = Object.entries(nonvegItems).flatMap(
        ([category, items]) =>
            items.map((item) => ({
                ...item,
                category,
            }))
    );

    const filteredItems = allItems.filter((item) => {

        const matchesSearch = item.name
            .toLowerCase()
            .includes((search || "").toLowerCase());

        const matchesCategory =
            selectedCategory === "All" ||
            item.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    useEffect(() => {
        setCurrentPage(1);
    }, [search, selectedCategory]);

    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    const lastIndex = currentPage * itemsPerPage;
    const startIndex = lastIndex - itemsPerPage;

    const currentItems = filteredItems.slice(
        startIndex,
        lastIndex
    );


    return (
        <>
            <div className='min-h-screen bg-gradient-to-br from-red-100 via-white to-orange-50 p-6'>
                {/* Title */}
                <h1 className='text-4xl font-bold text-center text-green-700 mb-10 mt-10'>
                    Non-Veg Menu 🍗
                </h1>

                {/* category buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">

                    <button
                        onClick={() => setSelectedCategory("All")}
                        className={`px-5 py-2 rounded-full font-semibold transition ${selectedCategory === "All"
                            ? "bg-red-600 text-white"
                            : "bg-white text-gray-700 border border-red-300 hover:bg-red-100"
                            }`}
                    >
                        All
                    </button>

                    {Object.keys(nonvegItems).map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-5 py-2 rounded-full font-semibold transition ${selectedCategory === category
                                ? "bg-red-600 text-white"
                                : "bg-white text-gray-700 border border-red-300 hover:bg-red-100"
                                }`}
                        >
                            {category}
                        </button>
                    ))}

                </div>


                {/* Grid */}
                <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto'>

                    {currentItems.length === 0 ? (
                        <h2 className="col-span-4 text-center text-xl font-semibold text-gray-600">
                            No food found 😔
                        </h2>
                    ) : (
                        currentItems.map((item, index) => (
                            <div
                                key={index}
                                className='bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition'
                            >
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className='w-full h-48 object-cover'
                                />

                                <div className='p-5'>
                                    <h2 className='text-xl font-semibold text-gray-800'>
                                        {item.name}
                                    </h2>

                                    <p className='text-green-600 font-bold mt-2'>
                                        ₹{item.price}
                                    </p>

                                    <button
                                        onClick={() => handleAddToCart(item)}
                                        className='mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition'
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))
                    )}

                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center mt-8 gap-3">

                        <button
                            onClick={() => setCurrentPage((prev) => prev - 1)}
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-red-600 text-white rounded"
                        >
                            &lt;&lt;
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`px-4 py-2 rounded ${currentPage === page
                                    ? "bg-red-600 text-white"
                                    : "bg-gray-200"
                                    }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={() => setCurrentPage((prev) => prev + 1)}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 bg-red-600 text-white rounded"
                        >
                            &gt;&gt;
                        </button>

                    </div>
                )}
            </div>
        </>
    );
}

export default Nonveg;