import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}`,
        API_OPTIONS
      );
      const data = await response.json();

      // Log the response to check the data
      console.log("Now Playing Movies:", data);

      dispatch(addNowPlayingMovies(data.results));
    } catch (error) {
      console.error("Failed to fetch now playing movies:", error);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return null;
};

export default useNowPlayingMovies;
