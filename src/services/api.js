import axios from 'axios';
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;


const BASE_URL = 'https://www.omdbapi.com/';

export const fetchMovies = async (searchTerm, page = 1, type = '') => {
  const response = await axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      s: searchTerm,
      page,
      type,
    },
  });
  return response.data;
};

export const fetchMovieDetails = async (id) => {
  const response = await axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      i: id,
    },
  });
  return response.data;
};

export const fetchPopularMovies = async (searchKeyword) => {
  const response = await axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      s: 'searchKeyword',
    },
  });
  return response.data;
};