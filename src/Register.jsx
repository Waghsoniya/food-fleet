import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Register() {

  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const SubmitLogics = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful!");
    reset();
    navigate("/login");
  };

  return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-200 via-white to-green-100 px-4">
      {/* Card */}
      <div className="backdrop-blur-lg bg-white/80 shadow-2xl rounded-3xl p-10 w-full max-w-md border border-white/40">

        {/* Heading */}
        <div className="flex justify-center gap-6 mb-6 text-lg font-semibold">

  <span
    onClick={() => navigate("/login")}
    className="text-gray-500 hover:text-red-500 cursor-pointer"
  >
    Login
  </span>

  <span
    onClick={() => navigate("/register")}
    className="text-red-500 border-b-2 border-red-500 pb-1 cursor-pointer"
  >
    Register
  </span>

</div>
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-red-500 mb-2">
            Create Account
          </h2>
          <p className="text-gray-500 text-sm">
            Join FoodFleet and enjoy delicious meals 🍕
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(SubmitLogics)} className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            {...register("name", { required: true })}
            className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
          />

          <input
            type="password"
            placeholder="Enter Password"
            {...register("password", { required: true })}
            className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
          />

          <input
            type="email"
            placeholder="Enter Email ID"
            {...register("email", { required: true })}
            className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
          />

          <input
            type="number"
            placeholder="Enter Mobile Number"
            {...register("mobile", { required: true })}
            className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold py-3 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition duration-300"
          >
            Register
          </button>

        </form>

      </div>

    </div>
  );
}

export default Register;