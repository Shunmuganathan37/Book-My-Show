import React from 'react';
import './Music.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

import Music1 from '../Images/music1.avif';
import Music2 from '../Images/music2.avif';
import Music3 from '../Images/music3.avif';
import Music4 from '../Images/music4.avif';
import Music5 from '../Images/music5.avif';

const Music = () => {
  return (
    <Container className="my-5 ps-5 ">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="heading">
          Your <span>Studio</span> Music
        </h1>
      </div>

      <Row > 
        <Col md={4} lg={2} className="mb-4">
          <div className="music-item">
            <img src={Music1} alt="Music Event 1" className="w-100" />
            <h5>Ed Sheeran: +-=÷x India Tour 2025 in CHENNAI</h5>
            <p>YMCA Grounds : Chennai Concerts</p>
            <Button variant="link" href="#" className="text-decoration-none">View Event</Button>
          </div>
        </Col>

        <Col md={4} lg={2} className="mb-4">
          <div className="music-item">
            <img src={Music2} alt="Music Event 2" className="w-100" />
            <h5>SAARANG'25 POPULAR NIGHT</h5>
            <p>IIT Madras Open Air Theater : CHENNAI Music Festivals</p>
            <Button variant="link" href="#" className="text-decoration-none">View Event</Button>
          </div>
        </Col>

        <Col md={4} lg={2} className="mb-4">
          <div className="music-item">
            <img src={Music3} alt="Music Event 3" className="w-100" />
            <h5>SAARANG'25 - EDM NIGHT</h5>
            <p>IIT Madras Open Air Theater : CHENNAI concerts</p>
            <Button variant="link" href="#" className="text-decoration-none">View Event</Button>
          </div>
        </Col>

        <Col md={4} lg={2} className="mb-4">
          <div className="music-item">
            <img src={Music4} alt="Music Event 4" className="w-100" />
            <h5>SPB CLASSICS by SPB CHARAN & PRIYANKA</h5>
            <p>Kamarajar Arangam : Chennai Concerts</p>
            <Button variant="link" href="#" className="text-decoration-none">View Event</Button>
          </div>
        </Col>

        <Col md={4} lg={2} className="mb-4">
          <div className="music-item">
            <img src={Music5} alt="Music Event 5" className="w-100" />
            <h5>TIMELESS-Melodies of a lifetime- K.S Chithra Live</h5>
            <p>YMCA Grounds : Chennai Concerts</p>
            <Button variant="link" href="#" className="text-decoration-none">View Event</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Music;
