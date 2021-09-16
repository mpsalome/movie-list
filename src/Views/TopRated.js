import { useEffect, useState } from 'react';
import { MovieService } from '../api/MoviesService';
import { MovieList } from '../Components/MovieList';

export const TopRated = () => {
  const [movies, setMovies] = useState([]);

  const getTopRatedMovies = async () => {
    const {
      data: { results },
    } = await MovieService.getTopRatedMovies();

    setMovies(results);
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
  return (
    <div className="container">
      <MovieList movies={movies} />
    </div>
  );
};
