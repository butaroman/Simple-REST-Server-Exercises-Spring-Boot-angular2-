package com.roman.buta.repository;

import com.roman.buta.model.Rating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RatingRepository extends JpaRepository<Rating, Integer> {

    List<Rating> findByRatingBetweenOrderByRatingDateAsc(Integer r1, Integer r2);

}
