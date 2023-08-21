import React from "react";
import { ImgUrl } from "../../config";
import { useNavigate } from "react-router-dom";

const MovieCardNavRight = ({
    title = "Spider-Man: no way home",
    vote = "8.0",
    date = "2007-02-04",
    id,
    image = "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_FMjpg_UX1000_.jpg",
}) => {
    const ImageUrl = image === "" ? image : `${ImgUrl}${image}`;
    const navigate = useNavigate();
    return (
        <div className="bg-slate-800 gap-x-2 p-1 rounded-lg grid grid-cols-3">
            <div className="w-full  rounded-lg col-span-1">
                <img
                    className="h-full rounded-lg"
                    src={ImageUrl}
                    alt="Not Found"
                />
            </div>
            <div className=" col-span-2 flex flex-col justify-between">
                <div>
                    <h1 className="text-white text-xl row-span-1 capitalize font-bold line-clamp-2 text-left">
                        {title}
                    </h1>
                    <div className="flex items-center row-span-1 justify-between text-white py-2">
                        <span>{date}</span>
                        <span>
                            {vote}{" "}
                            <i className="fa-solid fa-star text-yellow-400"></i>
                        </span>
                    </div>
                </div>
                <button
                    onClick={() => navigate(`/movies/${id}`)}
                    className=" w-full h-[40px] row-span-1 rounded-md bg-green-600 text-white font-bold text-xl capitalize"
                >
                    Watch Now
                </button>
            </div>
        </div>
    );
};

export default MovieCardNavRight;
