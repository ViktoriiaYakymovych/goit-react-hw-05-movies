import { useEffect, useState } from 'react';
// import api from 'api';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [films,] = useState([{id:1, original_title:'name1'}]);

  useEffect(() => {
    // const fetchMovies = async () => {
    //   try {
    //     const { results } = await api.fetchTrendsMovies();
    //     setFilms(results);
    //     console.log(results);
    //   } catch (error) {}
    // };
    // fetchMovies();
  }, [films]);

  return (
    <>
      <h1>Trending today</h1>
      {films.length > 0 && <MoviesList films={films}/>}
    </>
  );
};

export default Home;
