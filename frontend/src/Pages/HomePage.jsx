
import React, { useState, useEffect } from "react";
import Navbar from "../Components/NavBar";
import PropertyCard from "../Components/PropertyCard";
import hello from "../Assets/hello.png";

import { AiFillHome } from "react-icons/ai";
import { FaKey, FaTag } from "react-icons/fa";

const HomePage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="relative min-h-screen">


<div
  className="absolute top-0 left-0 w-full h-full sm:bg-[bottom_0px_left_-90px] md:bg-[bottom_0px_center]"
  style={{
    backgroundImage: `url(${hello})`,
    backgroundSize: windowWidth >= 768 && windowWidth <= 1800 ? "contain" : "cover",
    backgroundRepeat:'no-repeat',
    zIndex: -1,
  }}
></div>

      <Navbar />
      <section className="text-center relative z-10 px-4">
        <h1
          className="text-2xl md:text-4xl font-poppins font-bold py-12 md:py-20"
          style={{ color: "#25A7E1" }}
        >
          Find Your Perfect Property
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 max-w-4xl mx-auto">
          <PropertyCard
            icon={<FaKey className="w-10 h-10 md:w-12 md:h-12" color="#25A7E1" />}
            title="Rent"
            route="/rent"
          />
          <PropertyCard
            icon={<AiFillHome className="w-10 h-10  md:w-12 md:h-12" color="#25A7E1" />}
            title="Buy"
            route="/buy"
          />
          <PropertyCard
            icon={<FaTag  className="w-10 h-10  md:w-12 md:h-12" color="#25A7E1" />}
            title="Sell"
            route="/sell"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;


