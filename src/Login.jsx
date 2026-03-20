import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Login() {

  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const loginLogics = (loginData) => {

    const registeredUsers = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = registeredUsers.find(
      (user) =>
        user.email === loginData.email &&
        user.password === loginData.password
    );

    if (validUser) {
      localStorage.setItem("loggedUser", JSON.stringify(validUser));
      alert("Login Successful!");
      navigate("/veg");
      window.location.reload();  // refresh the navbar
    } else {
      alert("Invalid Email or Password");
    }

    reset();
  };

  return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-200 via-white to-green-100 px-4">
      {/* Card */}
      <div className="backdrop-blur-lg bg-white/80 shadow-2xl rounded-3xl p-10 w-full max-w-md border border-white/40">

        {/* Title */}
        <div className="flex justify-center gap-6 mb-6 text-lg font-semibold">

  <span
    onClick={() => navigate("/login")}
    className="text-red-500 border-b-2 border-red-500 pb-1 cursor-pointer"
  >
    Login
  </span>

  <span
    onClick={() => navigate("/register")}
    className="text-gray-500 hover:text-red-500 cursor-pointer"
  >
    Register
  </span>

</div>
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-red-500 mb-2">
            Welcome Back
          </h2>
          <p className="text-gray-500 text-sm">
            Login to continue ordering delicious food 🍔
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(loginLogics)} className="space-y-5">

          {/* Email */}
          <input
            type="email"
            placeholder="Enter Email ID"
            {...register("email", { required: true })}
            className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Enter Password"
            {...register("password", { required: true })}
            className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition"
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold py-3 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition duration-300"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;