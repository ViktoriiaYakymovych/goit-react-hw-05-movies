import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/';
const API_KEY = '48b2bba5f96af80717b061a99685cb65';

const fetchTrendsMovies = async controller => {
  try {
    const { data } = await axios.get(
      `/3/trending/movie/day?language=en-US&api_key=${API_KEY}`,
      { signal: controller.signal }
    );
    return data;
  } catch (err) {
    if (err.code !== 'ERR_CANCELED') {
      console.log(err);
    }
  }
};

const fetchSearchMovie = async (query, controller) => {
  try {
    const { data } = await axios.get(
      `/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`,
      { signal: controller.signal }
    );
    return data;
  } catch (err) {
    if (err.code !== 'ERR_CANCELED') {
      console.log(err);
    }
  }
};

const fetchMovieDetails = async (movieId, controller) => {
  try {
    const { data } = await axios.get(
      `/3/movie/${movieId}?language=en-US&api_key=${API_KEY}`,
      { signal: controller.signal }
    );
    return data;
  } catch (err) {
    if (err.code !== 'ERR_CANCELED') {
      console.log(err);
    }
  }
};

const fetchMovieActors = async (movieId, controller) => {
  try {
    const { data } = await axios.get(
      `/3/movie/${movieId}/credits?language=en-US&api_key=${API_KEY}`,
      { signal: controller.signal }
    );
    return data;
  } catch (err) {
    if (err.code !== 'ERR_CANCELED') {
      console.log(err);
    }
  }
};

const fetchMovieReviews = async (movieId, controller) => {
  try {
    const { data } = await axios.get(
      `/3/movie/${movieId}/reviews?language=en-US&page=1&api_key=${API_KEY}`,
      { signal: controller.signal }
    );
    return data;
  } catch (err) {
    if (err.code !== 'ERR_CANCELED') {
      console.log(err);
    }
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
