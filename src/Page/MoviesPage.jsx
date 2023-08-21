import React from "react";
import MoviesPages from "../Components/MoviePage/MoviePages";
import { movieUrlDiscovery } from "../config";

const MoviesPage = () => {
    return <MoviesPages url={movieUrlDiscovery}></MoviesPages>;
};

export default MoviesPage;
