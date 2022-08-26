import { Navigate, Route, Routes } from "react-router";
import Favorite_Product from "./Favorite_Products/Favorite_Product";
import Favorite_Products from "./Favorite_Products/Favorite_Products";

//pages
import Dashboard from "./Dashboard/Dashboard";
import Offer from "./Offer_Manage/Offer";
import SellerProduct from "./Product_Detail_Seller/Product";
import AdminProduct from "./Product_Manage/Product";
import Store from "./Store/Store";
import Stores from "./Stores/Stores";
import RegisterStore from "./Store_Register/RegisterStore";
import CustomerProduct from "./Product_Detail_Customer/ProductDetails";
import Profile from "./Profile/Profile";
import SignUp from "./Signup/Signup";
import Login from "./Login/Login";
import Cart from "./Cart/Cart";


import { Checkbox } from "@mui/material";
import Checkout from "./Checkout/Checkout";

function Page() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/stores/new" element={<RegisterStore />} />
      <Route path="/stores" element={<Stores />} />
      <Route path="/store" element={<Store />} />
      {true && (
        <Route path="/products/view/:id" element={<CustomerProduct />} />
      )}
      <Route path="/products/view/:id" element={<SellerProduct />} />
      <Route path="/products/new" element={<AdminProduct />} />
      <Route path="/products/:id/offers" element={<Offer />} />
      <Route path="/products/:id" element={<AdminProduct />} />

      {/* lavaniyah */}
      <Route path="/cart" element={<Cart />} />

      <Route path="/Favorites" element={<Favorite_Products />} />

      <Route path="/profile/:page" element={<Profile />} />
      <Route path="/shipping" element={<Checkout />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Page;
