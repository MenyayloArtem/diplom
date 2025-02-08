import React from "react";
import { INavItem } from "./Sidebar";
import { Link, NavLink } from "react-router";

interface Props {
  item: INavItem;
}
const SidebarNavItem: React.FC<Props> = ({ item }) => {
  return (
    <div
      className="text-gray-500 text-start p-2 mt-2"
      style={{
        border: "1px solid #e1e1e1",
      }}
    >
      <NavLink
        className={({ isActive }) => {
          return `my-3 text-start text-sm font-bold hover:text-blue-500 ${
            isActive ? "text-blue-500" : ""
          }`;
        }}
        to={item.path}
        key={item.name}
      >
        <span className="ml-2">-</span>
        <span className="ml-2">{item.name}</span>
      </NavLink>
    </div>
  );
};

export default SidebarNavItem;
