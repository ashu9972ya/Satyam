import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart")) ?? [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
        const newItem = action.payload;
        const existingItem = state.find((item) => item.id === newItem.id);
  
        if (existingItem) {
          existingItem.quantity += 1; // Increment quantity if the product is already in the cart
        } else {
            const timestampObject = {
                seconds: newItem.time.seconds,
                nanoseconds: newItem.time.nanoseconds,
              };
          state.push({ ...newItem, quantity: 1, time: timestampObject }); // Add the product to the cart with quantity 1
        }
      },
    deleteFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
    resetCart : (state)=>{
        return [];
    },
    incrementQuantity(state, action) {
      const itemToIncrement = state.find(
        (item) => item.id === action.payload.id
      );
      if (itemToIncrement) {
        itemToIncrement.quantity += 1;
      }
    },
    decrementQuantity(state, action) {
      const itemToDecrement = state.find(
        (item) => item.id === action.payload.id
      );
      if (itemToDecrement && itemToDecrement.quantity > 1) {
        itemToDecrement.quantity -= 1;
      }
    },
  },
});

export const { addToCart, deleteFromCart, incrementQuantity, decrementQuantity, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
