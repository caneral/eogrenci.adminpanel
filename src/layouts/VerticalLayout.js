import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../@core/components/sidebar";

const VerticalLayout = () => {
  return (
    <div>
      <Sidebar />
     
      <main className="ml-64 h-screen">
          <Outlet />
      </main>
    </div>
  );
};

export default VerticalLayout;
