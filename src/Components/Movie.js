import { Link } from 'react-router-dom';

export const Movie = ({ movie }) => {
  return (
    <div className="card movie-item">
      <img
        className="card-img-top"
        src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <Link to={`/movie/${movie.id}`} className="btn btn-primary">
          See more details
        </Link>
      </div>
    </div>
  );
};




