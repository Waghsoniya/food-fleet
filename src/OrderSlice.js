import { createSlice } from '@reduxjs/toolkit';
import React from 'react';

    let orderSlice = createSlice({
        name: "orders",
        initialState: [],
        reducers: {
            addOrder: (state, action) => {
                state.push(action.payload);
            },
        },
    });
  


export const { addOrder } = orderSlice.actions;

export default orderSlice.reducer;