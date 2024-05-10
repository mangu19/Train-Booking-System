package com.train.seat.trainseatbooking.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.train.seat.trainseatbooking.model.Seat;

@Repository
public interface SeatRepo extends JpaRepository<Seat,Long> {
    
}
