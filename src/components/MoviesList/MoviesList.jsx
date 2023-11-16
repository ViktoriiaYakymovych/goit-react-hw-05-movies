import { NavLink, useLocation } from 'react-router-dom';

const MoviesList = ({ films }) => {
  const location = useLocation();
  return (
    <ul>
      {films.map(film => (
        <li key={film.id}>
          <NavLink to={`/movies/:${film.id}`} state={{ from: location }}>
            {film.original_title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
