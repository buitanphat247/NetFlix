import React from "react";
import { movieUrlUpComing } from "../config";
import MoviesPages from "../Components/MoviePage/MoviePages";

const ComingSoonPage = () => {
    return <MoviesPages url={movieUrlUpComing}></MoviesPages>;
};

export default ComingSoonPage;
