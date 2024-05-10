package com.train.seat.trainseatbooking.service;

import java.util.List;



import com.train.seat.trainseatbooking.model.Seat;

public interface SeatService {
    
    List<Seat> getSeats();
    Seat addSeat(Seat seat);
}
