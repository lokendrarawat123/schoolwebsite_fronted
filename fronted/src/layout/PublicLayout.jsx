import { Outlet } from "react-router-dom";

import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

const PublicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header includes Navbar */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 lg:-mt-11  ">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default PublicLayout;
