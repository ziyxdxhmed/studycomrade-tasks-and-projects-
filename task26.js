import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams();
  const movie = useSelector(state => state.movies.movies.find(m => m.id === parseInt(id)));

  if (!movie) return <p>Movie not found</p>;

  return (
    <>
      <h2>{movie.title}</h2>
      <img src={movie.url} alt={movie.title} className="img-fluid mb-3" />
      <p>Album ID: {movie.albumId}</p>
      <Link to="/movies">Back to Movies</Link>
    </>
  );
};

export default MovieDetail;
