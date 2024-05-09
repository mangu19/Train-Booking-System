import React from 'react';
import Seat from './Seat';

const CoachLayout = ({ seats, selectedSeats, onSeatSelect }) => {
  return (
    <div>
      <h2>Coach Layout</h2>
      <div>
        {seats.map((seat) => (
          <Seat
            key={seat.number}
            seat={seat}
            isSelected={selectedSeats.includes(seat.number)}
            onSelect={() => onSeatSelect(seat.number)}
          />
        ))}
      </div>
    </div>
  );
};

export default CoachLayout;