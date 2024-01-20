import React, {useEffect, useState} from "react";
import "../../Styles/wave.css";
import Dorina from "../../Assets/dorina.png";
import "animate.css";
import axios from '../../api/axios'
import { Link, useParams, useNavigate } from "react-router-dom";
import checkToken from "../../api/checkAuth";

export default function ManufacturerDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [manufacturerData, setManufacturerData] = useState({});

  const handleDelete = async () => {
    try {
      await axios.delete(`/manufacturers/${id}`);
      navigate("/manufacturers")
    } catch (error) {
      console.error('Error deleting manufacturer:', error);
    }
  };

  useEffect(() => {
    const result = checkToken();
    if(!result){
      navigate("/")
    }
    const fetchManufacturerData = async () => {
      try {
        const response = await axios.get(`/manufacturer/${window.location.href.slice(39,65)}`);
        setManufacturerData(response.data);
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
                src={Dorina}
                className="py-12 px-4 duration-500 hover:h-[32rem] hover:w-[24rem] h-96 w-80"
              />
              <div className="flex flex-col items-start">
                <h1 className="text-3xl text-white">
                  {manufacturerData.name}
                </h1>
                <h1 className="text-3xl text-white">
                  {manufacturerData.city}
                </h1>
                <h1 className="text-3xl text-white">
                  {manufacturerData.description}
                </h1>
                <h1 className="text-3xl text-white">
                  Founded: {manufacturerData.year}
                </h1>
                <div>
                  <Link to={`/editManufacturer/${id}`}>
                    <button className="border border-solid border-white py-2 px-4 rounded-xl text-white duration-500 hover:text-black hover:bg-white mt-10 mr-4">Edit</button>
                  </Link>
                  <button onClick={handleDelete} className="border border-solid border-white py-2 px-4 rounded-xl text-white duration-500 hover:text-black hover:bg-white mt-10">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#50251f"
          fillOpacity="1"
          d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,186.7C672,192,768,224,864,202.7C960,181,1056,107,1152,90.7C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-[#50251f] h-screen mt-[-10px]"></div>
    </div>
  );
}
