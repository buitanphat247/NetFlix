import "react-loading-skeleton/dist/skeleton.css";
import React, { useEffect, useState } from "react";
import MovieCardNavRight from "../MovieCardNavRight/MovieCardNavRight";
import useSWR from "swr";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import { fetcher } from "../../config";
const MoviePartNavRight = ({ url, search }) => {
    const { data, error, isLoading } = useSWR(url, fetcher);
    const [movieData, setMovieData] = useState([]);
    useEffect(() => {
        if (!error && !isLoading && data && data?.results.length > 0) {
            setMovieData(data.results);
        }
    }, [data, error, isLoading]);
    console.log("movieData: ", movieData);
    return (
        <div className="py-5 grid gap-y-3">
            {isLoading ? (
                <>
                    <div className="py-5 grid gap-5">
                        {Array(5)
                            .fill("")
                            .map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="skeleton bg-slate-800 py-2 px-3  gap-x-2 p-1 rounded-lg grid grid-cols-3"
                                    >
                                        <div className="col-span-1">
                                            <Stack spacing={0}>
                                                <Skeleton
                                                    variant="rounded"
                                                    height={150}
                                                ></Skeleton>
                                            </Stack>
                                        </div>
                                        <div className=" col-span-2">
                                            <Stack spacing={1}>
                                                <Skeleton
                                                    variant="rectangular"
                                                    sx={{ fontSize: "3rem" }}
                                                ></Skeleton>
                                                <Skeleton
                                                    variant="rectangular"
                                                    sx={{ fontSize: "0.51rem" }}
                                                ></Skeleton>

                                                <Skeleton
                                                    variant="rectangular"
                                                    sx={{ fontSize: "0.51rem" }}
                                                ></Skeleton>
                                                <Skeleton
                                                    variant="rectangular"
                                                    sx={{ fontSize: "0.5rem" }}
                                                ></Skeleton>

                                                <Skeleton
                                                    variant="rectangular"
                                                    height={30}
                                                ></Skeleton>
                                            </Stack>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </>
            ) : (
                movieData.map((item, index) => {
                    return (
                        <MovieCardNavRight
                            key={index}
                            title={item.title}
                            vote={item.vote_average}
                            date={item.release_date}
                            image={item.poster_path}
                            id={item.id}
                        ></MovieCardNavRight>
                    );
                })
            )}
        </div>
    );
};

export default MoviePartNavRight;
