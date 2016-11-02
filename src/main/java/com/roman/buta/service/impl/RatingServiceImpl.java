package com.roman.buta.service.impl;

import com.roman.buta.model.Rating;
import com.roman.buta.model.User;
import com.roman.buta.repository.RatingRepository;
import com.roman.buta.repository.UserRepository;
import com.roman.buta.service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.List;

@Service
public class RatingServiceImpl implements RatingService {

    @Autowired
    RatingRepository ratingRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional
    public Rating addRating(Rating rating) {
        return ratingRepository.saveAndFlush(rating);
    }

    @Override
    @Transactional
    public Rating findById(int id) {
        return ratingRepository.findOne(id);
    }

    @Override
    @Transactional
    public List<Rating> findAll() {
        return ratingRepository.findAll();
    }

    @Override
    @Transactional
    public List<Rating> findAllAndFixNullDate() {
        List<Integer> userIdList = userRepository.getUserIdByRatingDateIsNull();
        for(int i: userIdList) {
            User u = userRepository.findOne(i);
            List<Rating> list = u.getRating();
            for(Rating r: list) {
                if(r.getRatingDate() == null) {
                    r.setRatingDate(Timestamp.valueOf(LocalDate.now().atStartOfDay()));
                    ratingRepository.saveAndFlush(r);
                }
            }
        }
        return  ratingRepository.findAll();
    }

    @Override
    @Transactional
    public List<Rating> findByRating(int r1, int r2) {
        return  ratingRepository.findByRatingBetweenOrderByRatingDateAsc(r1,r2);
    }

    @Override
    @Transactional
    public void deleteRating(int id) {
        ratingRepository.delete(id);
    }
}
