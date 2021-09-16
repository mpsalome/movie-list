import { Movie } from '../Components/Movie';

export const MovieList = ({movies}) => {
  return (
      <div className="row gy-5 p-3">
        {movies.map((movie) => (
          <div key={movie.id} className="col-12 col-md-6 col-lg-4">
            <Movie movie={movie}/>
          </div>
        ))}
      </div>
  );
};
