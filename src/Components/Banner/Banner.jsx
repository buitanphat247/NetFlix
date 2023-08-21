import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useSWR from "swr";
import { ImgUrl, fetcher, movieUrlUpComing } from "../../config";
import BannerCard from "../BannerCard/BannerCard";
import { useNavigate } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
const Banner = () => {
    const navigate = useNavigate();
    const { data, error, isLoading } = useSWR(movieUrlUpComing, fetcher);
    const [movieData, setMovieData] = useState();
    useEffect(() => {

        if (!error && !isLoading && data) {
            setMovieData(data?.results);
        }
    }, [data, error, isLoading]);

    console.log("movieData: ", movieData);
    return (
        <section className="banner h-[600px] mx-auto pb-10 rounded-lg overflow-hidden">
            <div className="w-full h-full mt-5 rounded-lg overflow-hidden">
                {isLoading ? (
                    <>
                        <Stack spacing={1}>
                            {/* For variant="text", adjust the height via font-size */}
                            <Skeleton
                                height={600}
                                variant="rounded"
                                sx={{ fontSize: "1rem" }}
                            />

                            {/* For other variants, adjust the size with `width` and `height` */}
                        </Stack>
                    </>
                ) : (
                    <Swiper
                        grabCursor={true}
                        slidesPerView={"auto"}
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {movieData &&
                            movieData.map((item, index) => {
                                const urlImg =
                                    item.backdrop_path === null
                                        ? "https://cdn.akamai.steamstatic.com/steam/apps/1817070/ss_7be97aa12cfc0e8feccdbb95dac3de71480f2140.1920x1080.jpg?t=1673999865"
                                        : `${ImgUrl}${item.backdrop_path}`;
                                return (
                                    <SwiperSlide key={index}>
                                        <div className="w-[100%] h-full rounded-lg relative">
                                            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                                            <img
                                                src={urlImg}
                                                className="w-full h-full object-cover rounded-lg"
                                                alt="NotFound"
                                            />
                                            <div className=" absolute bottom-10 left-14">
                                                <h1 className="font-bold text-white text-5xl capitalize">
                                                    {item.title}
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
                                                <button
                                                    onClick={() =>
                                                        navigate(
                                                            `/movies/${item.id}`
                                                        )
                                                    }
                                                    className="bg-green-600 text-white text-2xl py-3 w-[250px] rounded-lg"
                                                >
                                                    Watch Now
                                                </button>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                    </Swiper>
                )}
            </div>
        </section>
    );
};

export default Banner;
