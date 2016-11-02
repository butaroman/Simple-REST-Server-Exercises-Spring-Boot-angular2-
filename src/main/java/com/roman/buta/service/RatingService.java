package com.roman.buta.service;

import com.roman.buta.model.Rating;

import java.util.List;

public interface RatingService {

    Rating addRating(Rating rating);

    Rating findById(int id);

    List<Rating> findAll();

    List<Rating> findAllAndFixNullDate();

    List<Rating> findByRating(int r1, int r2);

    void deleteRating(int id);

}
