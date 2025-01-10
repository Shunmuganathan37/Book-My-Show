import React from 'react';
import './Live_Events.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

import Live1 from '../Images/live-events1.avif';
import Live2 from '../Images/live-events2.avif';
import Live3 from '../Images/live-events3.avif';
import Live4 from '../Images/live-events4.avif';
import Live5 from '../Images/live-events5.avif';

const Live_Events = () => {
  return (
    <main>
      <div className="live-events">
        <h2 className="head">The Best Of Live Events</h2>

        <Container className="my-5">
          <Row className="g-4">
            <Col md={4} sm={6}>
              <Card>
                <Card.Img variant="top" src={Live1} alt="Event 1" />
              </Card>
            </Col>

            <Col md={4} sm={6}>
              <Card>
                <Card.Img variant="top" src={Live2} alt="Event 2" />
              </Card>
            </Col>

            <Col md={4} sm={6}>
              <Card>
                <Card.Img variant="top" src={Live3} alt="Event 3" />
              </Card>
            </Col>

            <Col md={4} sm={6}>
              <Card>
                <Card.Img variant="top" src={Live4} alt="Event 4" />
              </Card>
            </Col>

            <Col md={4} sm={6}>
              <Card>
                <Card.Img variant="top" src={Live5} alt="Event 5" />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
};

export default Live_Events;
