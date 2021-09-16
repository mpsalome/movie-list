import { useEffect, useState } from 'react';
import { MovieService } from '../api/MoviesService';

export const MovieDetail = (props) => {
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    const { data } = await MovieService.getMovieDetail(props.movieid);
    setMovie(data);
  };

  useEffect(() => {
    getMovie();
  });

  return (
    <>
      <div className="card-body">
        <p className="card-text">{movie.overview}</p>
        <ul className="list-group">
          <li className="list-group-item">Budget: {movie.budget} </li>
          <li className="list-group-item">
            Original Language: {movie.original_language}{' '}
          </li>
          <li className="list-group-item">Popularity: {movie.popularity} </li>
        </ul>
      </div>
    </>
  );
};
