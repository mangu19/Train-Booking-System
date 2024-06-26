import React from 'react';

const Seat = ({ seat, isSelected, onSelect }) => {
  const seatStyle = {
    backgroundColor: isSelected ? 'green' : seat.available===true ? 'white' : 'red',
    border: '1px solid black',
    margin: '5px',
    padding: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={seatStyle} onClick={onSelect}>
      Seat {seat.seatNumber}
    </div>
  );
};

export default Seat;