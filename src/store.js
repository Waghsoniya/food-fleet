import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import couponReducer from "./CouponSlice";
import orderReducer from "./OrderSlice";

const store = configureStore ({
    reducer: {
        cart: cartReducer,
        coupon: couponReducer,
        orders: orderReducer
    }
});

export default store;