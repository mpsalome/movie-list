import { useEffect, useState } from 'react';
import { MovieService } from '../api/MoviesService';
import { MovieList } from '../Components/MovieList';

export const NowPlaying = () => {
  const [movies, setMovies] = useState([]);

  const getNowPlayingMovies = async () => {
    const {
      data: { results },
    } = await MovieService.getNowPlayingMovies();

    setMovies(results);
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  return (
    <div className="container">
      <MovieList movies={movies} />
    </div>
  );
};
