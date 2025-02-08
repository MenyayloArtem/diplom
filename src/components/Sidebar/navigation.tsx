import React from "react";
import { INavItem } from "./Sidebar";

const navigation: INavItem[] = [
  { name: "Основные сведения", path: "/information/main" },
  {
    name: "Структура и органы управления образовательной организацией",
    path: "/information/management",
  },
  { name: "Документы", path: "/information/documents" },
  { name: "Образование", path: "/information/education" },
  { name: "Педагогический состав", path: "/information/teachers" },
];

export default navigation;
