import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const BaseLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default BaseLayout;
