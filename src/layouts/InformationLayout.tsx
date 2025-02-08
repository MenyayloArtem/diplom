import React from "react";
import Sidebar from "../components/Sidebar/Sidebar.tsx";
import { Outlet } from "react-router";

const Information : React.FC = () => {
    return <div className="">
        <div className="pt-16">
            <Outlet />
        </div>
    </div>
}

export default Information