
import React from "react";
import Navbar from "../Components/NavBar";
import PropertyCard from "../Components/PropertyCard";
import hello from "../Assets/hello.png";

import { AiFillHome } from "react-icons/ai";
import {  FaKey, FaTag } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${hello})`,
        //   backgroundSize: 'cover',
          backgroundPosition: 'center', 
          backgroundSize: 'contain',
          zIndex: -1, 
        }}
      ></div>

      <Navbar />
      <section className="text-center  relative z-10">
        <h1 className="text-4xl font-poppins font-bold  py-[80px] " style={{ color: "#1F4B43" }}>
          Find Your Perfect Property
        </h1>
        <div className="grid grid-cols-3 gap-16 max-w-4xl mx-auto ">
          <PropertyCard 
          icon={<FaKey size={44}  color="#1F4B43" />}
          title="Rent"
           route="/rent" 
           />
          <PropertyCard 
           icon={<AiFillHome size={44}  color="#1F4B43"/>}
          title="Buy"
          route="/buy"
           />
          <PropertyCard 
        icon={<FaTag size={44}  color="#1F4B43" />}
          title="Sell" 
          route="/sell" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
