import { useEffect, useState } from 'react';
import { MovieService } from '../api/MoviesService';
import { MovieList } from '../Components/MovieList';

export const Upcoming = () => {
  const [movies, setMovies] = useState([]);

  const getUpcomingMovies = async () => {
    const {
      data: { results },
    } = await MovieService.getUpcomingMovies();

    setMovies(results);
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
  return (
    <div className="container">
      <MovieList movies={movies} />
    </div>
  );
};
