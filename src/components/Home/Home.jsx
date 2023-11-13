import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
// import api from 'api';

const Home = () => {
  const [films, ] = useState([{id:1, original_title:'name1'}]);

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
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <NavLink to={`/movies/:${film.id}`}>{film.original_title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
