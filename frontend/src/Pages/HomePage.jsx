
import React from "react";
import Navbar from "../Components/NavBar";
import PropertyCard from "../Components/PropertyCard";
import hello from "../Assets/hello.png";

import { AiFillHome } from "react-icons/ai";
import { FaKey, FaTag } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="relative min-h-screen">


<div
  className="absolute top-0 left-0 w-full h-full  sm:bg-[top_-90px_left_-90px] md:bg-[top_-56px_left_-550px]  lg:bg-[top_0px_left_0px]  xl:bg-[top_0px_left_0px] " 
  style={{
    backgroundImage: `url(${hello})`,
    backgroundSize: 'cover',
   
    
    zIndex: -1,
  }}
></div>
      <Navbar />
      <section className="text-center relative z-10 px-4">
        <h1
          className="text-2xl md:text-4xl font-poppins font-bold py-12 md:py-20"
          style={{ color: "#1F4B43" }}
        >
          Find Your Perfect Property
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 max-w-4xl mx-auto">
          <PropertyCard
            icon={<FaKey className="w-10 h-10 md:w-12 md:h-12" color="#1F4B43" />}
            title="Rent"
            route="/rent"
          />
          <PropertyCard
            icon={<AiFillHome className="w-10 h-10  md:w-12 md:h-12" color="#1F4B43" />}
            title="Buy"
            route="/buy"
          />
          <PropertyCard
            icon={<FaTag  className="w-10 h-10  md:w-12 md:h-12" color="#1F4B43" />}
            title="Sell"
            route="/sell"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;


