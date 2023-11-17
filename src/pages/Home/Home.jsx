import { useEffect, useState } from 'react';
import api from 'api';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
import { HomeSection } from './Home.styled';
const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const { results } = await api.fetchTrendsMovies(controller);
        setFilms([...results]);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(error.message);
        }
        setError(null);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <HomeSection>
      <h1>Trending today</h1>
      {films.length > 0 && <MoviesList films={films} />}
      {loading && <Loader loading={loading} />}
      {error && <p>Sorry, something went wrong. Please, try to update page.</p>}
    </HomeSection>
  );
};

export default Home;
