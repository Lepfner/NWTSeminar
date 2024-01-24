import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import MainLayout from "./Layouts/mainLayout";
import Products from "./Pages/Product/products";
import Manufacturers from "./Pages/Manufacturer/manufacturers";
import ProductDetails from "./Pages/Product/productDetails";
import AuthLayout from "./Layouts/authLayout";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import ManufacturerDetails from "./Pages/Manufacturer/manufacturerDetails";
import NewProduct from "./Pages/Product/newProduct";
import NewManufacturer from "./Pages/Manufacturer/newManufacturer";
import { EditManufacturer } from "./Pages/Manufacturer/editManufacturer";
import { EditProduct } from "./Pages/Product/editProduct";
import { useEffect, useState } from "react";
import axios from "./api/axios";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchRoles = async () => {
      const response = await axios.get(
        `/user/${localStorage.getItem("current")}`
      );
      setIsAdmin(response.data.is_admin);
    };
    fetchRoles();
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/products" element={<Products />} />
          <Route path="/manufacturers" element={<Manufacturers />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/manufacturer/:id" element={<ManufacturerDetails />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        {isAdmin && (
          <>
            <Route path="/newProduct" element={<NewProduct />} />
            <Route path="/newManufacturer" element={<NewManufacturer />} />
            <Route path="/editProduct/:id" element={<EditProduct />} />
            <Route
              path="/editManufacturer/:id"
              element={<EditManufacturer />}
            />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
