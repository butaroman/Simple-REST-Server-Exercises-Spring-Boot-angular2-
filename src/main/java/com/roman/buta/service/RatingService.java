package com.roman.buta.service;

import com.roman.buta.model.Rating;

import java.util.List;

public interface RatingService {

    Rating addRating(Rating rating);

    Rating findById(int id);

    List<Rating> findAll();

    List<Rating> findAllAndFixNullDate();

    List<Rating> findByRating(Integer r1, Integer r2);

    void deleteRating(Rating  rating);

}
