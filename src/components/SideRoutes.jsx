import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";

const SiedeRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<Dashboard />} />
         <Route path="/customers" element={<Customers />} />
      </Routes>
   );
};
export default Routes;
