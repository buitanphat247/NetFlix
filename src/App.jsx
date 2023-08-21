import { Route, Routes } from "react-router-dom";
import "./App.css";

import {
    movieUrlNowPlaying,
    movieUrlPopular,
    movieUrlSearch,
    movieUrlTopRated,
    movieUrlTrending,
    movieUrlUpComing,
} from "./config";
import Main from "./layout/main";
import HomePage from "./layout/HomePage";
import NavRight from "./layout/NavRight";
import MoviesPage from "./Page/MoviesPage";
import MovieDetail from "./Page/MovieDetail";
import DiscorverPage from "./Page/DiscorverPage";
import ComingSoonPage from "./Page/ComingSoonPage";
import PopularPage from "./Page/PopularPage";
import TrendingPage from "./Page/TrendingPage";
import TopRate from "./Page/TopRate";
import NowPlayingPage from "./Page/NowPlayingPage";
import { useEffect, useState } from "react";

function App() {
    const [shouldRenderContent, setShouldRenderContent] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1024) {
                setShouldRenderContent(false);
            } else {
                setShouldRenderContent(true);
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <>
            {shouldRenderContent ? (
                <>
                    <div className="flex flex-col h-[100vh] items-center justify-center gap-y-8">
                        <p className="text-white font-bold text-2xl uppercase leading-relaxed p-5 flex items-center justify-center w-[full] text-center">
                            Không hiển thị trang này vì kích thước màn hình nhỏ
                            hơn 1024px.
                        </p>
                        <div className="w-[50px] h-[50px] border-t-5 border-r-4 rounded-full animate-spin border-blue-500"></div>
                    </div>
                </>
            ) : (
                <Routes>
                    <Route path="/" element={<Main></Main>}>
                        <Route
                            path="/"
                            element={
                                <>
                                    <HomePage></HomePage>
                                    <NavRight></NavRight>
                                </>
                            }
                        ></Route>
                        <Route
                            path="/movies"
                            element={<MoviesPage></MoviesPage>}
                        ></Route>
                        <Route
                            path="/movies/:ID"
                            element={<MovieDetail></MovieDetail>}
                        ></Route>
                        <Route
                            path="/discorvered"
                            element={<DiscorverPage></DiscorverPage>}
                        ></Route>
                        <Route
                            path="/popular"
                            element={<PopularPage></PopularPage>}
                        ></Route>
                        <Route
                            path="/comingsoon"
                            element={<ComingSoonPage></ComingSoonPage>}
                        ></Route>
                        <Route
                            path="/trending"
                            element={<TrendingPage></TrendingPage>}
                        ></Route>
                        <Route
                            path="/toprated"
                            element={<TopRate></TopRate>}
                        ></Route>
                        <Route
                            path="/nowplaying"
                            element={<NowPlayingPage></NowPlayingPage>}
                        ></Route>
                    </Route>
                </Routes>
            )}
        </>
    );
}

export default App;
