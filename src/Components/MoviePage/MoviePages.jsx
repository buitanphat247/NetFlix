import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import debounce from "lodash/debounce";
import MovieCardItem from "../MoviesCard/MovieCardItem";
import Header from "../../layout/Header";
import { fetcher, movieUrlQuery, movieUrlUpComing } from "../../config";
const MoviesPages = ({ url }) => {
    const [nextPage, setNextPage] = useState(1);

    const [movieData, setMovieData] = useState([]);
    const [query, setQuery] = useState(`${url}${nextPage}`);
    const { data, error, isLoading } = useSWR(query, fetcher);
    useEffect(() => {
        if (!isLoading && !error && data && data?.results.length > 0) {
            setMovieData(data.results);
        }
    }, [isLoading, data, error, query]);

    const handleChange = debounce((e) => {
        e.target.value === ""
            ? setQuery(url)
            : setQuery(`${movieUrlQuery}${e.target.value}`);
    }, 1000);
    console.log(query);
    const handleClickNext = () => {
        setQuery(`${url}${nextPage + 1}`);

        setNextPage(nextPage + 1);
    };
    const handleClickPrev = () => {
        if (nextPage > 1) {
            setQuery(`${url}${nextPage - 1}`);
            setNextPage(nextPage - 1);
        }
    };
    return (
        <div className="col-span-5 px-10 py-5">
            <div className="grid grid-cols-2 gap-2">
                <Header></Header>
                <div>
                    <input
                        onChange={handleChange}
                        type="text"
                        className="w-full rounded-lg col-span-3 p-2 px-3 outline-none text-white text-lg"
                        placeholder="Tìm kiếm Film"
                        style={{
                            background: "#33333c",
                        }}
                    />
                </div>
            </div>
            <div className="pt-5 flex gap-x-5 justify-end">
                <span
                    onClick={() => handleClickPrev()}
                    className="bg-slate-800 cursor-pointer text-white text-2xl p-2 px-5 rounded-md"
                >
                    <i className="fa-solid fa-chevron-left"></i>
                </span>
                <span
                    onClick={() => handleClickNext()}
                    className="bg-slate-800 cursor-pointer text-white text-2xl p-2 px-5 rounded-md"
                >
                    <i className="fa-solid fa-chevron-right"></i>
                </span>
            </div>
            {isLoading ? (
                <>
                    <div className="py-5 grid grid-cols-4 gap-5">
                        {Array(20)
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
                                                sx={{ fontSize: "1.125rem" }}
                                            />
                                            <Skeleton
                                                variant="rounded"
                                                height={50}
                                                sx={{ fontSize: "1.125rem" }}
                                            />
                                            {/* For other variants, adjust the size with `width` and `height` */}
                                        </Stack>
                                    </div>
                                );
                            })}
                    </div>
                </>
            ) : (
                <div className="py-5 grid grid-cols-4 gap-5">
                    {movieData.map((item, index) => {
                        return (
                            <MovieCardItem
                                key={index}
                                title={item.title}
                                vote={item.vote_average}
                                date={item.release_date}
                                image={item.poster_path}
                                id={item.id}
                                overview={item.overview}
                            ></MovieCardItem>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default MoviesPages;
