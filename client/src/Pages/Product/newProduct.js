import React, {useState, useEffect} from "react";
import axios from "../../api/axios";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import checkToken from "../../api/checkAuth";

function NewProduct() {

  const navigate = useNavigate();

  const [productData, setProductData] = useState({
    name: '',
    price: 0,
    description: '',
    logo: '',
    type: '',
    ingredients: '',
    manufacturer: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    const result = checkToken();
    if(!result){
      navigate("/")
    }
  })

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/chocolateCreate', productData);
      navigate("/manufacturers");
    } catch (error) {
      console.log(error)
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
              <p className="lg:text-3xl  md: text-2xl sm: text-xl">
                Type:
              </p>
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
              <p className="lg:text-3xl  md: text-2xl sm: text-xl">
                Manufacturer:
              </p>
              <input
                required
                value={productData.manufacturer}
                onChange={handleInputChange}
                type="text"
                name="manufacturer"
                placeholder="Image URL"
                className="h-14 px-2 rounded-lg bg-gray-300 mb-4 w-full lg:w-4/5 md:w-4/5"
              />
              <button
                type="submit"
                className="block bg-[#50251f] px-4 rounded-md p-2 my-2 text-white 
                                  hover:bg-[#331713]"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NewProduct;
