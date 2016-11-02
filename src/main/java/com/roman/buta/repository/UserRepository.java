package com.roman.buta.repository;

import com.roman.buta.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    @Query("SELECT id FROM User u WHERE id IN(SELECT user FROM Rating WHERE ratingDate IS NULL)")
    List<Integer> getUserIdByRatingDateIsNull();
}
