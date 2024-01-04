import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import MainLayout from "./Layouts/mainLayout";
import Products from "./Pages/Product/products";
import Manufacturers from "./Pages/Manufacturer/manufacturers";
import ProductDetails from "./Pages/Product/productDetails";
import AuthLayout from "./Layouts/authLayout";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/products" element={<Products />} />
          <Route path="/manufacturers" element={<Manufacturers />} />
          <Route path="/product/:id" element={<ProductDetails/>} />
        </Route>
        <Route element={<AuthLayout/>}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
