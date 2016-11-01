package com.roman.buta.service.impl;

import com.roman.buta.model.User;
import com.roman.buta.repository.UserRepository;
import com.roman.buta.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public User addUser(User user) {
        return userRepository.saveAndFlush(user);
    }

    @Override
    public User findById(int id) {
        return userRepository.findOne(id);
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public List<Integer> getUserIdByRatingDateIsNull() {
        return userRepository.getUserIdByRatingDateIsNull();
    }

    @Override
    public void deleteUser(User user) {
        userRepository.delete(user);
    }
}
