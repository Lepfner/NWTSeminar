import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import MainLayout from "./Layouts/mainLayout";
import Products from "./Pages/Product/products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
