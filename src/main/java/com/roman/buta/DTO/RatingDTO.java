package com.roman.buta.DTO;


import java.sql.Timestamp;

public class RatingDTO {

    private Integer movieId;
    private Timestamp ratingDate;

    public Integer getMovieId() {
        return movieId;
    }

    public void setMovieId(Integer movieId) {
        this.movieId = movieId;
    }

    public Timestamp getRatingDate() {
        return ratingDate;
    }

    public void setRatingDate(Timestamp ratingDate) {
        this.ratingDate = ratingDate;
    }
}
