import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header flex text-xl capitalize font-bold gap-5 text-slate-500">
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive
                        ? "w-[150px] text-left text-green-500 "
                        : "w-[150px] text-left hover:text-green-500 hover:opacity-50"
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/Movies"
                className={({ isActive }) =>
                    isActive
                        ? "w-[150px] text-left text-green-500"
                        : "w-[150px] text-left hover:text-green-500 hover:opacity-50"
                }
            >
                Movies
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive
                        ? "w-[150px] text-left hover:text-green-500 hover:opacity-50"
                        : "w-[150px] text-left  hover:text-green-500 hover:opacity-50"
                }
            >
                Liên Hệ
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive
                        ? "w-[150px] text-left  hover:text-green-500 hover:opacity-50"
                        : "w-[150px] text-left  hover:text-green-500 hover:opacity-50"
                }
            >
                Giới Thiệu
            </NavLink>
        </div>
    );
};

export default Header;
