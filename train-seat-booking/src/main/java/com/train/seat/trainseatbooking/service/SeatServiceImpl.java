package com.train.seat.trainseatbooking.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.train.seat.trainseatbooking.model.Seat;
import com.train.seat.trainseatbooking.repo.SeatRepo;

@Service
public class SeatServiceImpl implements SeatService {

    @Autowired
    private SeatRepo repo;

    @Override
    public List<Seat> getSeats() {

        List<Seat>allSeats = repo.findAll();
        return allSeats;
    }

    @Override
    public Seat addSeat(Seat seat) {
        
        return repo.save(seat);

    } 
    
}
