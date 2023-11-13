import { useEffect, useState,} from 'react';
// import { NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';
import api from 'api';

const Movies = () => {
  const [filmQuery, setFilmQuery] = useState('');
  const [films, setFilms] = useState([]);

  useEffect(()=> {
    if (filmQuery === ''){
      return;
    }
   const fetchMovies = async q => {
    try {
      const {results} = await api.fetchSearchMovie(q);
      setFilms(...results);
    } catch (error) {
      
    }
   }
   fetchMovies(filmQuery);
  }, [filmQuery, films]);

  const onSubmit = e => {
    e.preventDefault();
    const filmQuery = e.target.elements.film.value.trim();
    if (filmQuery === '') {
      return toast.error(
        `Sorry, we can't submit empty request. Please, write what You want to search.`
      );
    }
    setFilmQuery(filmQuery);
    setFilms([]);
    e.target.reset();
  };
  return (
    <>
    <form onSubmit={e => onSubmit(e)}>
      <input
        type="text"
        name="film"
        autoComplete="off"
        autoFocus
        placeholder="Write to search movie..."
      />
      <button type="submit">Search</button>
    </form>
    {/* <ul>
        {films.map(film => (
          <li key={film.id}>
            <NavLink to={`/movies/:${film.id}`}>{film.original_title}</NavLink>
          </li>
        ))}
      </ul> */}
    </>
  );
};

export default Movies;
