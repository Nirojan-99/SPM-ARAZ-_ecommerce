import { Navigate, Route, Routes } from "react-router";

//pages
import CustomerProduct from "./Product_Detail/Product";
import AdminProduct from "./Product_Manage/Product";
import Store from "./Store/Store";
import Stores from "./Stores/Stores";

function Page() {
  return (
    <Routes>
      <Route path="/stores" element={<Stores />} />
      <Route path="/store" element={<Store />} />
      <Route path="/products/view/:id" element={<CustomerProduct />} />
      <Route path="/products/new" element={<AdminProduct />} />
      <Route path="/products/:id" element={<AdminProduct />} />
    </Routes>
  );
}

export default Page;
