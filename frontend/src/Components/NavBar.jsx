

import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="text-white font-poppins" style={{ backgroundColor: "#1F4B43" }} >
      <div className="container mx-auto flex py-6 px-6 justify-center items-center">
        <ul className="flex gap-14">
          
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `cursor-pointer pb-1 ${
                  isActive ? "border-b-2 border-white" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/rent"
              className={({ isActive }) =>
                `cursor-pointer pb-1 ${
                  isActive ? "border-b-2 border-white" : ""
                }`
              }
            >
              Rent
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/buy"
              className={({ isActive }) =>
                `cursor-pointer pb-1 ${
                  isActive ? "border-b-2 border-white" : ""
                }`
              }
            >
              Buy
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sell"
              className={({ isActive }) =>
                `cursor-pointer pb-1 ${
                  isActive ? "border-b-2 border-white" : ""
                }`
              }
            >
              Sell
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


