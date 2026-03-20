import { createSlice } from '@reduxjs/toolkit';

const coupons = {
    SAVE10: 10,
    SAVE20: 20,
    WELCOME5: 5,
    FESTIVE25: 25
};

const couponSlice = createSlice({
    name: "coupon",
    initialState: {
        code: "",
        discount: 0,
        applied: false,
        message: ""
    },

    reducers: {
        applyCoupon: (state, action) => {
            const enteredCode = action.payload.toUpperCase();

            if (coupons[enteredCode]) {
                state.code = enteredCode;
                state.discount = coupons[enteredCode];
                state.applied = true;
                state.message = `Coupon ${enteredCode} applied! You got ${coupons[enteredCode]} % off`;
            }
            else {
                state.message = `Invalid coupon code`;

            }
        },

        resetCoupon: (state) => {
            state.code = "";
            state.discount = 0;
            state.applied = false;
            state.message= "";
        }
    }
});

//export the reducer then imported by component
export const {applyCoupon, resetCoupon} = couponSlice.actions;

//export the slice them imported by store
export default couponSlice.reducer;