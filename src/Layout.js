import React from "react";
import Sidebar from "./components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="w-10/12">
        <main>{children}</main>
      </div>
    </div>
  );
};
export default Layout;
