package com.roman.buta.controller;

import com.roman.buta.model.User;
import com.roman.buta.service.UserService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class UserController {

    private static final Logger log = Logger.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/task0users", method = RequestMethod.GET)
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> userList = userService.findAll();
        log.info("Task0users. Get all users: " + userList);
        return new ResponseEntity<>(userList, HttpStatus.OK);
    }

    @RequestMapping(value = "/user/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<User> deleteUser(@PathVariable("id") Integer id) {
        log.info("Delete user with id: " + id );
        userService.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
