import React, {useEffect, useState} from "react";
import "../../Styles/wave.css";
import "animate.css";
import axios from '../../api/axios'
import { Link, useParams, useNavigate } from "react-router-dom";
import checkToken from "../../api/checkAuth";
import Background from "../../Components/Background";

export default function ProductDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [productData, setProductData] = useState({});
  const [manufacturer, setManufacturer] = useState("")

  useEffect(() => {
    const result = checkToken();
    if(!result){
      navigate("/")
    }
    const fetchProductData = async () => {
      try{
        const response = await axios.get(`/chocolate/${window.location.href.slice(30,65)}`);
        const secondResponse = await axios.get(`/manufacturer/${response.data.manufacturer}`);
        setManufacturer(secondResponse.data.name)
        setProductData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProductData()
  }, [navigate])

  const handleDelete = async () => {
    try {
      await axios.delete(`/chocolates/${id}`);
      navigate("/products")
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="font-pacifico w-full h-full flex flex-col justify-center relative">
      <div className="flex justify-center">
        <div className="w-[90%] absolute top-0 flex flex-row justify-evenly mt-64">
          <div className="w-full animate__animated animate__fadeInDown animate__delay-1s">
            <div className="w-full rounded-xl opacity-90 hover:opacity-100 mt-20 flex flex-row align-center">
              <img
                alt=""
                src={productData.logo}
                className="py-12 px-4 duration-500 hover:h-[32rem] hover:w-[24rem] h-96 w-80"
              />
              <div className="flex flex-col items-start">
              <h1 className="text-3xl text-white">
                  {productData.name}
                </h1>
                <h1 className="text-3xl text-white">
                  {productData.price}
                </h1>
                <h1 className="text-3xl text-white">
                  {productData.description}
                </h1>
                <h1 className="text-3xl text-white">
                  {productData.type}
                </h1>
                <h1 className="text-3xl text-white">
                  Ingredients: {productData.ingredients}
                </h1>
                <h1 className="text-3xl text-white">
                  {manufacturer}
                </h1>
                <div>
                <Link to={`/editProduct/${id}`}>
                    <button className="border border-solid border-white py-2 px-4 rounded-xl text-white duration-500 hover:text-black hover:bg-white mt-10 mr-4">Edit</button>
                </Link>
                  <button onClick={handleDelete} className="border border-solid border-white py-2 px-4 rounded-xl text-white duration-500 hover:text-black hover:bg-white mt-10">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Background/>
      <div className="bg-[#50251f] h-screen mt-[-10px]"></div>
    </div>
  );
}
