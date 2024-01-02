import React, { useState } from "react";
import Logo from "../Assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCookie,
  faRightFromBracket,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'

export default function Header() {
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <div className="font-pacifico w-full flex justify-center text-amber-800">
      <div className="w-[90%] flex flex-row flex flex-row justify-between items-center border-b border-gray-200 py-4">
        <div className="flex">
          <img src={Logo} alt="" className="w-12" />
        </div>
        <div className="flex flex-row gap-4">
          <Link to="/">
            <div>Products</div>
          </Link>
          <Link to="/manufacturers">
            <div>Manufacturers</div>
          </Link>
        </div>
        <div className="flex flex-row gap-6">
          {isAdmin && <FontAwesomeIcon icon={faCookie} size="2x" />}
          {isAdmin && <FontAwesomeIcon icon={faLayerGroup} size="2x" />}
          <FontAwesomeIcon icon={faRightFromBracket} size="2x" />
        </div>
      </div>
    </div>
  );
}
