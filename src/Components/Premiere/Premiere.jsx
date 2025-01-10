import React from 'react';
import './Premiere.css';
import { Container, Row, Col } from 'react-bootstrap';

import Pre_Banner from '../Images/premiere-banner.avif';
import pre_Movie1 from '../Images/premire1.avif';
import pre_Movie2 from '../Images/premire2.avif';
import pre_Movie3 from '../Images/premire3.avif';

const Premiere = () => {
  return (
    <main>
      <div className="premiere pre-row">
        <img src={Pre_Banner} alt="Premiere Banner" width="100%" />

        <Container className="my-5 ">
          <div className="pre-container">
            <h2 className='text-white'>Premieres</h2>
            <p className='text-white'>Brand new releases every <span>Friday</span></p>

            <Row className="g-4 ">
              <Col md={6} lg={4}>
                <div className="movie-item">
                  <img src={pre_Movie1} alt="Wicked" className="movie-img" />
                  <h5 className="pre-title text-white p-3">Wicked</h5>
                  <p  className='text-white mx-5'>English</p>
                </div>
              </Col>

              <Col md={6} lg={4}>
                <div className="movie-item">
                  <img src={pre_Movie2} alt="Gladiator II" className="movie-img" />
                  <h5 className="pre-title text-white p-3">Gladiator II</h5>
                  <p  className='text-white mx-5'>English</p>
                </div>
              </Col>

              <Col md={6} lg={4}>
                <div className="movie-item">
                  <img src={pre_Movie3} alt="Christmas Eve in Miller's Point" className="movie-img" />
                  <h5 className="pre-title text-white p-3">Christmas Eve in Miller's Point</h5>
                  <p  className='text-white mx-5'>English</p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </main>
  );
};

export default Premiere;
