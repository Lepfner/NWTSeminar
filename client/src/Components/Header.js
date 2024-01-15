import React from "react";
import Logo from "../Assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCookie,
  faRightFromBracket,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/")
  };

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
            {location.state && <FontAwesomeIcon icon={faCookie} size="2x" />}
          </Link>
          <Link to="/newManufacturer">
            {location.state && <FontAwesomeIcon icon={faLayerGroup} size="2x" />}
          </Link>
          <FontAwesomeIcon onClick={handleLogout} icon={faRightFromBracket} size="2x" />
        </div>
      </div>
    </div>
  );
}
