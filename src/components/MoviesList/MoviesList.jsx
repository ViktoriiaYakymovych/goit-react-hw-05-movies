import { useLocation } from 'react-router-dom';
import { MovieUl, Link } from './MoviesList.styled';

const MoviesList = ({ films }) => {
  const location = useLocation();
  return (
    <MovieUl>
      {films.map(film => (
        <li key={film.id}>
          <Link to={`/movies/:${film.id}`} state={{ from: location }}>
            {film.original_title}
          </Link>
        </li>
      ))}
    </MovieUl>
  );
};

export default MoviesList;
