import { MovieDetail } from "./MovieDetail"
import { useDispatch } from 'react-redux'
import { addMovie, removeMovie } from "../store/actions/movies";
import { useSelector } from 'react-redux';

export const Movie = ({ movie }) => {

  const dispatch = useDispatch()
  const favorites = useSelector(state => state.favorites)

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
        {
          favorites.movies.find( m => m.id === movie.id) 
          ? <button className="btn btn-light" onClick={() => dispatch(removeMovie(movie))}>Remove from my Favorites</button>
          : <button className="btn btn-dark" onClick={() => dispatch(addMovie(movie))}>Add to my Favorites</button>
        }
      </div>
    </div>
  );
};
