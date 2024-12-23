// // import React from "react";
// // import { useNavigate } from "react-router-dom";

// // const PropertyCard = ({ icon, title,route}) => {
// //     const navigate = useNavigate();
// //   return (
// //     <div className="flex flex-col items-center justify-center">
// //       <div className=" mb-[80px]">{icon}</div>
// //       <button 
// //          onClick={() => navigate(route)}
// //       className=" text-white font-poppins  rounded min-w-[210px] min-h-[50px]" 
// //       style={{ backgroundColor: "#25A7E1" }}>
// //         {title}
// //       </button>
// //     </div>
// //   );
// // };

// // export default PropertyCard;





// import React from "react";
// import { useNavigate } from "react-router-dom";

// const PropertyCard = ({ icon, title, route }) => {
//   const navigate = useNavigate();
  
//   return (
//     <div className="flex flex-col items-center justify-center p-4">
//       {/* Icon with reduced margin */}
//       <div className="mb-4 md:mb-6">{icon}</div>

//       {/* Responsive Button */}
//       <button
//         onClick={() => navigate(route)}
//         className="text-white font-poppins rounded px-6 py-2 text-sm md:text-base min-w-[150px] md:min-w-[210px] bg-[#25A7E1] hover:bg-[#164036] transition"
//       >
//         {title}
//       </button>
//     </div>
//   );
// };

// export default PropertyCard;










import React from "react";
import { useNavigate } from "react-router-dom";

const PropertyCard = ({ icon, title, route }) => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col items-center justify-center ">
    
      <div className="mb-6 md:mb-[80px]">{icon}</div>

     
      <button
        onClick={() => navigate(route)}
      className="text-white font-poppins rounded px-2 py-2 text-sm md:text-md min-w-[140px] sm:min-w-[120px] md:min-w-[180px] bg-[#25A7E1] hover:bg-[#003160] transition"
      >
        {title}
      </button>
    </div>
  );
};

export default PropertyCard;


