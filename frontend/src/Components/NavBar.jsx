import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";

const Navbar = () => {
  // Menu for the dropdown
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <NavLink
          to="/rent"
          className="block py-2 px-4 text-black hover:bg-[#25A7E1] rounded-lg hover:text-white"
        >
          Rent
        </NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink
          to="/buy"
          className="block py-2 px-4 text-black hover:bg-[#25A7E1] rounded-lg hover:text-white"
        >
          Buy
        </NavLink>
      </Menu.Item>
      <Menu.Item key="3">
        <NavLink
          to="/sell"
          className="block py-2 px-4 text-black hover:bg-[#25A7E1] rounded-lg hover:text-white"
        >
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
            Consultation Button <DownOutlined />
          </NavLink>
        </Dropdown>
      </div>
    </nav>
  );
};

export default Navbar;
