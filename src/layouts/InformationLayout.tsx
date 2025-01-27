import React from "react";
import Sidebar from "../components/Sidebar/Sidebar.tsx";
import { Outlet } from "react-router";

const Information : React.FC = () => {
    return <div className="">
        <Sidebar />
        <div className="pl-16">
            <Outlet />
        </div>
    </div>
}

export default Information