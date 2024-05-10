
import './App.css';
import CoachLayout from './components/CoachLayout.js'
import ReservationForm from './components/ReservationForm.js'
import React, { useState, useEffect } from 'react';

function App() {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    // Fetch seat data from backend API
    fetchSeats();
  }, []);

  const fetchSeats = async () => {
    try {
      const response = await fetch('http://localhost:8090/seat/getSeats');
      const data = await response.json();
      
      setSeats(data);
      console.log(seats);
    } catch (error) {
      console.error('Error fetching seat data:', error);
    }
  };

  const handleSeatSelection = (seatNumber) => {
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seatNumber)) {
        // Deselect the seat if already selected
        return prevSelectedSeats.filter((seat) => seat !== seatNumber);
      } else {
        // Select the seat
        return [...prevSelectedSeats, seatNumber];
      }
    });
  };

  const handleReservation = async () => {
    // Send reservation request to backend API
    try {
      const response = await fetch('http://localhost:8090/seat/addSeat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ seats: selectedSeats }),
      });
      const data = await response.json();
      console.log('Reservation successful:', data);
      // Update seat availability after reservation
      fetchSeats();
      // Clear selected seats
      setSelectedSeats([]);
    } catch (error) {
      console.error('Error reserving seats:', error);
    }
  };

  return (
    <div>
      <h1>Train Seat Reservation</h1>
      <ReservationForm
        numSeats={selectedSeats.length}
        onSubmit={handleReservation}
      />
      <CoachLayout
        seats={seats}
        selectedSeats={selectedSeats}
        onSeatSelect={handleSeatSelection}
      />
    </div>
  );


}

export default App;
