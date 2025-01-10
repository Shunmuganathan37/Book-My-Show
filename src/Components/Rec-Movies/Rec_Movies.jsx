import React from 'react';
import './Rec_Movies.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Viduthalai from '../Images/rec-movie1.avif';
import Mufasa from '../Images/rec-movie2.avif';
import Marco from '../Images/rec-movie3.avif';
import Identity from '../Images/rec-movie4.avif';
import Pushpa from '../Images/rec-movie5.avif';

import Banner1 from '../Images/banner book my show stream.avif';


import Banner from '../Banner/Banner';

const Rec_Movies = () => {
  return (
<>
<Banner/>
    <div className="container">
      <div className="topic d-flex justify-content-between align-items-center">
        <p className="heading">Recommended <span>Movies</span></p>
      </div>

      <div className="recommended-movies">
        <Container fluid className="my-4">
          <Row xs={1} sm={2} md={3} lg={5} className="text-center no-gap">

            <Col className="movie-col">
              <Link className="movie-link" to="/Movies/viduthalai">
                <div className="movie-item">
                  <img src={Viduthalai} alt="Viduthalai Part-2" className="movie-img img-fluid" style={{margin: "0"}}/>
                  <h5 className="text-dark">Viduthalai Part-2</h5>
                  <p className="text-secondary">Action/Crime/Drama</p>
                </div>
              </Link>
            </Col>

            <Col className="movie-col">
              <Link className="movie-link" to="/Movies/mufasa">
                <div className="movie-item">
                  <img src={Mufasa} alt="Mufasa: The Lion King" className="movie-img img-fluid" style={{margin: "0"}}/>
                  <h5 className="text-dark">Mufasa: The Lion King</h5>
                  <p className="text-secondary">Adventure/Animation/Drama</p>
                </div>
              </Link>
            </Col>

            <Col className="movie-col">
              <Link className="movie-link" to="/Movies/marco">
                <div className="movie-item">
                  <img src={Marco} alt="Marco" className="movie-img img-fluid" style={{margin: "0"}} />
                  <h5 className="text-dark">Marco</h5>
                  <p className="text-secondary">Action/Thriller</p>
                </div>
              </Link>
            </Col>

            <Col className="movie-col">
              <Link className="movie-link" to="/Movies/identity">
                <div className="movie-item">
                  <img src={Identity} alt="Identity" className="movie-img img-fluid" style={{margin: "0"}}/>
                  <h5 className="text-dark">Identity</h5>
                  <p className="text-secondary">Action/Crime/Thriller</p>
                </div>
              </Link>
            </Col>

            <Col className="movie-col">
              <Link className="movie-link" to="/Movies/pushpa-2">
                <div className="movie-item">
                  <img src={Pushpa} alt="Pushpa 2: The Rule" className="movie-img img-fluid" style={{margin: "0"}}/>
                  <h5 className="text-dark">Pushpa 2: The Rule</h5>
                  <p className="text-secondary">Action/Thriller</p>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="banner">
        <img src={Banner1} alt="Banner" className="img-fluid" />
      </div>
    </div>
    </>
  );
};

export default Rec_Movies;
