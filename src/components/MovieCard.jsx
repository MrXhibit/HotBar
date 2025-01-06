import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="border rounded shadow p-4">
      <img 
      src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover rounded" />
      <h3 className="font-bold text-lg mt-2">{movie.Title}</h3>
      <p>{movie.Year}</p>
      <Link
        to={`/movie/${movie.imdbID}`}
        className="text-red-500 mt-2 inline-block"
      >
        View Details
      </Link>
    </div>
  );
};

export default MovieCard;


