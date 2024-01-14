import SuccessPage from "./SuccessPage";
import axios from "../../api/axios";
//import useAuth from "../../hooks/useAuth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  //const { setAuth, isLoggedIn, setIsLoggedIn } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/login",
        JSON.stringify({email, password}),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setIsLoggedIn(true);
      const { is_admin } = response?.data;
      if (is_admin) {
        navigate("/products", {state: is_admin});
      } else {
        navigate("/products", {state: is_admin});
      }
    } catch (err) {
      console.log(err);
    }
    setEmail("");
    setPassword("");
  }

  return (
    <div
      className="font-pacifico flex flex-col justify-center pl-8 pb-12 
                     lg:w-full md:w-full max-sm:pl-0 pb-8 w-full"
    >
      {!isLoggedIn ? (
        <>
          <span className="lg:text-4xl md:text-5xl sm:text-4xl w-fit mb-2 flex flex-row">
            Go&nbsp;
            <Typewriter
              options={{
                cursorClassName: "hidden",
                strings: ["Register!", "Login!", "Explore!"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
          <div
            className="w-full flex flex-col lg:text-lg md:flex-row text-base 
                            sm:flex-col "
          >
            <form className="lg: w-4/5 max-md:w-full" onSubmit={handleLogin}>
              <p>E-mail:</p>
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className={`${
                  email !== "" ? `validate` : ""
                } h-14 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-4/5 md:w-4/5 hover:bg-gray-400 focus:bg-gray-400`}
              />
              <p>Password:</p>
              <input
                required
                value={password}
                minLength={7}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className={`${
                  password !== "" ? `validate` : ""
                } h-14 px-2 rounded-lg bg-gray-300 mb-8 w-full lg:w-4/5 md:w-4/5 hover:bg-gray-400 focus:bg-gray-400`}
              />
              <div className="flex  lg:gap-8 flex-row md:flex-row gap-2 max-sm:flex-col ">
                <button
                  type="submit"
                  className="block bg-[#50251f] px-4 rounded-md p-2 mt-4 text-white 
                                  hover:bg-[#331713]"
                >
                  LOGIN
                </button>
                <button
                  type="button"
                  className="block bg-[#50251f] px-4 rounded-md p-2 mt-4 text-white 
                                 hover:bg-[#331713]"
                  onClick={() => navigate("/register")}
                >
                  SIGN-UP
                </button>
              </div>
            </form>
            <div
              className=" flex flex-col items-center border-solid border-2 border-l-[#50251f]
                              lg:h-52 pt-6 md:w-2/5 max-sm:h-auto pt-0 mt-4"
            >
              <p className="text mb-4 font-bold w-4/5 lg:pl-4 max-sm:pl-0">
                Login using e-mail and password
              </p>
            </div>
          </div>
        </>
      ) : (
        <SuccessPage type="Login" />
      )}
    </div>
  );
};

export default Login;
