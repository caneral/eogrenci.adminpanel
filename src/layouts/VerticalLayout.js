import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../@core/components/navbar";
import Sidebar from "../@core/components/sidebar";

const VerticalLayout = () => {
  return (
    <div>
      <Sidebar />
      <main className="lg:ml-64">
        <div className="container mx-auto space-y-6 px-6 py-5 h-screen">
          <Navbar />
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default VerticalLayout;
