import React from "react";
import MoviesPages from "../Components/MoviePage/MoviePages";
import { movieUrlPopular, movieUrlTrending, movieUrlUpComing } from "../config";

const TrendingPage = () => {
    return <MoviesPages url={movieUrlTrending}></MoviesPages>;
};

export default TrendingPage;
