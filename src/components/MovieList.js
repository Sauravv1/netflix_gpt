import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-10">
      <h1 className=" text-lg md:text-3xl py-4 font-bold text-white">{title}</h1>
      <div className="flex overflow-x-auto scrollbar-hide cursor-pointer ">
        <div className='flex items-center '>
        {movies?.map((movie) => {
          return(
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
)
})
}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
