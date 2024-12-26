import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  // const handleMouseEnter = () => setIsHovered(true);
  // const handleMouseLeave = () => setIsHovered(false);

  // Menu for the dropdown
  const menu = (
    <Menu style={{ padding: "0.5rem" }}>
      <Menu.Item key="1" className="navbar-menu-item">
        <NavLink to="/rent" className="menuitem px-0.5 py-1">
          Rent
        </NavLink>
      </Menu.Item>

      <Menu.Item key="2" className="navbar-menu-item ">
        <NavLink to="/buy" className="menuitem px-0.5 py-1">
          Buy
        </NavLink>
      </Menu.Item>

      <Menu.Item key="3" className="navbar-menu-item">
        <NavLink to="/sell" className="menuitem px-0.5 py-1">
          Sell
        </NavLink>
      </Menu.Item>
    </Menu>
  );

  return (
    <nav
      className="text-white font-poppins"
      style={{ backgroundColor: "#25A7E1" }}
    >
      <div className=" px-8 mx-auto flex py-6  justify-between items-center">
        {/* Left side of the navbar (Home, Rent, Buy, Sell) */}
        <div>
          <NavLink
            to="/"
            className="block py-2 px-4 text-white hover:bg-[#25A7E1] hover:text-white opacity-0"
          >
            Home
          </NavLink>
        </div>
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

        {/* Right side Dropdown */}
        <Dropdown overlay={menu} trigger={["click"]}>
          <NavLink
            className="ant-dropdown-link px-4 py-2.5 cursor-pointer rounded-lg bg-white text-[#25A7E1]"
            onClick={(e) => e.preventDefault()}
          >
            Book a Consultation <DownOutlined />
          </NavLink>
        </Dropdown>
      </div>
    </nav>
  );
};

export default Navbar;
