package com.goetzrobin.trainmebe.user.controller;

import com.goetzrobin.trainmebe.user.model.User;
import com.goetzrobin.trainmebe.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("")
    public ResponseEntity<List<User>> getAllUsers() {
        try {
            return ResponseEntity.ok(userService.findAll());
        } catch (Exception e) {
            return null;
        }
    }
}
