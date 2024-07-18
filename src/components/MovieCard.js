import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="group w-36 md:w-56 lg:w-72 xl:w-80 pr-4 bg-zinc-900 relative overflow-hidden">
      <div className="relative w-full h-64 md:h-80 lg:h-96 xl:h-[25rem]">
        <img
          alt="Movie Card"
          src={IMG_CDN_URL + posterPath}
          className="absolute inset-0 object-cover transition duration-300 shadow-xl rounded-md group-hover:opacity-50 w-full h-full"
        />
        <div
          className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition duration-300 ease-in-out flex items-center justify-center opacity-0 group-hover:opacity-100"
        >
          {/* Add overlay content here if needed */}
        </div>
      </div>
      <div
        className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-105 group-hover:-translate-y-[4vw] group-hover:translate-x-[2vw] group-hover:opacity-100"
      >
        <img
          alt="Movie Card"
          src={IMG_CDN_URL + posterPath}
          className="cursor-pointer object-cover transition duration-300 shadow-xl rounded-t-md w-full h-full"
        />
        <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
          <div className="flex flex-row items-center gap-4">
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
