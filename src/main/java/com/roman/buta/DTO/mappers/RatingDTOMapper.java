package com.roman.buta.DTO.mappers;

import com.roman.buta.DTO.RatingDTO;
import com.roman.buta.model.Rating;

import java.util.ArrayList;
import java.util.List;

public class RatingDTOMapper {

    public static RatingDTO mapRatingToRatingDto(Rating rating) {
        RatingDTO ratingDTO = new RatingDTO();
        ratingDTO.setMovieId(rating.getMovie().getId());
        ratingDTO.setRatingDate(rating.getRatingDate());
        return ratingDTO;
    }

    public static List<RatingDTO> mapRatingListToRatingDtoList(List<Rating> ratingList) {
        List<RatingDTO> ratingDTOList = new ArrayList<>();
        for(Rating rating: ratingList) {
            ratingDTOList.add(mapRatingToRatingDto(rating));
        }
        return ratingDTOList;
    }
}
