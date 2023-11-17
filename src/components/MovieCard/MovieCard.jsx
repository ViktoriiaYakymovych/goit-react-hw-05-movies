import AdditionalInformation from 'components/AdditionalInformation/AdditionalInformation';
import { MovieWrapper, Img, Descriprion } from './MovieCard.styled';

const MovieCard = ({
  movieDetails: {
    backdrop_path,
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genres,
  },
}) => {
  const allGenres = [];
  function getGenres() {
    genres && genres.map(genre => allGenres.push(genre.name));
    return allGenres.toString();
  }

  const firstImg = `https://image.tmdb.org/t/p/original/${backdrop_path}`;
  const secondImg = `https://image.tmdb.org/t/p/original/${poster_path}`;
  const defaultImg =
    'https://image.tmdb.org/t/p/original//nQvoM7BMswq1raENOkOjCBt94gk.jpg';

  function getDate() {
    if (release_date === undefined) {
      return;
    }
    return release_date.slice(0, 4);
  }

  getDate();
  return (
    <>
      <MovieWrapper>
        <Img
          src={
            (backdrop_path && firstImg) ||
            (poster_path && secondImg) ||
            defaultImg
          }
          alt={title}
        />
        <Descriprion>
          <h2>{`${title} (${getDate()})`}</h2>
          <p>User score: {(vote_average * 10).toFixed()}%</p>
          {overview === '' ? (
            <p>We don't have any overwiew.</p>
          ) : (
            <div>
              <h3>Overview</h3>
              <p>{overview}</p>
            </div>
          )}
          <h3>Genres</h3>
          <p>{getGenres()}</p>
        </Descriprion>
      </MovieWrapper>
      <AdditionalInformation />
    </>
  );
};

export default MovieCard;
