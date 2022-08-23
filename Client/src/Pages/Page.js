import { Navigate, Route, Routes } from "react-router";
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

      <Route path="/Favorites" element={<Favorite_Products />} />

      <Route path="/profile/:page" element={<Profile />} />
    </Routes>
  );
}

export default Page;
