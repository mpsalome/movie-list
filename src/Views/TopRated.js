import { useEffect, useState } from 'react';
import { MovieService } from '../api/MoviesService';
import { Movie } from '../Components/Movie';

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
