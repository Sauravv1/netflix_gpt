import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import { MOVIE_CONTENT, TV_SHOW_CONTENT } from "../utils/constants";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-zinc-900 min-h-screen overflow-x-hidden">
        <div className="mt-0 md:-mt-26 pl-1 md:pl-6 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}  contentType={MOVIE_CONTENT} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}  contentType={MOVIE_CONTENT}/>
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} contentType={MOVIE_CONTENT} />
          <MovieList title={"Popular"} movies={movies.popularMovies} contentType={MOVIE_CONTENT} />

          <MovieList title={"Trending"} movies={movies.trendingMovies} contentType={TV_SHOW_CONTENT}/>
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
