import React, { useEffect, useState } from "react";
import "../../Styles/wave.css";
import "animate.css";
import axios from "../../api/axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import checkToken from "../../api/checkAuth";
import Background from "../../Components/Background";

export default function ManufacturerDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [manufacturerData, setManufacturerData] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);

  const handleDelete = async () => {
    try {
      await axios.delete(`/manufacturers/${id}`);
      navigate("/manufacturers");
    } catch (error) {
      console.error("Error deleting manufacturer:", error);
    }
  };

  useEffect(() => {
    const result = checkToken();
    if (!result) {
      navigate("/");
    }
    const fetchManufacturerData = async () => {
      try {
        const response = await axios.get(
          `/manufacturer/${window.location.href.slice(35, 65)}`
        );
        setManufacturerData(response.data);
        const response2 = await axios.get(
          `/user/${localStorage.getItem("current")}`
        );
        setIsAdmin(response2.data.is_admin);
      } catch (error) {
        console.log(error);
      }
    };
    fetchManufacturerData();
  }, [navigate]);

  return (
    <div className="font-pacifico w-full h-full flex flex-col justify-center relative">
      <div className="flex justify-center">
        <div className="w-[90%] absolute top-0 flex flex-row justify-evenly mt-64">
          <div className="w-full animate__animated animate__fadeInDown animate__delay-1s">
            <div className="w-full rounded-xl opacity-90 hover:opacity-100 mt-20 flex flex-row align-center">
              <img
                alt=""
                src={manufacturerData.logo}
                className="py-12 px-4 duration-500 hover:h-[32rem] hover:w-[24rem] h-96 w-80"
              />
              <div className="flex flex-col items-start">
                <h1 className="text-3xl text-white">{manufacturerData.name}</h1>
                <h1 className="text-3xl text-white">{manufacturerData.city}</h1>
                <h1 className="text-3xl text-white">
                  {manufacturerData.description}
                </h1>
                <h1 className="text-3xl text-white">
                  Founded: {manufacturerData.year}
                </h1>
                {isAdmin && (
                  <div>
                    <Link to={`/editManufacturer/${id}`}>
                      <button className="border border-solid border-white py-2 px-4 rounded-xl text-white duration-500 hover:text-black hover:bg-white mt-10 mr-4">
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={handleDelete}
                      className="border border-solid border-white py-2 px-4 rounded-xl text-white duration-500 hover:text-black hover:bg-white mt-10"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Background />
      <div className="bg-[#50251f] h-screen mt-[-10px]"></div>
    </div>
  );
}
