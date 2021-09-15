import { useEffect, useState } from 'react';
import { MovieService } from '../api/MoviesService';
import { Link } from 'react-router-dom';

export const MovieDetail = (props) => {
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    const { data } = await MovieService.getMovieDetail(props.match.params.id);
    setMovie(data);
  };

  useEffect(() => {
    getMovie();
  });

  return (
    <div className="container">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="card col-4">
          <img
            className="card-img-top"
            src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
            alt={`${movie.title} poster`}
          />
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">{movie.overview}</p>
          </div>
          <ul className="list-group">
            <li className="list-group-item">Budget: {movie.budget} </li>
            <li className="list-group-item">
              Original Language: {movie.original_language}{' '}
            </li>
            <li className="list-group-item">Popularity: {movie.popularity} </li>
          </ul>
          <div className="card-body">
            <Link to={`/`} className="btn btn-primary card-link">
              Back to all movies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
