import Sidebar from "../sidebar/Sidebar";
import SideRoutes from "../SideRoutes";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Layout = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route
               render={(props) => {
                  <div className="layot">
                     <Sidebar {...props} />
                     <div className="layout__content">
                        <div className="layout__content-main">
                           <SideRoutes />
                        </div>
                     </div>
                  </div>;
               }}
            />
         </Routes>
      </BrowserRouter>
   );
};
export default Layout;
