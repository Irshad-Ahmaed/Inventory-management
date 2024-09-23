"use client";

import Navbar from "@/app/(components)/Navbar";
import Sidebar from "@/app/(components)/SideBar";
import StoreProvider, { useAppSelector } from "./redux";
import { useEffect } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    document.documentElement.classList.add(`${isDarkMode ? "dark" : "light"}`);
  }, [isDarkMode]);

  return (
    <div
      className={`${
        isDarkMode ? "dark" : "light"
      } flex bg-gray-50 text-gray-900 w-full min-h-screen`}
    >
      <Sidebar />
      <main
        className={`flex flex-col w-full h-full px-9 py-7 bg-gray-50 ${
          isSidebarCollapsed ? "md:pl-24" : "md:pl-72"
        }`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardLayout children={children} />
    </StoreProvider>
  );
};

export default DashboardWrapper;
