import React from "react";
import { INavItem } from "./Sidebar";
import { Link, NavLink } from "react-router";

interface Props {
  item: INavItem;
  extended: boolean;
}
const SidebarNavItem: React.FC<Props> = ({ item, extended }) => {
  return (
    <div className="sidebar__nav-item">
      <div className="icon">
        <Link to={item.path} className="flex items-center px-4">
          <span className="text-lg">{item.icon}</span>
          {extended && <span className="ml-4">{item.name}</span>}
        </Link>
      </div>

      {item.articles && extended && (
        <div className="block nav-articles text-gray-500 text-start ml-4">
          <hr className="my-2" />
          {item.articles.map(({ name, path }) => (
            <NavLink
              className={({ isActive }) => {
                return `block my-3 text-start text-sm font-bold hover:text-blue-500 ${
                  isActive ? "text-blue-500" : ""
                }`;
              }}
              to={path}
              key={name}
            >
              <span className="ml-2">-</span>
              <span className="ml-2">{name}</span>
            </NavLink>
          ))}
          <hr className="my-2" />
        </div>
      )}
    </div>
  );
};

export default SidebarNavItem;
