import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import api from 'api';
import SearchMovieForm from 'components/SearchMovieForm/SearchMovieForm';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
import { MoviesSection } from './Movies.styled';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get('query') ?? '';

  useEffect(() => {
    if (value === '') {
      return;
    }
    const controller = new AbortController();
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await api.fetchSearchMovie(value, controller);
        if (data === undefined) {
          return;
        } else if (data.results.length === 0) {
          return toast.error(
            `Sorry, we didn't find any movie. Please, try to write another one.`
          );
        }
        setFilms(data.results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
          console.log(error.message);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
    return () => {
      controller.abort();
    };
  }, [value]);

  const onSubmit = e => {
    e.preventDefault();
    const newQuery = e.target.elements.film.value.trim();
    if (newQuery === '') {
      return toast.error(
        `Sorry, we can't submit empty request. Please, write what You want to search.`
      );
    }
    setSearchParams({ query: newQuery });
    setFilms([]);
    e.target.reset();
  };
  return (
    <MoviesSection>
      <SearchMovieForm onSubmit={onSubmit} />
      {films.length > 0 && <MoviesList films={films} />}
      {loading && <Loader loading={loading} />}
      {error && <p>Sorry, something went wrong. Please, try to update page.</p>}
    </MoviesSection>
  );
};

export default Movies;
