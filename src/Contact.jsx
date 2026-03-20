import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message submitted:", formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 text-lg">
          We'd love to hear from you!
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Contact Info */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-4">
            Have questions or feedback? Contact us and we will get back to you.
          </p>
          <div className="text-gray-700 space-y-3">
            <p>📍 Address: 123 FoodFleet Street, Nagpur</p>
            <p>📞 Phone: +91 98765 43210</p>
            <p>✉ Email: support@foodfleet.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-md"
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Send a Message
          </h2>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
            required
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;