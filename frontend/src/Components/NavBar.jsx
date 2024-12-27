import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, Menu } from "antd";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
    <nav className="bg-[#25A7E1] text-white font-poppins">
      <div className="px-4 md:px-8 mx-auto">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Home */}
          <NavLink to="/" className="text-xl font-bold opacity-0">
            Home
          </NavLink>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 focus:outline-none"
          >
            <MenuOutlined className="text-2xl" />
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-10 lg:gap-16 items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `pb-1 ${isActive ? "border-b-2 border-white" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/rent"
                className={({ isActive }) =>
                  `pb-1 ${isActive ? "border-b-2 border-white" : ""}`
                }
              >
                Rent
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/buy"
                className={({ isActive }) =>
                  `pb-1 ${isActive ? "border-b-2 border-white" : ""}`
                }
              >
                Buy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sell"
                className={({ isActive }) =>
                  `pb-1 ${isActive ? "border-b-2 border-white" : ""}`
                }
              >
                Sell
              </NavLink>
            </li>
          </ul>
          {/* Desktop Consultation Button */}
          <Dropdown
            overlay={menu}
            trigger={["click"]}
            className="hidden md:flex gap-x-2 items-center"
          >
            <button className="px-4 py-2 bg-white text-[#25A7E1] rounded-lg">
              Book a Consultation <DownOutlined />
            </button>
          </Dropdown>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden pb-4 transition-all duration-300`}
        >
          <ul className="space-y-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-2 rounded-lg ${isActive ? "bg-[#1E86B4]" : ""}`
                }
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/rent"
                className={({ isActive }) =>
                  `block py-2 px-2 rounded-lg ${isActive ? "bg-[#1E86B4]" : ""}`
                }
                onClick={toggleMenu}
              >
                Rent
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/buy"
                className={({ isActive }) =>
                  `block py-2 px-2 rounded-lg ${isActive ? "bg-[#1E86B4]" : ""}`
                }
                onClick={toggleMenu}
              >
                Buy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sell"
                className={({ isActive }) =>
                  `block py-2 px-2 rounded-lg ${isActive ? "bg-[#1E86B4]" : ""}`
                }
                onClick={toggleMenu}
              >
                Sell
              </NavLink>
            </li>
            <li>
              <Dropdown
                overlay={menu}
                trigger={["click"]}
                className="flex justify-between items-center"
              >
                <button className="w-full text-left py-2 px-4 bg-white text-[#25A7E1] rounded-lg">
                  Book a Consultation <DownOutlined />
                </button>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
