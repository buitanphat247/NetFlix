import React from 'react';
import MoviesPages from '../Components/MoviePage/MoviePages';
import { movieUrlNowPlaying } from '../config';

const NowPlayingPage = () => {
    return <MoviesPages url={movieUrlNowPlaying}></MoviesPages>;

};

export default NowPlayingPage;