const API_KEY = "97458827f910bcb9b6f683ff63c39c5d";

export default {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchAnime: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchMadeInIndia: `/discover/movie?api_key=${API_KEY}&region=IN`,
  fetchTVComedies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchNewOnNetflix: `/discover/tv?api_key=${API_KEY}&sort_by=primary_release_date.desc`,
  fetchUSTVShows: `/discover/tv?api_key=${API_KEY}&with_origin_country=US`,
  fetchJapaneseAnime: `/discover/tv?api_key=${API_KEY}&with_genres=16&with_origin_country=JP`,
  fetchCriticallyAcclaimedTVShows: `/discover/tv?api_key=${API_KEY}&vote_average.gte=8`,
  fetchChildrenAndFamilyTV: `/discover/tv?api_key=${API_KEY}&with_genres=10762`,
};
