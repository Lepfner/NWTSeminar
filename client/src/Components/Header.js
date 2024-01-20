import React, {useEffect, useState} from "react";
import Logo from "../Assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCookie,
  faRightFromBracket,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from 'react-router-dom';
import axios from "../api/axios";

export default function Header() {
  const navigate = useNavigate();
  const [is_admin, setIsAdmin] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/")
  };

  useEffect(() => {
    const fetchUserInformation = async () => {
      if (localStorage.getItem('token')) {
        try {
          const response = await axios.get(`/user/${localStorage.getItem('current')}`);
          setIsAdmin(response.data.is_admin);
        } catch (error) {
          console.error('Error fetching user information:', error);
        }
      }
    };

    fetchUserInformation();
  }, []);

  return (
    <div className="font-pacifico w-full flex justify-center text-amber-800">
      <div className="w-[90%] flex flex-row justify-between items-center border-b border-gray-200 py-4">
        <div className="flex flex-1">
          <Link to="/products">
            <img src={Logo} alt="" className="w-12" />
          </Link>
        </div>
        <div className="flex flex-row gap-4">
          <Link to="/products">
            <div>Products</div>
          </Link>
          <Link to="/manufacturers">
            <div>Manufacturers</div>
          </Link>
        </div>
        <div className="flex-1 flex flex-row gap-6 justify-end">
          <Link to="/newProduct">
            {is_admin && <FontAwesomeIcon icon={faCookie} size="2x" />}
          </Link>
          <Link to="/newManufacturer">
            {is_admin && <FontAwesomeIcon icon={faLayerGroup} size="2x" />}
          </Link>
          <FontAwesomeIcon className="cursor-pointer" onClick={handleLogout} icon={faRightFromBracket} size="2x" />
        </div>
      </div>
    </div>
  );
}
