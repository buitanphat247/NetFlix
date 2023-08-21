import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import useSWR from "swr";
import {
    API,
    ImgUrl,
    fetcher,
    movieUrlDetails,
    movieUrlSimilarFilm,
    movieUrlUpComing,
    movieUrlVideo,
} from "../config";
import { useParams } from "react-router-dom";
import MoviePart from "../Components/MoviePartHome/MoviePart";
const MovieDetail = () => {
    const { ID } = useParams();
    const urlMovieDetail = `${movieUrlDetails}${ID}?api_key=${API}`;
    const { data, error, isLoading } = useSWR(urlMovieDetail, fetcher);
    const [movieDetail, setMovieDetail] = useState();
    useEffect(() => {
        if (!error && !isLoading && data) {
            setMovieDetail(data);
        }
    }, [data, error, isLoading]);
    return (
        <>
            <div className="col-span-5 px-10 py-5">
                <Header></Header>
                <div className="my-5 bg-slate-800 p-3 rounded-lg ">
                    <div className="grid grid-cols-3 gap-x-5">
                        <div className="rounded-lg col-span-1">
                            <img
                                className="rounded-lg"
                                src={`${ImgUrl}${movieDetail?.poster_path}`}
                                alt="Not Found"
                            />
                        </div>
                        <div className="col-span-2 grid row-span-3 gap-y-5">
                            <div className="grid gap-y-5 row-span-2">
                                <h1 className="text-white text-4xl font-bold capitalize">
                                    {movieDetail?.title}
                                </h1>
                                <div className="flex flex-col gap-y-2">
                                    <h1 className="text-white flex gap-x-2 capitalize text-2xl">
                                        <span className="font-bold">
                                            Thể loại:{" "}
                                        </span>
                                    </h1>
                                    <div className="text-2xl text-white font-medium capitalize flex gap-x-5">
                                        {movieDetail?.genres.map(
                                            (item, index) => {
                                                return (
                                                    <span
                                                        key={index}
                                                        className="px-5 py-3 rounded-lg bg-green-600"
                                                    >
                                                        {item.name}
                                                    </span>
                                                );
                                            }
                                        )}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <h1 className="text-white flex gap-x-2 capitalize text-2xl">
                                        <span className="font-bold">
                                            phụ đề:{" "}
                                        </span>
                                    </h1>
                                    <div className="text-2xl text-white font-medium capitalize flex gap-x-5">
                                        {movieDetail?.spoken_languages.map(
                                            (item, index) => {
                                                return (
                                                    <span
                                                        key={index}
                                                        className="px-5 py-3 rounded-lg bg-green-600"
                                                    >
                                                        {item.english_name}
                                                    </span>
                                                );
                                            }
                                        )}
                                    </div>
                                </div>
                                <h1 className="text-white flex gap-x-2 capitalize text-2xl">
                                    <span className="font-bold">
                                        Ngày sản xuất:
                                    </span>
                                    <span>{movieDetail?.release_date}</span>
                                </h1>
                                <h1 className="text-white flex gap-x-2 capitalize text-2xl">
                                    <span className="font-bold">
                                        Thời lượng film:
                                    </span>
                                    <span>{movieDetail?.runtime}/phút</span>
                                </h1>
                                <h1 className="text-white flex gap-x-2 capitalize text-2xl">
                                    <span className="font-bold">
                                        Điểm Trung Bình:
                                    </span>
                                    <span>
                                        {movieDetail?.vote_average}{" "}
                                        <i className="text-yellow-300 fa-solid fa-star"></i>
                                    </span>
                                </h1>
                                <p className="text-white gap-x-2 capitalize text-2xl">
                                    <span className="font-bold">Mô tả:</span>
                                    <span>
                                        {" "}
                                        {movieDetail?.overview}
                                        <i className="text-yellow-300 fa-solid fa-star"></i>
                                    </span>
                                </p>
                            </div>
                            <button className="row-span-1 bg-green-600 w-[50%] h-[100%] mx-auto rounded-lg text-2xl capitalize text-white font-bold">
                                Watch Now
                            </button>
                        </div>
                    </div>
                    <MovieVideo></MovieVideo>
                </div>
                <MoviePart 
                title={'Phim tương tự'}
                url={`${movieUrlSimilarFilm}${ID}/similar?api_key=${API}`}></MoviePart>

            </div>
        </>
    );
};

export default MovieDetail;

function MovieVideo() {
    const { ID } = useParams();
    const urlMovieDetail = `${movieUrlDetails}${ID}?api_key=${API}`;
    const { data, error, isLoading } = useSWR(movieUrlVideo, fetcher);
    const [video, setVideo] = useState();
    useEffect(() => {
        if (!error && !isLoading && data) {
            setVideo(data?.results);
        }
    }, [data, error, isLoading]);
    return (
        <div className="grid grid-cols-2 gap-5 py-5">
            {video?.slice(1, 3).map((item, index) => {
                return (
                    <iframe
                        className="w-full rounded-lg"
                        key={index}
                        width="560"
                        height="400"
                        src={`https://www.youtube.com/embed/${item.key}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                );
            })}
        </div>
    );
}
