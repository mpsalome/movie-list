import { useEffect, useState } from 'react';
import { MovieService } from '../api/MoviesService';
import { Movie } from '../Components/Movie';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const {
      data: { results },
    } = await MovieService.getMovies();

    setMovies(results);
  };

  useEffect(() => {
    getMovies();
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
