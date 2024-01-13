import React from "react";
import "../../Styles/wave.css";
import Dorina from "../../Assets/dorina.png";
import "animate.css";

export default function Manufacturers() {

  return (
    <div className="font-pacifico w-full h-full flex flex-col justify-center relative">
      <div className="flex justify-center">
        <div className="w-[90%] absolute top-0 grid grid-cols-3 justify-items-center mt-24">
          <div className="animate__animated animate__fadeInDown animate__delay-1s">
            <img
              alt=""
              src={Dorina}
              className="bg-gray-200 py-12 px-4 opacity-90
          hover:opacity-100 duration-500 hover:h-[32rem] hover:w-[24rem] rounded-xl h-96 w-80"
            />
            <h1 className="pl-2 text-3xl text-white">Dorina</h1>
          </div>
          <div className="animate__animated animate__fadeInDown animate__delay-2s">
            <img
              alt=""
              src={Dorina}
              className="bg-gray-200 py-12 px-4 opacity-90
          hover:opacity-100 duration-500 hover:h-[32rem] hover:w-[24rem] rounded-xl h-96 w-80"
            />
            <h1 className="pl-2 text-3xl text-white">Dorina</h1>
          </div>
          <div className="animate__animated animate__fadeInDown animate__delay-3s">
            <img
              alt=""
              src={Dorina}
              className="bg-gray-200 py-12 px-4 opacity-90
          hover:opacity-100 duration-500 hover:h-[32rem] hover:w-[24rem] rounded-xl h-96 w-80"
            />
            <h1 className="pl-2 text-3xl text-white">Dorina</h1>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#50251f"
          fill-opacity="1"
          d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,186.7C672,192,768,224,864,202.7C960,181,1056,107,1152,90.7C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-[#50251f] h-screen mt-[-10px]"></div>
    </div>
  );
}
