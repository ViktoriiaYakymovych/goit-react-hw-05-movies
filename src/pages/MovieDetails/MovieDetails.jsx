import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import api from 'api';
import Loader from 'components/Loader/Loader';
import MovieCard from 'components/MovieCard/MovieCard';
import { MovieDetailsSection, Link } from './MovieDetails.styled';

const MovieDetails = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const controller = new AbortController();
    const id = movieId.slice(1);
    async function fetchDetails() {
      try {
        setLoading(true);
        const resp = await api.fetchMovieDetails(id, controller);
        if (!resp) {
          return;
        }
        setMovieDetails(resp);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
          console.log(error.message);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchDetails();
    return () => {
      controller.abort();
    };
  }, [movieId]);
  return (
    <MovieDetailsSection>
      <Link to={backLinkHref}>
        <FaArrowLeft />
        Back to movies
      </Link>
      <MovieCard movieDetails={movieDetails} />
      {loading && <Loader loading={loading} />}
      {error && <p>Sorry, something went wrong. Please, try to update page.</p>}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </MovieDetailsSection>
  );
};

export default MovieDetails;
