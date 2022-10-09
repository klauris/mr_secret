import React from "react";
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
    </>
  );
}

export default Layout;
