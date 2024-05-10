package com.train.seat.trainseatbooking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.train.seat.trainseatbooking.model.Seat;
import com.train.seat.trainseatbooking.service.SeatService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;



@RestController
@RequestMapping("/seat")
@CrossOrigin(origins = "http://localhost:3000")
public class SeatController {
    
    @Autowired
    private SeatService service;

    @PostMapping("/addSeat")
    public Seat addSeat(@RequestBody Seat seat) {
        
        return service.addSeat(seat);
    }

    @GetMapping("/getSeats")
    public List<Seat> getSeats() {
        return service.getSeats();
    }
    
    
}
