import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';  
import './Booking.css';

const Booking = () => {
  const { movieId } = useParams(); 
  const navigate = useNavigate();   

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState(["A10", "B5", "C8"]); 

  const ticketPrice = 120; // Ticket price for one seat

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

  // Calculate the total price based on the selected seats
  const totalPrice = selectedSeats.length * ticketPrice;

  const confirmBooking = () => {
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat.');
    } else {
      alert(`Booking Confirmed for seats: ${selectedSeats.join(', ')}\nTotal Price: ₹${totalPrice}`);
      navigate('/');
    }
  };

  return (
    <div className="booking-container">
      <h1>Book Tickets for {movie?.title}</h1>

      <div className="seat-grid">
        {[...Array(10)].map((_, rowIndex) => (
          <div key={rowIndex} className="seat-row">
            {[...Array(10)].map((_, seatIndex) => {
              const seat = `${String.fromCharCode(65 + rowIndex)}${seatIndex + 1}`;
              return (
                <button
                  key={seat}
                  className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''} ${bookedSeats.includes(seat) ? 'booked' : ''}`}
                  onClick={() => toggleSeatSelection(seat)}
                  disabled={bookedSeats.includes(seat)} 
                >
                  {seat}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      <div className="total-price">
        <h3>Total Price: ₹{totalPrice}</h3>
      </div>

      <button className="confirm-btn" onClick={confirmBooking}>
        Confirm Booking
      </button>
    </div>
  );
};

export default Booking;
