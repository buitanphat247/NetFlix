import React from "react";
import MoviesPages from "../Components/MoviePage/MoviePages";
import { movieUrlPopular, movieUrlUpComing } from "../config";

const PopularPage = () => {
    return <MoviesPages url={movieUrlPopular}></MoviesPages>;
};

export default PopularPage;
