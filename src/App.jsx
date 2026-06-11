import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Veg from "./Veg";
import Nonveg from "./Nonveg";
import Starters from "./Starters";
import Drinks from "./Drinks";
import Desserts from "./Desserts";
import Thali from "./Thali";
import Cart from "./Cart";
import Home from "./Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./Register";
import Login from "./Login";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import About from "./About";
import Contact from "./Contact";
import UserLightningIcon from "./UserLightningIcon";
import Order from "./Orders";
import NotFound from "./NotFound";

function App() {
  const [user, setUser] = useState(null);
  const [showWelcome, setShowWelcome] = useState(false);

  // ✅ controls mobile menu open/close
  const [menuOpen, setMenuOpen] = useState(false);

  const [profileOpen, setProfileOpen] = useState(false);
  const [search, setSearch] = useState("");

  const cartItems = useSelector((state) => state.cart);

  // Load user from localStorage
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    setUser(loggedUser);

    if (loggedUser) {
      setShowWelcome(true);
      setTimeout(() => setShowWelcome(false), 4000);
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    window.location.href = "/";
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">

        {/* ================= WELCOME POPUP ================= */}
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
                className="mt-5 px-6 py-2 bg-orange-500 text-white rounded-lg"
              >
                OK
              </button>
            </div>
          </div>
        )}

        {/* ================= NAVBAR ================= */}
        <nav className="sticky top-0 z-50 shadow-md">

          {/* TOP NAVBAR */}
          <div className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

              {/* Logo */}
              <div className="flex items-center gap-2">
                <img
                  src="/logo1.png"
                  alt="logo"
                  className="h-16 w-16 bg-white p-1 rounded-full"
                />
                <h1 className="text-2xl font-bold">FoodFleet</h1>
              </div>

              {/* Desktop Search */}
              <div className="hidden md:flex w-[40%]">
                <input
                  type="text"
                  placeholder="Search food..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full px-4 py-2 rounded-l-full text-black"
                />
              </div>

              {/* RIGHT SIDE ICONS */}
              <div className="flex items-center gap-4">

                {/* ✅ MOBILE MENU BUTTON */}
                <button
                  className="md:hidden text-white text-2xl"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  ☰
                </button>

                {/* CART */}
                <Link to="/cart" className="relative">
                  <FaShoppingCart className="text-white text-2xl" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded-full">
                      {cartItems.length}
                    </span>
                  )}
                </Link>

                {/* PROFILE */}
                <div className="relative">
                  {!user ? (
                    <Link to="/login">
                      <UserLightningIcon />
                    </Link>
                  ) : (
                    <div
                      onClick={() => setProfileOpen(!profileOpen)}
                      className="cursor-pointer"
                    >
                      <UserLightningIcon />
                    </div>
                  )}

                  {profileOpen && (
                    <div className="absolute right-0 mt-2 bg-white text-black p-2 rounded shadow">
                      <button onClick={handleLogout}>Logout</button>
                    </div>
                  )}
                </div>

              </div>
            </div>

            {/* MOBILE SEARCH */}
            <div className="md:hidden px-4 pb-3">
              <input
                type="text"
                placeholder="Search food..."
                className="w-full px-4 py-2 rounded-full text-black"
              />
            </div>
          </div>

          {/* ================= CATEGORY NAVBAR ================= */}
          <div className="bg-gray-900 text-white">

            {/* DESKTOP MENU */}
            <div className="hidden md:flex justify-center gap-10 py-3">
              <Link to="/">Home</Link>
              <Link to="/veg">Veg</Link>
              <Link to="/nonveg">NonVeg</Link>
              <Link to="/starters">Starters</Link>
              <Link to="/drinks">Drinks</Link>
              <Link to="/desserts">Desserts</Link>
              <Link to="/combos">Combos</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/orders">Orders</Link>
            </div>

            {/* ================= MOBILE MENU ================= */}
            {menuOpen && (
              <div className="md:hidden flex flex-col gap-4 py-4 text-center bg-gray-800">

                {/* ✅ IMPORTANT FIX:
                    Every link closes menu on click
                */}

                <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/veg" onClick={() => setMenuOpen(false)}>Veg</Link>
                <Link to="/nonveg" onClick={() => setMenuOpen(false)}>NonVeg</Link>
                <Link to="/starters" onClick={() => setMenuOpen(false)}>Starters</Link>
                <Link to="/drinks" onClick={() => setMenuOpen(false)}>Drinks</Link>
                <Link to="/desserts" onClick={() => setMenuOpen(false)}>Desserts</Link>
                <Link to="/combos" onClick={() => setMenuOpen(false)}>Combos</Link>
                <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                <Link to="/orders" onClick={() => setMenuOpen(false)}>Orders</Link>

                {user && (
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      handleLogout();
                    }}
                    className="text-red-400"
                  >
                    Logout
                  </button>
                )}

              </div>
            )}
          </div>
        </nav>

        {/* ================= ROUTES ================= */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/veg" element={<Veg search={search} />} />
          <Route path="/nonveg" element={<Nonveg search={search} />} />
          <Route path="/starters" element={<Starters search={search} />} />
          <Route path="/drinks" element={<Drinks search={search} />} />
          <Route path="/desserts" element={<Desserts search={search} />} />
          <Route path="/combos" element={<Thali search={search} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </BrowserRouter>
  );
}

export default App;