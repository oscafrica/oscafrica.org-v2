import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";

const Layout = ({ children }: { children: any }) => {
  return (
    <div>
      <NavBar />
      <div className="min-h-screen lg:px-32 bg-neutral-100">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
