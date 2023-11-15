import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from 'api';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movieReviews, setMovieReviews] = useState([]);
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
        const resp = await api.fetchMovieReviews(id, controller);
        if (resp === undefined) {
          return;
        }
        setMovieReviews(resp.results);
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
      {movieReviews.length === 0 ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        <ul>
          {movieReviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
      {loading && <Loader loading={loading} />}
      {error && <p>Sorry, something went wrong. Please, try to update page.</p>}
    </section>
  );
};

export default Reviews;
