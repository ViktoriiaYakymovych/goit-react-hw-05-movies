import { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import api from 'api';
import SearchMovieForm from 'components/SearchMovieForm/SearchMovieForm';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [filmQuery, setFilmQuery] = useState('');
  // const [filmQuery, setFilmQuery] = useSearchParams();
  // const film = filmQuery.get("film") ?? "";

  useEffect(() => {
    if (filmQuery === '') {
      return;
    }
    const controller = new AbortController();
    const fetchMovies = async q => {
      try {
        setLoading(true);
        const { results } = await api.fetchSearchMovie(q, controller);
        setFilms(results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
          console.log(error.message);
        }
      } finally {
        setLoading(false);
      }
    };
     fetchMovies(filmQuery);
    return () => {
      controller.abort();
    };
  }, [filmQuery]);

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
      <SearchMovieForm onSubmit={onSubmit} />
      {films.length > 0 && <MoviesList films={films} />}
      {loading && <Loader loading={loading}/>}
      {error && <p>Sorry, something went wrong. Please, try to update page.</p>}
    </>
  );
};

export default Movies;
