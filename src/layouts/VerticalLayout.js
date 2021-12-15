import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../@core/components/navbar";
import Sidebar from "../@core/components/sidebar";

const VerticalLayout = () => {
  return (
    <div>
      <Sidebar />
      <main className="ml-64 h-screen px-6 py-5 space-y-6">
          <Navbar />
          <Outlet />
      </main>
    </div>
  );
};

export default VerticalLayout;
