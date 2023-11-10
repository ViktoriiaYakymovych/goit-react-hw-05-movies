import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/';
// const API_KEY = '48b2bba5f96af80717b061a99685';

// const OPTIONS = {
//   params: {
//     language: 'en-US',
//   },
//   headers: {
//     accept: 'application/json',
//     Authorization: `Bearer ${API_KEY}`,
//   },
// };

// const fetchTrendsMovies = async () => {
//   try {
//     const response = await axios.get('/3/trending/movie/day', OPTIONS);
//     console.log(response);
//   } catch (err) {
//     console.log(err);
//   }
// };

// export default fetchTrendsMovies;