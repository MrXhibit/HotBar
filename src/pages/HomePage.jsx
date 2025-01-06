import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';
import { fetchMovies } from '../services/api';
import HeroSection from '../components/HeroSection';
import PopularMovies from '../components/PopularMovies';
const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleSearch = async (query, type) => {
    try {
      const data = await fetchMovies(query, 1, type);
      if (data.Response === 'True') {
        setMovies(data.Search);
        setTotalPages(Math.ceil(data.totalResults / 10));
        setCurrentPage(1);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlePageChange = async (page) => {
    try{
      const data = await fetchMovies(query, page, type);
      if (data.Response === 'True') {
        setMovies(data.Search);
        setCurrentPage(page);
      }else{
        setMovies([]);
      }
    }catch(error){
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto">
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
      <div>
        <HeroSection />
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={10}
        onPageChange={handlePageChange} 
      />
    </div>
  );
};

export default HomePage;


