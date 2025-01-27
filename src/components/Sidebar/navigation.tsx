import React from "react";
import { INavItem } from "./Sidebar";
import {
    FaHome,
    FaNewspaper,
    FaCalendarAlt,
    FaBars,
    FaInfoCircle,
    FaUserGraduate,
  } from "react-icons/fa";

  const navigation: INavItem[] = [
    { name: "Главная", path: "/", icon: <FaHome /> },
    { name: "Новости", path: "/news", icon: <FaNewspaper /> },
    { name: "Мероприятия", path: "/events", icon: <FaCalendarAlt /> },
    { name: "ГИА 2025", path: "/events", icon: <FaUserGraduate /> },
    {
      name: "Информация",
      path: "/information",
      icon: <FaInfoCircle />,
      articles: [
        { name: "Основные сведения", path: "/information/main" },
        { name: "Структура и органы управления образовательной организацией", path: "/information/management" },
        { name: "Документы", path: "/information/documents" },
        { name: "Образование", path: "/information/education" },
        { name: "Педагогический состав", path: "/information/teachers" },
      ],
    },
  ];

export default navigation