package com.roman.buta.controller;

import com.roman.buta.DTO.RatingDTO;
import com.roman.buta.DTO.RatingDTO2;
import com.roman.buta.DTO.mappers.RatingDTO2Mapper;
import com.roman.buta.DTO.mappers.RatingDTOMapper;
import com.roman.buta.model.Rating;
import com.roman.buta.service.RatingService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
public class RatingController {

    private static final Logger log = Logger.getLogger(RatingController.class);

    @Autowired
    RatingService ratingService;

    @RequestMapping(value = "/task0ratings", method = RequestMethod.GET)
    public ResponseEntity<List<Rating>> getAllRating() {
        List<Rating> ratingList = ratingService.findAll();
        return new ResponseEntity<>(ratingList, HttpStatus.OK);
    }

    @RequestMapping(value = "/task1", method = RequestMethod.GET)
    public ResponseEntity<List<Rating>> getAllRatingAndSetLocalDate(){
        List<Rating> ratingList = this.ratingService.findAllAndFixNullDate();
        return new ResponseEntity<>(ratingList, HttpStatus.OK);
    }

    @RequestMapping(value = "/task3", method = RequestMethod.GET)
    public ResponseEntity<List<RatingDTO>> getByRating() {
        int ratingValue1 = 4;
        int ratingValue2 = 5;
        log.info("Find by rating value: " + ratingValue1 + " ," + ratingValue2);
        List<Rating> movieList = this.ratingService.findByRating(ratingValue1,ratingValue2);
        return new ResponseEntity<>(RatingDTOMapper.mapRatingListToRatingDtoList(movieList), HttpStatus.OK);
    }

    @RequestMapping(value = "/task6", method = RequestMethod.GET)
    public ResponseEntity<List<RatingDTO2>> getRatingInfo() {
        this.ratingService.findAll();
        List<Rating> ratingList = this.ratingService.findAll();
        return new ResponseEntity<>(RatingDTO2Mapper.mapRatingListToRatingDTO2List(ratingList), HttpStatus.OK);
    }
}
