package com.roman.buta.service;

import com.roman.buta.model.User;

import java.util.List;

public interface UserService {

    User addUser(User user);

    User findById(int id);

    List<User> findAll();

    List<Integer> getUserIdByRatingDateIsNull();

    void deleteUser(User user);

}
