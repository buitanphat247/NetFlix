import React from "react";
import MoviesPages from "../Components/MoviePage/MoviePages";
import { movieUrlDiscovery, movieUrlTrending } from "../config";

const DiscorverPage = () => {
    return <MoviesPages url={movieUrlDiscovery}></MoviesPages>;
};

export default DiscorverPage;
