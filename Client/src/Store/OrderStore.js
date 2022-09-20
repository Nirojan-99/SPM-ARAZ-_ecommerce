import { createSlice } from "@reduxjs/toolkit";

const initial = {
  products: JSON.parse(localStorage.getItem("products")),
  total: localStorage.getItem("total"),
  address: JSON.parse(localStorage.getItem("address")),
};

const OrderStore = createSlice({
  name: "order",
  initialState: initial,
  reducers: {
    addProducts(state, action) {
      localStorage.setItem("products", JSON.stringify(action.payload.products));
      localStorage.setItem("total", action.payload.total);
    },
    addAddress(state, action) {
      localStorage.setItem("address", JSON.stringify(action.payload.address));
    },
  },
});

export default OrderStore;
export const { addProducts, addAddress } = OrderStore.actions;
