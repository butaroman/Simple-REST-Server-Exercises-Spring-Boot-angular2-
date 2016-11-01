package com.roman.buta.DTO.mappers;


import com.roman.buta.DTO.RatingDTO2;
import com.roman.buta.model.Rating;

import java.util.ArrayList;
import java.util.List;

public class RatingDTO2Mapper {

    public static RatingDTO2 mapRatingToRatingDTO2(Rating rating) {
        RatingDTO2 ratingDTO2 = new RatingDTO2();
        ratingDTO2.setMovieTitle(rating.getMovie().getTitle());
        ratingDTO2.setUserName(rating.getUser().getName());
        ratingDTO2.setRating(rating.getRating());
        return ratingDTO2;
    }

    public static List<RatingDTO2> mapRatingListToRatingDTO2List(List<Rating> ratingList) {
        List<RatingDTO2> ratingDTO2List = new ArrayList<>();
        for(Rating rating: ratingList) {
            ratingDTO2List.add(mapRatingToRatingDTO2(rating));
        }
        return ratingDTO2List;
    }
}
