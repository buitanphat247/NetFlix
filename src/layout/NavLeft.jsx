import React from "react";
import { NavLink } from "react-router-dom";

const NavLeft = () => {
    return (
        <div className="col-span-1 navBar border-r-4 border-gray-600 h-[100vh] sticky top-0">
            <div className="mb-5">
                <NavLink
                    to="/"
                    className="w-full flex items-center justify-center py-10"
                >
                    <img
                        className="w-[80%] object-cover"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png"
                        alt=""
                    />
                </NavLink>

                <div className="mb-5">
                    <h1 className="Menu text-white text-2xl font-bold uppercase py-5 px-5 ">
                        Menu
                    </h1>
                    <ul className="text-white grid text-xl capitalize">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "cursor-pointer py-3 px-5 text-green-500 bg-slate-800 border-r-4 border-green-600"
                                    : "cursor-pointer py-3 px-5 text-slate-500 hover:bg-slate-800  hover:border-r-4 hover:border-green-600 hover:opacity-50 transition-all"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/movies"
                            className={({ isActive }) =>
                                isActive
                                    ? "cursor-pointer py-3 px-5 text-green-500 bg-slate-800 border-r-4 border-green-600"
                                    : "cursor-pointer py-3 px-5 text-slate-500 hover:bg-slate-800  hover:border-r-4 hover:border-green-600 hover:opacity-50 transition-all"
                            }
                        >
                            Movies
                        </NavLink>
                        <NavLink
                            to="/discorvered"
                            className={({ isActive }) =>
                                isActive
                                    ? "cursor-pointer py-3 px-5 text-green-500 bg-slate-800 border-r-4 border-green-600"
                                    : "cursor-pointer py-3 px-5 text-slate-500 hover:bg-slate-800  hover:border-r-4 hover:border-green-600 hover:opacity-50 transition-all"
                            }
                        >
                            Discorver
                        </NavLink>
                        <NavLink
                            to="/comingsoon"
                            className={({ isActive }) =>
                                isActive
                                    ? "cursor-pointer py-3 px-5 text-green-500 bg-slate-800 border-r-4 border-green-600"
                                    : "cursor-pointer py-3 px-5 text-slate-500 hover:bg-slate-800  hover:border-r-4 hover:border-green-600 hover:opacity-50 transition-all"
                            }
                        >
                            Comming Soon
                        </NavLink>
                    </ul>
                </div>
            </div>
            <div className="mb-5">
                <h1 className="Menu text-white text-2xl font-bold uppercase py-5 px-5 ">
                    library
                </h1>
                <ul className="text-white  grid text-xl capitalize">
                    <NavLink
                        to="/popular"
                        className={({ isActive }) =>
                            isActive
                                ? "cursor-pointer py-3 px-5 text-green-500 bg-slate-800 border-r-4 border-green-600"
                                : "cursor-pointer py-3 px-5 text-slate-500 hover:bg-slate-800  hover:border-r-4 hover:border-green-600 hover:opacity-50 transition-all"
                        }
                    >
                        popular
                    </NavLink>
                    <NavLink
                        to="/trending"
                        className={({ isActive }) =>
                            isActive
                                ? "cursor-pointer py-3 px-5 text-green-500 bg-slate-800 border-r-4 border-green-600"
                                : "cursor-pointer py-3 px-5 text-slate-500 hover:bg-slate-800  hover:border-r-4 hover:border-green-600 hover:opacity-50 transition-all"
                        }
                    >
                        trending
                    </NavLink>
                    <NavLink
                        to="/toprated"
                        className={({ isActive }) =>
                            isActive
                                ? "cursor-pointer py-3 px-5 text-green-500 bg-slate-800 border-r-4 border-green-600"
                                : "cursor-pointer py-3 px-5 text-slate-500 hover:bg-slate-800  hover:border-r-4 hover:border-green-600 hover:opacity-50 transition-all"
                        }
                    >
                        Top Rated
                    </NavLink>
                    <NavLink
                        to="/nowplaying"
                        className={({ isActive }) =>
                            isActive
                                ? "cursor-pointer py-3 px-5 text-green-500 bg-slate-800 border-r-4 border-green-600"
                                : "cursor-pointer py-3 px-5 text-slate-500 hover:bg-slate-800  hover:border-r-4 hover:border-green-600 hover:opacity-50 transition-all"
                        }
                    >
                        now playing
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default NavLeft;
