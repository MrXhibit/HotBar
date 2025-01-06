import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../services/api';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMovieDetails(id);
      setMovie(data);
    };
    fetchData();
  }, [id]);

  return (
    <div className="container mx-auto">
      {movie ? (
        <div className="flex flex-col md:flex-row gap-4">
          <img src={movie.Poster} alt={movie.Title} className="w-64 h-auto mt-2" />
          <div>
            <h1 className="text-4xl inline-block mt-2 text-white font-bold bg-gradient-to-r from-black to-slate-300"><strong>Movie Name: </strong>{movie.Title}</h1>
            <p className='text-xl font-bold font-mono'>Discription: {movie.Plot}</p>
            <p><strong>Released:</strong> {movie.Released}</p>
             <p><strong>Country:</strong> {movie.Country}</p>
             <p><strong>Language:</strong> {movie.Language}</p>
              <p><strong>Runtime:</strong> {movie.Runtime}</p>
            <p><strong>Director:</strong> {movie.Director}</p>
            <p><strong>Actors:</strong> {movie.Actors}</p>
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Year:</strong> {movie.Year}</p>
            <p className='text-red-600'><strong>Ratings:</strong> {movie.imdbRating}</p>
          </div>
        </div>
      ) : (
        <p className='text-4xl'>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetailsPage;


