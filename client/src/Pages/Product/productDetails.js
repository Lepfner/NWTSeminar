import React from "react";
import "../../Styles/wave.css";
import Dorina from "../../Assets/dorina.png";
import "animate.css";

export default function ProductDetails() {
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
              <h1 className="text-3xl text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Maecenas quis ex eget enim eleifend mollis at a mi. Fusce accumsan massa diam, a luctus mi rhoncus in. 
              Phasellus commodo finibus mi id consequat. Nam leo justo, faucibus et neque ut, bibendum venenatis lacus. 
              Praesent vitae mollis ex. Nunc vitae tellus sed ligula rutrum varius eget cursus enim. Fusce venenatis erat at tellus sollicitudin,
              interdum finibus ex sodales. Sed ac dolor tincidunt, feugiat ante nec, facilisis nunc. In hac habitasse platea dictumst.
              Etiam interdum commodo est. Etiam sem nisl, egestas ac ante dapibus, pharetra sodales libero. Nulla facilisi.</h1>
            </div>
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
