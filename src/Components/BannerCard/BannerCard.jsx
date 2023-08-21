import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { ImgUrl } from "../../config";

const BannerCard = ({ title, img }) => {
    const urlImg =
        img === null
            ? "https://cdn.akamai.steamstatic.com/steam/apps/1817070/ss_7be97aa12cfc0e8feccdbb95dac3de71480f2140.1920x1080.jpg?t=1673999865"
            : `${ImgUrl}${img}`;
    return (
        <SwiperSlide>
            <div className="w-[100%] h-full rounded-lg relative">
                <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                <img
                    src={urlImg}
                    className="w-full h-full object-cover rounded-lg"
                    alt="NotFound"
                />
                <div className=" absolute bottom-10 left-14">
                    <h1 className="font-bold text-white text-5xl capitalize">
                        {title}
                    </h1>
                    <div className="text-white flex gap-5 py-5 text-2xl capitalize ">
                        <span className="bg-green-600 px-3 rounded-lg font-think py-2">
                            Action
                        </span>
                        <span className="bg-green-600 px-3 rounded-lg font-think py-2">
                            Adventure
                        </span>
                        <span className="bg-green-600 px-3 rounded-lg font-think py-2">
                            Fantasy
                        </span>
                    </div>
                    <button className="bg-green-600 text-white text-2xl py-3 w-[250px] rounded-lg">
                        Watch Now
                    </button>
                </div>
            </div>
        </SwiperSlide>
    );
};

export default BannerCard;
