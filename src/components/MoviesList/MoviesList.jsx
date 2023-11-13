import { NavLink } from 'react-router-dom';

const MoviesList = ({ films }) => {
  return (
    <ul>
      {films.map(film => (
        <li key={film.id}>
          <NavLink to={`/movies/:${film.id}`}>{film.original_title}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
