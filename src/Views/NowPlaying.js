import { useEffect, useState } from 'react';
import { MovieService } from '../api/MoviesService';
import { Movie } from '../Components/Movie';

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
      <div className="row gy-5">
        {movies.map((movie) => (
          <div key={movie.id} className="col-3">
            <Movie movie={movie}/>
          </div>
        ))}
      </div>
    </div>
  );
};
