import { useEffect, useState } from 'react';
import { MovieService } from '../api/MoviesService';
import { MovieList } from '../Components/MovieList';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  const getPopularMovies = async () => {
    const {
      data: { results },
    } = await MovieService.getPopularMovies();

    setMovies(results);
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
  return (
    <div className="container">
      <MovieList movies={movies} />
    </div>
  );
};
