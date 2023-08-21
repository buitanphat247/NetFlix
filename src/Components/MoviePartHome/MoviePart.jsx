import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import MovieCardItem from "../MoviesCard/MovieCardItem";
import useSWR from "swr";
import { fetcher } from "../../config";
import { useNavigate } from "react-router-dom";
const MoviePart = ({ title, url, path }) => {
    const [movieData, setMovieData] = useState([]);
    const { data, error, isLoading } = useSWR(url, fetcher);
    useEffect(() => {
        if (!isLoading && !error && data && data?.results) {
            setMovieData(data.results);
        }
    }, [isLoading, error, data]);
    const navigate = useNavigate();
    return (
        <div className="py-5">
            <div className="flex items-center justify-between">
                <h1 className="text-white text-2xl capitalize font-medium">
                    {title}
                </h1>
                <h1
                    onClick={() => navigate(path)}
                    className="cursor-pointer hover:text-green-500  px-5 text-white capitalize font-medium text-xl"
                >
                    Xem Thêm <i className="fa-solid fa-chevron-right"></i>
                </h1>
            </div>
            <div className=" movies movie-List py-5">
                {isLoading ? (
                    <>
                        <div className="py-5 grid grid-cols-4 gap-5">
                            {Array(4)
                                .fill("")
                                .map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="skeleton bg-slate-800 rounded-lg py-2 px-3"
                                        >
                                            <Stack spacing={1}>
                                                {/* For variant="text", adjust the height via font-size */}
                                                <Skeleton
                                                    variant="rounded"
                                                    sx={{ fontSize: "1rem" }}
                                                    height={300}
                                                />
                                                <Skeleton
                                                    variant="text"
                                                    sx={{ fontSize: "1.5rem" }}
                                                />
                                                <Skeleton
                                                    variant="text"
                                                    sx={{
                                                        fontSize: "1.125rem",
                                                    }}
                                                />
                                                <Skeleton
                                                    variant="rounded"
                                                    height={50}
                                                    sx={{
                                                        fontSize: "1.125rem",
                                                    }}
                                                />
                                                {/* For other variants, adjust the size with `width` and `height` */}
                                            </Stack>
                                        </div>
                                    );
                                })}
                        </div>
                    </>
                ) : (
                    <Swiper
                        grabCursor={true}
                        spaceBetween={14}
                        slidesPerView={"auto"}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={false}
                        modules={[Autoplay]}
                    >
                        {movieData.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <MovieCardItem
                                        title={item.title}
                                        vote={item.vote_average}
                                        date={item.release_date}
                                        image={item.poster_path}
                                        id={item.id}
                                    ></MovieCardItem>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                )}
            </div>
        </div>
    );
};

export default MoviePart;
