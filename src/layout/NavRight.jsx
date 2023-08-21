import React from "react";
import MoviePartNavRight from "../Components/MoviePartNavRight/MoviePartNavRight";
import { movieUrlPopular, movieUrlSearch } from "../config";

const NavRight = () => {
    return (
        <div className="navright col-span-1  h-[100vh] sticky top-0 navRight py-2">
            <div className="grid grid-cols-4 gap-x-5">
                <input
                    className="col-span-3 p-2 px-3 outline-none text-white text-lg"
                    type="text"
                    placeholder="Tìm Kiếm Film"
                    style={{
                        background: "#33333c",
                        borderRadius: "100000000px",
                    }}
                />
                <div className="w-[50px] h-[50px] rounded-full col-span-1">
                    <img
                        className="w-[50px] h-[50px] rounded-full object-cover"
                        src="https://plus.unsplash.com/premium_photo-1680033007478-e485dce5dd77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                        alt="Not Found"
                    />
                </div>
            </div>
            <div className="py-5 pr-5">
                <h1 className="text-white text-2xl capitalize font-medium">
                    recommended
                </h1>
                <MoviePartNavRight
                    url={movieUrlPopular}
                    search={movieUrlSearch}
                ></MoviePartNavRight>
            </div>
        </div>
    );
};

export default NavRight;
