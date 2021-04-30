package com.goetzrobin.trainmebe.user.dao;

import com.goetzrobin.trainmebe.user.model.User;

import java.util.List;

public interface UserDAO {
    List<User> findAll();
    User findByEmail(String email);
}
