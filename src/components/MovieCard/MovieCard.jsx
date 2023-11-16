import AdditionalInformation from 'components/AdditionalInformation/AdditionalInformation';

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

  const firstImg =
    backdrop_path && `https://image.tmdb.org/t/p/original/${backdrop_path}`;
  const secondImg =
    poster_path && `https://image.tmdb.org/t/p/original/${poster_path}`;

  function getDate() {
    if (release_date === undefined) {
      return;
    }
    return release_date.slice(0, 4);
  }

  getDate();
  return (
    <section>
      <img src={firstImg || secondImg} alt={title} />
      <div>
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
      </div>
      <AdditionalInformation />
    </section>
  );
};

export default MovieCard;
