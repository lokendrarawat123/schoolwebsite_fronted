import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import Navbar from "../components/Navbar";

const PublicLayout = () => {
  return (
    <div className=" ">
      <div>
        <Header />
      </div>
      <Navbar/>
      <div className="flex-1">
        <Outlet />
      </div>

      {/* footer */}
    </div>
  );
};

export default PublicLayout;
