import React from 'react'
import { GraduationCap, LayoutGrid, Hand, Settings } from "lucide-react";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const ButtomNav = () => {
    const menuList = [
        {
            id: 1,
            name: "Dashboard",
            icon: <LayoutGrid />,
            path: "/dashboard",
        },
        {
            id: 2,
            name: "Students",
            icon: <GraduationCap />,
            path: "/dashboard/students",
        },
        {
            id: 3,
            name: "Attendance",
            icon: <Hand />,
            path: "/dashboard/attendance",
        },
        {
            id: 4,
            name: "Settings",
            icon: <Settings />,
            path: "/dashboard/settings",
        },
    ];

    const path = usePathname();

    return (
        <div className='shadow-lg min-h-20 border-t bg-dark'>
            <div className="flex gap-10 md:hidden justify-center items-center text-center">
                {menuList.map((menu, index) => (
                    <Link href={menu.path} key={menu.id || index}>
                        <div>
                            <h2
                                className={`flex gap-2 items-center text-gray-400 font-medium p-5 cursor-pointer rounded-md hover:text-light hover:bg-secondary transition-all mb-2 ${path == menu.path && "text-light bg-primary"
                                    }`}
                            >
                                {menu.icon}
                            </h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ButtomNav