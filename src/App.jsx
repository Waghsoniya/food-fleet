import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Veg from "./Veg";
import Nonveg from "./Nonveg";
import Starters from "./Starters";
import Drinks from "./Drinks";
import Desserts from "./Desserts";
import Cart from "./Cart";
import Home from "./Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./Register";
import Login from "./Login";
import { useSelector } from "react-redux";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import About from "./About";
import Contact from "./Contact";
import UserLightningIcon from "./UserLightningIcon";
import Order from "./Orders";

function App() {
  const [user, setUser] = useState(null);
  const [showWelcome, setShowWelcome] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [search, setSearch] = useState("");

  const cartItems = useSelector((state) => state.cart);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    setUser(loggedUser);

    if (loggedUser) {
      setShowWelcome(true);

      setTimeout(() => {
        setShowWelcome(false);
      }, 4000);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    window.location.href = "/";
  };

  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          {/* Welcome Popup */}

          {showWelcome && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
              <div className="bg-white p-8 rounded-2xl shadow-xl text-center w-[300px]">
                <div className="text-green-500 text-6xl mb-3">✔</div>

                <h2 className="text-2xl font-bold text-gray-800">
                  Welcome {user?.name}
                </h2>

                <p className="text-gray-600 mt-1">Login Successful</p>

                <button
                  onClick={() => setShowWelcome(false)}
                  className="mt-5 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                >
                  OK
                </button>
              </div>
            </div>
          )}

          {/* NAVBAR */}

          <nav className="sticky top-0 z-50 shadow-md">
            {/* TOP NAV */}

            <div className="bg-gray-900 text-white">
              <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}

                <div className="flex items-center gap-2">
                  <img
                    src="/logo1.png"
                    alt="logo"
                    className="h-16 w-16 bg-white p-1 rounded-full"
                  />

                  <h1 className="text-2xl font-bold tracking-wide">
                    FoodFleet
                  </h1>
                </div>

                {/* Search Bar Desktop */}

                <div className="hidden md:flex w-[40%]">

  <input
    type="text"
    placeholder="Search food..."
    value={search}
    onChange={(e) => {
      setSearch(e.target.value);
    }}
    className="w-full px-4 py-2 rounded-l-full text-black outline-none"
  />

  <button className="bg-gray-800 text-black px-4 rounded-r-full">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  </button>

</div>

                {/* Profile + Cart */}

                <div className="flex items-center gap-6">
                  {/* Cart */}
                  <Link to="/cart" className="relative">
                    <FaShoppingCart className="text-white text-2xl cursor-pointer" />

                    {cartItems.length > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                        {cartItems.length}
                      </span>
                    )}
                  </Link>

                  {/* Profile */}
                  <div className="relative">
                    {!user ? (
                      <Link to="/login">
                        <UserLightningIcon />
                      </Link>
                    ) : (
                      <div
                        onClick={() => setProfileOpen(!profileOpen)}
                        className="cursor-pointer flex items-center gap-2"
                      >
                        <UserLightningIcon />
                        {/* <FaUserCircle className="text-white text-3xl" /> */}
                        {/* <span className="hidden md:block">{user.name}</span> */}
                      </div>
                    )}

                    {user && profileOpen && (
                      <div className="absolute right-0 mt-3 w-32 bg-white text-black rounded-lg shadow-lg py-2">
                        <button
                          onClick={handleLogout}
                          className="w-full text-center px-4 py-2 bg-white hover:bg-gray-300"
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Mobile Search */}

              <div className="md:hidden px-4 pb-3">
                <input
                  type="text"
                  placeholder="Search food..."
                  className="w-full px-4 py-2 rounded-full text-black outline-none"
                />
              </div>
            </div>

            {/* CATEGORY NAVBAR */}

            <div className="bg-gray-900 text-white">
              <div className="max-w-7xl mx-auto px-4">
                <div className="hidden md:flex justify-center gap-10 py-3 font-semibold text-gray-700">
                  <Link className="hover:text-purple-300 text-white" to="/">
                    Home
                  </Link>
                  <Link className="hover:text-purple-300 text-white" to="/veg">
                    Veg
                  </Link>
                  <Link
                    className="hover:text-purple-300 text-white"
                    to="/nonveg"
                  >
                    NonVeg
                  </Link>
                  <Link
                    className="hover:text-purple-300 text-white"
                    to="/starters"
                  >
                    Starters
                  </Link>
                  <Link
                    className="hover:text-purple-300 text-white"
                    to="/drinks"
                  >
                    Drinks
                  </Link>
                  <Link
                    className="hover:text-purple-300 text-white"
                    to="/desserts"
                  >
                    Desserts
                  </Link>
                  <Link
                    className="hover:text-purple-300 text-white"
                    to="/about"
                  >
                    AboutUs
                  </Link>
                  <Link
                    className="hover:text-purple-300 text-white"
                    to="/contact"
                  >
                    ContactUs
                  </Link>
                   <Link
                    className="hover:text-purple-300 text-white"
                    to="/orders"
                  >
                    Orders
                  </Link>


                  {/* {user && (
                    <span
                      onClick={handleLogout}
                      className="cursor-pointer text-white hover:text-red-500"
                    >
                      Logout
                    </span>
                  )} */}
                </div>

                {/* MOBILE MENU */}

                {menuOpen && (
                  <div className="md:hidden flex flex-col gap-4 py-4 text-center font-medium text-gray-700">
                    <Link to="/">Home</Link>
                    <Link to="/veg">Veg</Link>
                    <Link to="/nonveg">NonVeg</Link>
                    <Link to="/starters">Starters</Link>
                    <Link to="/drinks">Drinks</Link>
                    <Link to="/desserts">Desserts</Link>
                    <Link to="/about">AboutUs</Link>
                    <Link to="/contact">ContactUs</Link>
                    <Link to="/orders">Orders</Link>

                    {user && (
                      <span
                        onClick={handleLogout}
                        className="cursor-pointer bg-white text-gray-900"
                      >
                        Logout
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </nav>

          {/* ROUTES */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/veg" element={<Veg search={search}/>} />
            <Route path="/nonveg" element={<Nonveg search={search}/>} />
            <Route path="/starters" element={<Starters search={search}/>} />
            <Route path="/drinks" element={<Drinks search={search}/>} />
            <Route path="/desserts" element={<Desserts search={search}/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />            
            <Route path="/about" element={<About />} />
            <Route path="/orders" element={<Order />} />
            <Route path="/contact" element={<Contact />} />

            
          </Routes>
        </div>

        <ToastContainer position="top-right" autoClose={2000} />
      </BrowserRouter>
    </>
  );
}

export default App;
