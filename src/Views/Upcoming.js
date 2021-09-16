import { useEffect, useState } from 'react';
import { MovieService } from '../api/MoviesService';
import { Movie } from '../Components/Movie';

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
