import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import "../../Styles/wave.css";
import "animate.css";
import { Link, useNavigate } from "react-router-dom";
import checkToken from "../../api/checkAuth";
import Background from "../../Components/Background";

export default function Products() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const result = checkToken();
    if (!result) {
      navigate("/");
    }
    axios
      .get("/chocolates")
      .then((response) => {
        const sortedItems = response.data.sort((a, b) => {
          return a.manufacturerName.localeCompare(b.manufacturerName);
        });
        setItems(sortedItems);
      })
      .catch((error) => {
        console.error("GET Error:", error);
      });
  }, [navigate]);

  return (
    <div className="font-pacifico w-full h-full flex flex-col justify-center relative">
      <div className="flex justify-center">
        <div className="w-[90%] absolute top-0 grid grid-cols-3 justify-items-center mt-24">
          {items.map((item, index) => (
            <Link key={item._id} to={`/product/${item._id}`}>
              <div
                className={`m-2 animate__animated animate__fadeInDown animate__delay-${
                  index + 1
                }s`}
              >
                <img
                  alt=""
                  src={item.logo}
                  className="bg-gray-200 py-12 px-4 opacity-90
          hover:opacity-100 duration-500 hover:h-[32rem] hover:w-[24rem] rounded-xl h-96 w-80"
                />
                <h1 className="pl-2 text-3xl text-white">{item.name}</h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Background/>
      <div className="bg-[#50251f] h-screen mt-[-10px]"></div>
    </div>
  );
}
