import AdditionalInformation from 'components/AdditionalInformation/AdditionalInformation';

const MovieCard = ({
  movieDetails: {
    id,
    // backdrop_path,
    // poster_path,
    title,
    vote_average,
    overview,
    genres,
  },
}) => {
  function getGenres() {
    if (genres === undefined) {
      return;
    } else {
      return genres.map(genre => {
        return `${genre.name},`;
      });
    }
  }

  // if (backdrop_path === null && poster_path === null) {
  //   return (backdrop_path = 'Coming-soon.jpg');
  // } else if (backdrop_path === null) {
  //   return (backdrop_path = `https://image.tmdb.org/t/p/original/${poster_path}`);
  // } else if (poster_path === null) {
  //   return (backdrop_path = `https://image.tmdb.org/t/p/original/${backdrop_path}`);
  // }
  // {
  //   `https://image.tmdb.org/t/p/original/${backdrop_path}`;
  // }

  return (
    <section>
      <img src="" alt="" />
      <div>
        <h2>{title}</h2>
        <p>User score: {(vote_average * 10).toFixed()}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{getGenres()}</p>
      </div>
      <AdditionalInformation />
    </section>
  );
};

export default MovieCard;
