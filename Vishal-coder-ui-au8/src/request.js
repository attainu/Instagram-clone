const API_KEY = "c2d5579d618254f564c00320d87fad1e";
//const BASE_URL = "https://api.themoviedb.org/3";
const request = {
  fetchPopular: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=3`,
  fetchTopRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=8`,
  fetchAdventure: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10759`,
  fetchMysterious: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=9648`
};
export default request;
