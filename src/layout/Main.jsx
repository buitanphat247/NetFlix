import React from "react";
import NavLeft from "./NavLeft";
import { Outlet } from "react-router-dom";
import NavRight from "./NavRight";

const Main = () => {
    return (
        <div className="grid grid-cols-6">
            <NavLeft></NavLeft>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
