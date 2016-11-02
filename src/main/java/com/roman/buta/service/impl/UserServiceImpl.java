package com.roman.buta.service.impl;

import com.roman.buta.model.User;
import com.roman.buta.repository.UserRepository;
import com.roman.buta.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional
    public User addUser(User user) {
        return userRepository.saveAndFlush(user);
    }

    @Override
    @Transactional
    public User findById(int id) {
        return userRepository.findOne(id);
    }

    @Override
    @Transactional
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    @Transactional
    public void deleteUser(int id) {
        userRepository.delete(id);
    }
}
