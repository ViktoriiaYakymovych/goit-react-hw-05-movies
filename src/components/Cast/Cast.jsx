import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from 'api';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const controller = new AbortController();
    const id = movieId.slice(1);
    async function fetchReviews() {
      try {
        setLoading(true);
        const resp = await api.fetchMovieActors(id, controller);
        if (resp === undefined) {
          return;
        }
        setMovieCast(resp.cast);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
          console.log(error.message);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchReviews();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <section>
      <ul>
        {movieCast.length === 0 ? (
          <p>We don't have any information about actors.</p>
        ) : (
          movieCast.map(cast => (
            <li key={cast.id}>
              <img
                src={
                  cast.profile_path &&
                  `https://image.tmdb.org/t/p/original/${cast.profile_path}`
                }
                alt={cast.name}
              />
              <p>{cast.name}</p>
              <p>Character: {cast.character}</p>
            </li>
          ))
        )}
      </ul>
      {loading && <Loader loading={loading} />}
      {error && <p>Sorry, something went wrong. Please, try to update page.</p>}
    </section>
  );
};

export default Cast;
