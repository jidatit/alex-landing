import React from "react";
import { useNavigate } from "react-router-dom";

const PropertyCard = ({ icon, title,route}) => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" mb-[80px]">{icon}</div>
      <button 
         onClick={() => navigate(route)}
      className=" text-white font-poppins  rounded min-w-[210px] min-h-[50px]" 
      style={{ backgroundColor: "#1F4B43" }}>
        {title}
      </button>
    </div>
  );
};

export default PropertyCard;
