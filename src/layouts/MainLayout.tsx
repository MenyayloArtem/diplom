import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar.tsx";

const MainLayout : React.FC = () => {
    return (
        <div className="w-full">
            <Navbar />
            <div className="content max-w-screen-xl mx-auto px-4 xl:px-0">
                <Outlet />
            </div>
        </div>
        
    )
}

export default MainLayout