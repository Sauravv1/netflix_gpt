import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-zinc-900 min-h-screen overflow-x-hidden">
        <div className="mt-0 md:-mt-52 pl-1 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />

          <MovieList title={"Trending"} movies={movies.trendingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
