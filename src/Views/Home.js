import { useEffect, useState } from 'react';
import { MovieService } from '../api/MoviesService';
import { Movie } from '../Components/Movie';

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
