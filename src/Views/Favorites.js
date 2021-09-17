import { useSelector } from 'react-redux';
import { MovieList } from '../Components/MovieList';

export const Favorites = () => {
  
  const favorites = useSelector(state => state.favorites)

  return (
    <div className="container">
      <MovieList movies={favorites.movies} />
    </div>
  );
};
