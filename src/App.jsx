import React from "react";
import EditProduct from "../src/components/EditProduct";
import Dashboard from '../src/pages/Dashboard'
import Products from '../src/pages/Products'
import AddProd from "./pages/AddProd";
import EditProd from "./pages/EditProd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="flex">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<AddProd />} />
          <Route path="/products/edit/:id" element={<EditProd />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
