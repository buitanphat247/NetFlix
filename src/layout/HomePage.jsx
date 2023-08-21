import React from "react";
import {
    movieUrlDiscovery,
    movieUrlNowPlaying,
    movieUrlPopular,
    movieUrlTopRated,
    movieUrlTrending,
    movieUrlTrending1,
    movieUrlUpComing,
} from "../config";
import MoviePart from "./../Components/MoviePartHome/MoviePart";
import Banner from "../Components/Banner/Banner";
import Header from "./Header";
const HomePage = () => {
    return (
        <div className="col-span-4 px-10 py-5">
            <Header></Header>
            <Banner></Banner>
            <MoviePart
                title={"now playing"}
                url={movieUrlNowPlaying}
                path={"/nowplaying"}

            ></MoviePart>
            <MoviePart
                title={"Trending"}
                url={movieUrlTrending1}
                path={"/trending"}
            ></MoviePart>
            <MoviePart
                path={"/popular"}
                title={"Popular"}
                url={movieUrlPopular}
            ></MoviePart>
            <MoviePart
                path={"/toprated"}
                title={"Top Rated"}
                url={movieUrlTopRated}
            ></MoviePart>
            <MoviePart
                path={"/comingsoon"}
                title={"coming soon"}
                url={movieUrlUpComing}
            ></MoviePart>
        </div>
    );
};

export default HomePage;
