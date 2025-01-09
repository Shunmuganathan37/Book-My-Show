import React from 'react';
import './Movie_Info.css'

import Background from '../Images/mufasa-banner';
import mufasa from '../Images/rec-movie2.avif';
import { Link, useParams } from 'react-router-dom';

const Movie_Info = () => {
  
  const { movieId } = useParams(); 

  const movieDetails = {
    'viduthalai': {
      title: 'Viduthalai Part-2',
      description: 'A thrilling action crime drama.',
      image :mufasa,
      
    },
    'mufasa': {
      title: 'Mufasa: The Lion King',
      description: 'Adventure and animation movie for all ages.',
      image : mufasa,
      bg : Background
    },
   
  };
  const movie = movieDetails[movieId];
  return (
  <>
    <div style={{background: Background}}>
      
     <Link to={'/movie/theater/no'}> {movie?.image && <img src={movie.image} alt={movie.title} />}</Link>
      <h1>{movie?.title}</h1>
      <p>{movie?.description}</p>

      <Link to={`/movie/${movieId}/booking`}>
          <button className="book-tickets-btn">Book Tickets</button>
        </Link>

    </div>


<div>
  ators

</div>

    </> 
  );
};

  
 
export default Movie_Info;