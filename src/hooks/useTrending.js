import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/trending?api_key=${process.env.REACT_APP_TMDB_KEY}`,
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addTrendingMovies(data.results));
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);

  return null;
};

export default useTrendingMovies;
