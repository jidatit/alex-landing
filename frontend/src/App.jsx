import React from "react";
import './index.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RentPage from "./Pages/RentPage";
import BuyPage from "./Pages/BuyPage";
import SellPage from "./Pages/SellPage";
function App() {
  return (
<Router>
       <Routes>
                 <Route path="/" element={<HomePage />} />
         <Route path="/rent" element={<RentPage />} />
         <Route path="/buy" element={<BuyPage />} />
         <Route path="/sell" element={<SellPage />} />
       </Routes>
     </Router>
  )
}

export default App






// import React from "react";
// import './index.css';
// import HomePage from './Pages/HomePage';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import RentPage from "./Pages/RentPage";
// import BuyPage from "./Pages/BuyPage";
// import SellPage from "./Pages/SellPage";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/rent" element={<RentPage />} />
//         <Route path="/buy" element={<BuyPage />} />
//         <Route path="/sell" element={<SellPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


