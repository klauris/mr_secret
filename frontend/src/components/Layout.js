import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import SiderBar from "./SiderBar";
function Layout({ children }) {
  return (
    <>
      <Header />

      <div className="flex ">
        <SiderBar />
        <main className="w-full ">{children}</main>
      </div>

      <Footer />
    </>
  );
}

export default Layout;
