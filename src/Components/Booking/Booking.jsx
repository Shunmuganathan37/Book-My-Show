import React, { useState } from 'react';
import './Booking.css';
import { useParams, useNavigate } from 'react-router-dom';  
import { Button, Form, Row, Col, Container } from 'react-bootstrap';   
import 'bootstrap/dist/css/bootstrap.min.css';  


const Booking = () => {
  const { movieId } = useParams(); 
  const navigate = useNavigate();   

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState(["A10", "B5", "C8","A1",'A2','A3','A4']); 
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');

  const ticketPrice = 120; 

  const movieDetails = {
    'viduthalai': { title: 'Viduthalai Part-2' },
    'mufasa': { title: 'Mufasa: The Lion King' },
    'Infinity': { title: 'Infinity' }
  };

  const movie = movieDetails[movieId];

  const toggleSeatSelection = (seat) => {
    if (bookedSeats.includes(seat)) {
      alert("This seat is already booked.");
      return;
    }
    setSelectedSeats((prevSelected) =>
      prevSelected.includes(seat)
        ? prevSelected.filter((s) => s !== seat)
        : [...prevSelected, seat]
    );
  };

  const totalPrice = selectedSeats.length * ticketPrice;

  const confirmBooking = () => {
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat.');
    } else if (!name || !contact) {
      alert('Please enter your name and contact number.');
    } else {
      alert(`Booking Confirmed for seats: ${selectedSeats.join(', ')}\nTotal Price: ₹${totalPrice}\nName: ${name}\nContact: ${contact}`);
      navigate('/');   
    }
  };

  return (
    <Container className="booking-container" style={{ padding: '30px' }}>
      <h1 className="text-center mb-4">Book Tickets for {movie?.title}</h1>

      <div className="seat-grid">
        {[...Array(10)].map((_, rowIndex) => (
          <Row key={rowIndex} className="seat-row justify-content-center mb-3">
            {[...Array(10)].map((_, seatIndex) => {
              const seat = `${String.fromCharCode(65 + rowIndex)}${seatIndex + 1}`;
              return (
                <Col key={seat} md="auto">
                  <Button
                    className={`seat 
                      ${selectedSeats.includes(seat) ? 'selected' : ''} 
                      ${bookedSeats.includes(seat) ? 'booked' : ''} 
                      ${!bookedSeats.includes(seat) && !selectedSeats.includes(seat) ? 'available' : ''}
                    `}
                    variant="outline-primary"
                    onClick={() => toggleSeatSelection(seat)}
                    disabled={bookedSeats.includes(seat)} 
                    size="sm"
                  >
                    {seat}
                  </Button>
                </Col>
              );
            })}
          </Row>
        ))}
      </div>

      <div className="total-price text-center mb-4">
        <h3>Total Price: ₹{totalPrice}</h3>
      </div>

      <Form>
        <Row className="mb-3">
          <Col>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="Enter your phone number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </Col>
        </Row>
      </Form>

      <div className="text-center">
        <Button className="confirm-btn" variant="danger" onClick={confirmBooking}>
          Confirm Booking
        </Button>
      </div>
    </Container>
  );
};

export default Booking;
