import React, { useEffect } from "react";
import NavbarLink from "./NavbarLink.tsx";

const Navigation: React.FC = () => {
  return (
    <>
      <nav className="w-full bg-gradient-to-tr from-blue-500 to-cyan-500 fixed z-10">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-white font-bold text-md sm:text-lg md:text-xl">
              ГБОУ "Школа № 41 г.о. Горловка"
            </div>
            <div className="space-x-4 text-gray-300 font-bold hidden md:block"></div>
          </div>
        </div>
      </nav>

      <nav className="w-full bg-white fixed z-10 top-16">
        <div className="max-w-screen-xl mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center gap-x-4 md:h-8 h-16 text-sm md:text-base">
            <NavbarLink to="/" text="Главная" />
            <NavbarLink to="/news" text="Новости" />

            <NavbarLink to="/events" text="Мероприятия" />

            <NavbarLink to="/gia" text="ГИА 2025" />

            <NavbarLink to="/information" text="Сведения о образовательной организации" />
          </div>
        </div>
        <hr />
      </nav>
    </>
  );
};

export default Navigation;
