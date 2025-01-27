import React, { useEffect } from "react";
import NavbarLink from "./NavbarLink.tsx";

const Navigation: React.FC = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 fixed z-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-white font-bold text-md sm:text-lg md:text-xl">
            ГБОУ "Школа № 41 г.о. Горловка"
          </div>
          <div className="space-x-4 text-gray-300 font-bold hidden md:block">
            <NavbarLink to="/" text="Главная" />
            <NavbarLink
              to="/information"
              text="Сведения о образовательном учреждении"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
