import { useEffect, useState,} from 'react';
import toast from 'react-hot-toast';
// import api from 'api';
import SearchMovieForm from 'components/SearchMovieForm/SearchMovieForm';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [filmQuery, setFilmQuery] = useState('');
  const [films, setFilms] = useState([]);

  useEffect(()=> {
    if (filmQuery === ''){
      return;
    }
  //  const fetchMovies = async q => {
  //   try {
  //     const {results} = await api.fetchSearchMovie(q);
  //     setFilms(results);
  //   } catch (error) {
      
  //   }
  //  }
  //  fetchMovies(filmQuery);
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
      <SearchMovieForm onSubmit={onSubmit} />
      {films.length > 0 && <MoviesList films={films}/>}
    </>
  );
};

export default Movies;
