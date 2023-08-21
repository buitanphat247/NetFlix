import React from "react";
import { ImgUrl } from "../../config";
import { useNavigate } from "react-router-dom";

const MovieCardItem = ({
    title = "Spider-Man: no way home",
    vote = "8.0",
    date = "2007-02-04",
    image,
    id,
    overview,
}) => {
    const ImageUrl =
        image === null
            ? `https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_FMjpg_UX1000_.jpg`
            : `${ImgUrl}${image}`;
    const navigate = useNavigate();
    return (
        <div className="bg-slate-800  w-full  rounded-lg py-2 flex flex-col">
            <div className="h-[300px] px-3 rounded-lg">
                <img
                    className="w-full h-full object-cover rounded-lg"
                    src={ImageUrl}
                    alt="Not Found"
                />
            </div>
            <div className="px-5 py-1 flex-1 flex flex-col">
                <div className="flex-1">
                    <h1 className="text-2xl text-white capitalize font-bold line-clamp-1">
                        {title}
                    </h1>
                    <p className="text-white line-clamp-3">{overview}</p>
                </div>

                <div className="flex text-lg items-center justify-between text-white py-2">
                    <span>{date}</span>
                    <span>
                        {vote}{" "}
                        <i className="fa-solid fa-star text-yellow-400"></i>
                    </span>
                </div>
                <button
                    onClick={() => navigate(`/movies/${id}`)}
                    className=" w-full h-[50px] rounded-md bg-green-600 text-white 
            font-bold text-xl capitalize "
                >
                    Watch Now
                </button>
            </div>
        </div>
    );
};

export default MovieCardItem;
