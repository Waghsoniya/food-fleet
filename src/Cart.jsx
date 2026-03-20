import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart, decrementQuantity, incrementQuantity } from "./CartSlice";
import { applyCoupon, resetCoupon } from "./CouponSlice";
import { toast } from "react-toastify";
import { QRCode } from "react-qr-code";
import emailjs from "@emailjs/browser";
import { addOrder } from "./OrderSlice";

function Cart() {
  const [timeLeft, setTimeLeft] = useState(300);
  const [timerStarted, setTimerStarted] = useState(false);
  const [inputCode, setInputCode] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [offerDiscount, setOfferDiscount] = useState(0);

  const cartItems = useSelector((state) => state.cart);
  const coupon = useSelector((state) => state.coupon);
  const dispatch = useDispatch();

  /* ---------------- TOTALS ---------------- */

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const couponAmount = (totalAmount * coupon.discount) / 100;
  const offerAmount = (totalAmount * offerDiscount) / 100;

  const amountAfterDiscounts = totalAmount - couponAmount - offerAmount;
  const gst = amountAfterDiscounts * 0.18;
  const finalAmount = amountAfterDiscounts + gst;

  /* ---------------- TIMER ---------------- */

  useEffect(() => {
    if (cartItems.length > 0 && !timerStarted) {
      setTimerStarted(true);

      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            dispatch(clearCart());
            dispatch(resetCoupon());
            alert("Timer expired. Cart cleared.");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }

    if (cartItems.length === 0) {
      setTimerStarted(false);
      setTimeLeft(300);
      setShowQR(false);
    }
  }, [cartItems.length]);

  /* ---------------- ORDER ID ---------------- */

  const generateOrderId = () => {
    const random = Math.floor(1000 + Math.random() * 9000);
    return `ORDER_${Date.now()}_${random}`;
  };

  /* ---------------- PAYMENT ---------------- */

  const handlePaymentDone = () => {
    if (!customerEmail) {
      alert("Enter email first");
      return;
    }

    const templateParams = {
      order_id: generateOrderId(),
      orders: cartItems.map((item) => ({
        name: item.name,
        price: item.price.toFixed(2),
        units: item.quantity,
      })),
      total: finalAmount.toFixed(2),
      email: customerEmail,
    };

    const purchaseDetails = {
      date: new Date().toLocaleDateString(),
      items: [...cartItems],
      totalPrice: finalAmount,
    };

    emailjs
      .send("soni_wagh", "template_eyj0b1q", templateParams, "xzxQj7Njf5LdlIOav")
      .then(() => {
        alert("Order Confirmed! Email sent successfully.");
      })
      .catch(() => {
        alert("Email sending failed");
      });

    dispatch(addOrder(purchaseDetails));
    dispatch(clearCart());
    dispatch(resetCoupon());
    setOfferDiscount(0);
  };

  /* ---------------- LIST ---------------- */

  const listItems = cartItems.map((item, index) => (
    <li
      key={item.name}
      className="flex justify-between items-center bg-gray-100 px-4 py-3 gap-4 rounded-xl shadow-sm"
    >
      <div className="flex flex-col text-black flex-1">
        <span className="font-semibold">{item.name}</span>
        {/* <span className="text-sm">Qty: {item.quantity}</span> */}
        <span className="text-sm">₹ {item.price}</span>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2">
        <button 
          onClick={() => dispatch(decrementQuantity(item))}
          className="bg-gray-400 font-semibold px-3 py-1 rounded-lg text-black"
        >
          -
        </button>

        <span className="font-bold text-black">{item.quantity }</span>

        <button 
          onClick={() => dispatch(incrementQuantity(item))}
          className="bg-gray-400 text-black font-semibold px-3 py-1 rounded-lg"
        >
            +
        </button>
      </div>

      <button
        onClick={() => {
          dispatch(removeFromCart(item));
          toast.error(`${item.name} removed`);
          if (cartItems.length === 1) dispatch(resetCoupon());
        }}
        className="bg-red-500 text-white px-3 py-1 rounded-lg"
      >
        Remove
      </button>
    </li>
  ));

  /* ---------------- UI ---------------- */

  return (
  <div className="max-w-6xl mx-auto mt-10 px-4">

    {/* TIMER */}
    {timerStarted && timeLeft > 0 && (
      <h3 className="text-center text-red-600 font-bold mb-5">
        Time Left: {Math.floor(timeLeft / 60)}:
        {(timeLeft % 60).toString().padStart(2, "0")}
      </h3>
    )}

    {cartItems.length === 0 ? (
      <h2 className="text-center text-black text-xl font-semibold">
        Cart is Empty 🛒
      </h2>
    ) : (

      <div className="grid md:grid-cols-2 gap-8">

        {/* LEFT SIDE → CART ITEMS */}
        <div>
          <h2 className="text-xl font-bold mb-4">Your Cart</h2>

          <ol className="space-y-4 p-6 bg-white rounded-2xl shadow-lg">
            {listItems}
          </ol>
        </div>


        {/* RIGHT SIDE → BILL */}
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto">

  <h2 className="text-xl font-bold mb-5 border-b pb-2">
    Bill Details
  </h2>

  {/* TOTAL */}
  <div className="flex justify-between text-gray-700 mb-2">
    <span>Total</span>
    <span>₹ {totalAmount.toFixed(2)}</span>
  </div>

  {/* OFFER */}
  {offerDiscount > 0 && (
    <div className="flex justify-between text-green-600 mb-2">
      <span>Offer Discount</span>
      <span>- ₹ {offerAmount.toFixed(2)}</span>
    </div>
  )}

  {/* COUPON */}
  {coupon.discount > 0 && (
    <div className="flex justify-between text-green-600 mb-2">
      <span>Coupon Discount</span>
      <span>- ₹ {couponAmount.toFixed(2)}</span>
    </div>
  )}

  {/* GST */}
  <div className="flex justify-between text-gray-700 mb-3">
    <span>GST (18%)</span>
    <span>₹ {gst.toFixed(2)}</span>
  </div>

  <hr className="my-3"/>

  {/* FINAL */}
  <div className="flex justify-between text-lg font-bold text-green-700 mb-4">
    <span>Final Amount</span>
    <span>₹ {finalAmount.toFixed(2)}</span>
  </div>


  {/* COUPON INPUT */}
  <div className="flex gap-2 mb-3">
    <input
      type="text"
      placeholder="Coupon Code"
      value={inputCode}
      onChange={(e) => setInputCode(e.target.value)}
      className="border border-gray-300 px-3 py-2 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <button
      onClick={() => {
        dispatch(applyCoupon(inputCode));
        setInputCode("");
      }}
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
    >
      Apply
    </button>
  </div>


  {/* EMAIL */}
  <input
    type="email"
    placeholder="Enter your email"
    value={customerEmail}
    onChange={(e) => setCustomerEmail(e.target.value)}
    className="border border-gray-300 px-3 py-2 rounded-lg w-full mb-3 focus:outline-none focus:ring-2 focus:ring-green-400"
  />


  {/* PAY BUTTON */}
  <button
    onClick={() => setShowQR(true)}
    className="bg-green-600 hover:bg-green-700 text-white font-semibold w-full py-2 rounded-xl transition"
  >
    Checkout & Pay
  </button>


  {/* QR */}
  {showQR && (
    <div className="text-center mt-5 p-4 border rounded-xl bg-gray-50 flex flex-col items-center">
      <h4 className="font-semibold mb-3">
        Scan to Pay ₹ {finalAmount.toFixed(2)}
      </h4>

      <QRCode
        value={`upi://pay?pa=waghsoniya1-1@oksbi&pn=SoniyaWagh&am=${finalAmount.toFixed(2)}&cu=INR`}
        size={150}
      />

      <button
        onClick={handlePaymentDone}
        className="mt-4 bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-xl"
      >
        Payment Done
      </button>
    </div>
  )}


  {/* CLEAR CART */}
  <button
    onClick={() => {
      dispatch(clearCart());
      dispatch(resetCoupon());
      setOfferDiscount(0);
    }}
    className="mt-4 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white w-full py-2 rounded-xl transition"
  >
    Clear Cart
  </button>

</div>

      </div>
    )}
  </div>
);
}

export default Cart;