import React, { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../services/api';
import MovieCard from './MovieCard';

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

 
  const popularKeywords = ['Avengers', 'Batman', 'Spider-Man', 'Harry Potter'];

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const promises = popularKeywords.map((keyword) => fetchPopularMovies(keyword));
        const results = await Promise.all(promises);

        const allMovies = results
          .map((result) => result.Search || [])
          .flat();

        setMovies(allMovies);
      } catch (err) {
        setError('Failed to load popular movies.');
        console.error(err);
      }
    };

    loadPopularMovies();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Popular Movies</h2>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        ) : (
          <p className="text-center col-span-4">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default PopularMovies;
