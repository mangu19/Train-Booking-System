import React from 'react';
import Seat from './Seat';


const CoachLayout = ({ seats, selectedSeats, onSeatSelect }) => {
  
    // const renderRows = () => {
    //  // alert("SEAT")
    //   const rows = [];
    //   let currentRow = [];
  
    //   // Split seats into rows of 7
    //   if(seats!=null){
    //   seats.forEach((seat, index) => {
    //     currentRow.push(
    //       <Seat
    //         key={seat.seatNumber}
    //         seat={seat}
    //         isSelected={selectedSeats.includes(seat.seatNumber)}
    //         onSelect={() => onSeatSelect(seat.seatNumber)}
    //       />
    //     );
  
    //     // If current row has 7 seats or it's the last seat, push the row
    //     if (currentRow.length === 7 || index === seats.length - 1) {
    //       rows.push(
    //         <div key={rows.length} style={{ display: 'flex', marginBottom: '10px' }}>
    //           {currentRow}
    //         </div>
    //       );
    //       currentRow = [];
    //     }

    //   });
    // }
    // else{
    //   alert("seats is null")
    // }
    // }





  return (
    <div>
      <h2>Coach Layout</h2>
       <div >
        {seats.map((seat) => (
          <Seat
            key={seat.id}
            seat={seat}
            isSelected={selectedSeats.includes(seat.seatNumber)}
            onSelect={() => onSeatSelect(seat.seatNumber)}
          />
        ))}
      </div> 

  
    </div>
  );
};

export default CoachLayout;