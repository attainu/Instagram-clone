const API_KEY = "c2d5579d618254f564c00320d87fad1e";
const BASE_URL = "https://api.themoviedb.org/3"
const request = {
    fetchNetflixOriginals: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTrending: `${BASE_URL}/trending/all/day?api_key=${API_KEY}`,
    fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchActionMovies: `${BASE_URL}/discover/movie/?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `${BASE_URL}/discover/movie/?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `${BASE_URL}/discover/movie/?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `${BASE_URL}/discover/movie/?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentries: `${BASE_URL}/discover/movie/?api_key=${API_KEY}&with_genres=99`,
}
export default request;