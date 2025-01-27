import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import navigation from "./navigation.tsx";
import { Link, NavLink, useLocation } from "react-router-dom";

import "./Sidebar.css";
import SidebarNavItem from "./SidebarNavItem.tsx";

export interface INavItem {
  name: string;
  path: string;
  icon: React.ReactNode;
  articles?: Omit<INavItem, "articles" | "icon">[];
}

const Sidebar = () => {

  const location = useLocation()

  const [isOpen, setIsOpen] = useState(false)
  const [width, setWidth] = useState("")

  useEffect(() => {
    if (isOpen) {
      setWidth("w-64")
    } else {
      setWidth("w-15")
    }
  }, [isOpen])

  useEffect(() => {
    setIsOpen(false)
  }, [location])
  
  return (
    <div className={`sidebar overflow-hidden fixed h-full bg-white shadow-md 2xl:bg-transparent 2xl:shadow-none ${width}`}>
      <nav className="mt-4">
        <div className="mt-4 mb-8 flex items-center p-4 block">
            <span className="text-lg pointer" onClick={() => setIsOpen(open => !open)}><FaBars /></span>
            {isOpen && <span className="ml-4">Меню</span>}
            </div>
        {navigation.map((item) => (
          <div className="block" key={item.name}>
            <SidebarNavItem item={item} extended={isOpen}/>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
