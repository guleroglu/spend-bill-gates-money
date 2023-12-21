import { createSlice } from "@reduxjs/toolkit";
import products from "../../data/products";

const initialState = {
  money: 100000000000,
  items: products,
  basket: [],
  total: 0,
};

export const moneySlice = createSlice({
  name: "money",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      const { itemId, quantity } = action.payload;
      const selectedItem = state.items.find((item) => item.id === itemId);

      if (selectedItem) {
        const existingItem = state.basket.find((item) => item.id === itemId);

        if (existingItem) {
          existingItem.quantity += quantity;
        } else {
          state.basket.push({ ...selectedItem, quantity });
        }

        const totalPrice = state.basket.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );

        state.total = totalPrice;
        state.money -= totalPrice;
      }
    },
    sellBasket: (state, action) => {
      const { itemId, quantity } = action.payload;
      const selectedItem = state.items.find((item) => item.id === itemId);

      if (selectedItem) {
        const existingItem = state.basket.find((item) => item.id === itemId);

        if (existingItem) {
          if (existingItem.quantity >= quantity) {
            existingItem.quantity -= quantity;

            const totalPrice = state.basket.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            );
            state.total = totalPrice;
            state.money += selectedItem.price * quantity;
          } else {
            alert("Sepette yeterli ürün bulunmuyor.");
          }
        } else {
          alert("Sepette bu ürün bulunmuyor.");
        }
      }
    },
  },
});

export const { addBasket, sellBasket } = moneySlice.actions;
export default moneySlice.reducer;
