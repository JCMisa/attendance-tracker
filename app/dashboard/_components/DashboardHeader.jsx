import { UserButton } from "@clerk/nextjs";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import React from "react";

const DashboardHeader = ({ showSideNav }) => {
    return (
        <div className="p-5 shadow-md border-b flex justify-between items-center">
            <div className="hidden md:block cursor-pointer">
                <AlignJustify onClick={showSideNav} />
            </div>

            <div>
                <a className="flex font-medium items-center text-white mb-4 md:mb-0 md:hidden">
                    <Image src={'/attendo-logo.png'} alt='logo' width={25} height={25} />
                    <span className="ml-3 text-xl logo-text">Attendo</span>
                </a>
            </div>

            <div>
                <UserButton />
            </div>
        </div>
    );
};

export default DashboardHeader;