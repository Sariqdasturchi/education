import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";

export default function Layout() {
  const isOpen = useSelector((state) => state.sidebar.isOpen);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Content joylashuvi markazda */}
      <div
        className={`flex-1 flex flex-col items-center justify-center transition-all duration-300 ease-in-out  ${isOpen ? "ml-62 mt-16" : " ml-32 mt-16"
          }`}
      >
        <Outlet />
      </div>

    </div>
  );
}
