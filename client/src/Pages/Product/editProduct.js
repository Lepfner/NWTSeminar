import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import checkToken from "../../api/checkAuth";

function ProductForm({ isEditing }) {
  const navigate = useNavigate();
  const { productId } = useParams();

  const [productData, setProductData] = useState({
    name: "",
    price: 0,
    description: "",
    logo: "",
    type: "",
    ingredients: "",
    manufacturer: "",
    manufacturerName: "",
  });
  const [manufacturersList, setManufacturersList] = useState([]);

  useEffect(() => {
    const result = checkToken();
    if (!result) {
      navigate("/");
    }
    const fetchProductData = async () => {
      try {
        const response = await axios.get(
          `/chocolate/${window.location.href.slice(34, 65)}`
        );
        setProductData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchManufacturers = async () => {
      try {
        const response = await axios.get("/manufacturers");
        setManufacturersList(response.data);
      } catch (error) {
        console.error("Error fetching manufacturers:", error);
      }
    };

    if (isEditing) {
      fetchProductData();
    }

    fetchManufacturers();
  }, [isEditing, navigate, productId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "manufacturer") {
      const selectedManufacturer = manufacturersList.find(
        (manufacturer) => manufacturer._id === value
      );
      setProductData((prevData) => ({
        ...prevData,
        manufacturer: value,
        manufacturerName: selectedManufacturer ? selectedManufacturer.name : "",
      }));
    } else {
      setProductData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEditing) {
        await axios.put(
          `/chocolates/${window.location.href.slice(34, 65)}`,
          productData
        );
      } else {
        await axios.post("/chocolateCreate", productData);
      }
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="font-pacifico w-full flex flex-col items-center justify-between">
      <Toaster />
      <div className="h-12 w-full bg-[#50251f] mb-8" />
      <div
        className="h-full flex flex-col justify-center max-w-[75%]
                     outline outline-[#50251f] outline-[1rem] rounded-xl z-0
                     w-[100%]"
      >
        <div className="w-full rounded-xl z-10">
          <div className="flex justify-center items-center">
            <form
              className="flex justify-center items-center flex-col lg: w-4/5 max-md:w-full"
              onSubmit={handleSubmit}
            >
              <p className="lg:text-3xl  md: text-2xl sm: text-xl">Name:</p>
              <input
                required
                value={productData.name}
                onChange={handleInputChange}
                type="text"
                name="name"
                placeholder="Name"
                className="h-14 px-2 rounded-lg bg-gray-300 mb-4 w-full lg:w-4/5 md:w-4/5"
              />
              <p className="lg:text-3xl  md: text-2xl sm: text-xl">Price:</p>
              <input
                required
                value={productData.price}
                onChange={handleInputChange}
                type="number"
                name="price"
                placeholder="Type"
                className="h-14 px-2 rounded-lg bg-gray-300 mb-4 w-full lg:w-4/5 md:w-4/5"
              />
              <p className="lg:text-3xl  md: text-2xl sm: text-xl">
                Description:
              </p>
              <input
                required
                value={productData.description}
                onChange={handleInputChange}
                type="text"
                name="description"
                placeholder="Description"
                className="h-14 px-2 rounded-lg bg-gray-300 mb-4 w-full lg:w-4/5 md:w-4/5"
              />
              <p className="lg:text-3xl  md: text-2xl sm: text-xl">
                Image URL:
              </p>
              <input
                required
                value={productData.logo}
                onChange={handleInputChange}
                type="text"
                name="logo"
                placeholder="Image URL"
                className="h-14 px-2 rounded-lg bg-gray-300 mb-4 w-full lg:w-4/5 md:w-4/5"
              />
              <p className="lg:text-3xl  md: text-2xl sm: text-xl">Type:</p>
              <input
                required
                value={productData.type}
                onChange={handleInputChange}
                type="text"
                name="type"
                placeholder="Image URL"
                className="h-14 px-2 rounded-lg bg-gray-300 mb-4 w-full lg:w-4/5 md:w-4/5"
              />
              <p className="lg:text-3xl  md: text-2xl sm: text-xl">
                Ingredients:
              </p>
              <input
                required
                value={productData.ingredients}
                onChange={handleInputChange}
                type="text"
                name="ingredients"
                placeholder="Image URL"
                className="h-14 px-2 rounded-lg bg-gray-300 mb-4 w-full lg:w-4/5 md:w-4/5"
              />
              <p className="lg:text-3xl md:text-2xl sm:text-xl">
                Manufacturer:
              </p>
              <select
                required
                value={productData.manufacturer}
                onChange={handleInputChange}
                name="manufacturer"
                className="h-14 px-2 rounded-lg bg-gray-300 mb-4 w-full lg:w-4/5 md:w-4/5"
              >
                <option value="" disabled>
                  Select a Manufacturer
                </option>
                {manufacturersList.map((manufacturer) => (
                  <option key={manufacturer._id} value={manufacturer._id}>
                    {manufacturer.name}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="block bg-[#50251f] px-4 rounded-md p-2 my-2 text-white 
                                  hover:bg-[#331713]"
              >
                {isEditing ? "Update" : "Create"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function EditProduct() {
  return <ProductForm isEditing />;
}

function NewProduct() {
  return <ProductForm />;
}

export { NewProduct, EditProduct };
