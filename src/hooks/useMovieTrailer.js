import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`,
        API_OPTIONS
      );
      const data = await response.json();

      // Check if data.results exists and is an array before filtering
      if (data.results && Array.isArray(data.results)) {
        const filterData = data.results.filter((video) => video.type === "Trailer");

        // Select the first trailer if found, otherwise fall back to the first video
        const trailer = filterData.length ? filterData[0] : data.results[0];
        if (trailer) {
          dispatch(addTrailerVideo(trailer));
        } else {
          console.warn("No trailer video found for this movie.");
        }
      } else {
        console.warn("No videos found in the API response.");
      }
    } catch (error) {
      console.error("Failed to fetch movie videos:", error);
    }
  };

  useEffect(() => {
    if (movieId) {
      getMovieVideos();
    }
  }, [movieId]);  // Include movieId as a dependency
};

export default useMovieTrailer;
