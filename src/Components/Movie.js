import { MovieDetail } from "./MovieDetail"

export const Movie = ({ movie }) => {
  return (
    <div className="card movie-item">
      <img
        className="card-img-top"
        src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
        alt={`${movie.title} poster`}
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <MovieDetail movieid={movie.id}/>
      </div>
    </div>
  );
};
