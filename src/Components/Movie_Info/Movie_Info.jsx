import React from 'react';
import './Movie_Info.css';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

import Background from '../Images/mufasa-banner';
import mufasa from '../Images/rec-movie2.avif';
import viduthalai from '../Images/rec-movie1.avif';
import viduthalaiBanner from '../Images/viduthalai-banner';
import Marco from '../Images/rec-movie3.avif';
import Identity from '../Images/rec-movie4.avif';
import Pushpa from '../Images/rec-movie5.avif';

const Movie_Info = () => {
  const { movieId } = useParams();

  const movieDetails = {
    'viduthalai': {
      title: 'Viduthalai Part-2',
      description: 'A thrilling action crime drama.',
      image: viduthalai,
      banner: viduthalaiBanner,
      about: "Enlists Rafiki to relay the legend of the unlikely rise of the beloved king of the Pride Lands, introducing an orphaned cub called Mufasa, a sympathetic lion named Taka - the heir to a royal bloodline - and their expansive journey alongside an extraordinary group of misfits."
    },
    'mufasa': {
      title: 'Mufasa: The Lion King',
      description: 'Adventure and animation movie for all ages.',
      image: mufasa,
      banner: Background,
      about: "Enlists Rafiki to relay the legend of the unlikely rise of the beloved king of the Pride Lands, introducing an orphaned cub called Mufasa, a sympathetic lion named Taka - the heir to a royal bloodline - and their expansive journey alongside an extraordinary group of misfits."
    },
    'marco': {
      title: 'Marco',
      description: 'Action and Thriller.',
      image: Marco,
      about: "A thrilling adventure that explores Marco's rise to power in a world of crime and betrayal."
    },
    'Identity': {
      title: 'Identity',
      description: 'Action/Crime and Thriller',
      image: Identity,
      about: "A gripping crime thriller that follows the journey of a man trying to reclaim his life from those who betrayed him."
    },
    'Pushpa': {
      title: 'Pushpa-2',
      description: 'Action and Thriller',
      image: Pushpa,
      about: "An action-packed saga of Pushpa's journey through the rough terrains of the forest, facing challenges and enemies at every step."
    }
  };

  const movie = movieDetails[movieId];

  if (!movie) {
    return <p>Movie not found!</p>; 
  }

  return (
    <>
      
      <div className="movie-con">
        <div className="movie-row">
          <div
            className="movie-col"
            style={{
              backgroundImage: `linear-gradient(to right, #000, #fff), url(${movie.banner})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '80vh',
            }}
          >
            <Container className="d-flex justify-content-center align-items-center h-100">
              <Row className="w-100">
                <Col className="d-flex justify-content-center">
                  {movie.image && (
                    <Link to={'/movie/theater/no'}>
                      <Image src={movie.image} alt={movie.title} className="img-fluid rounded" />
                    </Link>
                  )}
                </Col>
                <Col className="d-flex flex-column justify-content-center text-center">
                  <p className="movie-para">{movie.description}</p>
                  <Link to={`/movie/${movieId}/booking`}>
                    <Button variant="danger" className="book-tickets-btn">Book Tickets</Button>
                  </Link>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>

  
      <Container className="movie-about py-5">
        <Row>
          <Col>
            <h1 className="about-movie">{movie.title}</h1>
            <p className="about-para">{movie.about}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Movie_Info;
