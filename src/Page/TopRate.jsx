import React from "react";
import MoviesPages from "../Components/MoviePage/MoviePages";
import { movieUrlTopRated } from "../config";

const TopRate = () => {
    return <MoviesPages url={movieUrlTopRated}></MoviesPages>;
};

export default TopRate;
