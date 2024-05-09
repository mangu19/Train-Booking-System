import React from 'react'

const ReservationForm = ({ numSeats, onSubmit }) => {
    return (
      <div>
        <p>Number of Seats Selected: {numSeats}</p>
        <button onClick={onSubmit}>Reserve Seats</button>
      </div>
    );
  };

  
export default ReservationForm;