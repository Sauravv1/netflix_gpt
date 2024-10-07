import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  // Use the hook to fetch the trailer
  useMovieTrailer(movieId);

  // Access trailer video from the Redux store
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  console.log("Trailer Video:", trailerVideo);
  // Check if trailerVideo exists
  if (!trailerVideo || !trailerVideo.key) {
    return (
      <div className="h-full w-full max-h-[1000px] flex items-center justify-center bg-black text-white">
        <h2>No trailer available</h2>
      </div>
    );
  }

  return (
    <div className="h-full w-full max-h-[1000px] overflow-hidden">
      <iframe
        className="w-screen aspect-video scale-150"
        src={
          `https://www.youtube.com/embed/${trailerVideo.key}` +
          "?&autoplay=1&mute=1&controls=0&loop=1&rel=0&playlist=" +
          trailerVideo.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
