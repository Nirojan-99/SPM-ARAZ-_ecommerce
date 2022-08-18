import { Navigate, Route, Routes } from "react-router";
import Favorite_Product from "./Favorite_Products/Favorite_Product";
import Favorite_Products from "./Favorite_Products/Favorite_Products";

//pages
import Dashboard from "./Dashboard/Dashboard";
import Offer from "./Offer_Manage/Offer";
import CustomerProduct from "./Product_Detail_Seller/Product";
import AdminProduct from "./Product_Manage/Product";
import Store from "./Store/Store";
import Stores from "./Stores/Stores";
import RegisterStore from "./Store_Register/RegisterStore";

function Page() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/stores/new" element={<RegisterStore />} />
      <Route path="/stores" element={<Stores />} />
      <Route path="/store" element={<Store />} />
      <Route path="/products/view/:id" element={<CustomerProduct />} />
      <Route path="/products/new" element={<AdminProduct />} />
      <Route path="/products/:id/offers" element={<Offer />} />
      <Route path="/products/:id" element={<AdminProduct />} />

      <Route path="/Favorites" element={<Favorite_Products />} />
    </Routes>
  );
}

export default Page;
