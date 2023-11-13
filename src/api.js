import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/';
const API_KEY = '48b2bba5f96af80717b061a99685cb65';

const fetchTrendsMovies = async () => {
  try {
    const { data } = await axios.get(
      `/3/trending/movie/day?language=en-US&api_key=${API_KEY}`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

const fetchSearchMovie = async query => {
  try {
    const { data } = await axios.get(
      `/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

const fetchMovieDetails = async movieId => {
  try {
    const { data } = await axios.get(
      `/3/movie/${movieId}?language=en-US&api_key=${API_KEY}`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

const fetchMovieActors = async movieId => {
  try {
    const { data } = await axios.get(
      `/3/movie/${movieId}/credits?language=en-US&api_key=${API_KEY}`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

const fetchMovieReviews = async movieId => {
  try {
    const { data } = await axios.get(
      `/3/movie/${movieId}/reviews?language=en-US&page=1&api_key=${API_KEY}`
    );
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

const api = {
  fetchTrendsMovies,
  fetchSearchMovie,
  fetchMovieDetails,
  fetchMovieActors,
  fetchMovieReviews,
};

export default api;