import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {

    addToCart: (state, action) => {
      let existingItem = state.find(item => item.name === action.payload.name);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        let finalObject = { ...action.payload, quantity: 1 };
        state.push(finalObject);
      }
    },

    incrementQuantity: (state, action) => {
      const item = state.find(i => i.name === action.payload.name);
      if (item) {
        item.quantity += 1;
      }
    },

    decrementQuantity: (state, action) => {
      const item = state.find(i => i.name === action.payload.name);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    removeFromCart: (state, action) => {
      return state.filter(item => item.name !== action.payload.name);
    },

    clearCart: () => {
      return [];
    }

  }
});

// export reducers
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart
} = cartSlice.actions;

// export slice
export default cartSlice.reducer;