import React from "react";
import SideNav from "./_components/SideNav";
import DashboardHeader from "./_components/DashboardHeader";

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <div className="fixed md:w-64 hidden md:block">
                <SideNav />
            </div>
            <div className="md:ml-64">
                <DashboardHeader />
                <div className="p-5">{children}</div>
            </div>
        </div>
    );
};

export default DashboardLayout;