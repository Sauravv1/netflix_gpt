import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addNowPlayingMovies(data.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []); // Empty dependency array ensures this runs only once

  return null; // This hook does not render anything
};

export default useNowPlayingMovies;
