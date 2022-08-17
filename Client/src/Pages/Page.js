import { Navigate, Route, Routes } from "react-router";
import Product from "./Product/Product";

function Page() {
  return (
    <Routes>
      <Route path="/products/new" element={<Product />} />
      <Route path="/products/:id" element={<Product />} />
    </Routes>
  );
}

export default Page;
