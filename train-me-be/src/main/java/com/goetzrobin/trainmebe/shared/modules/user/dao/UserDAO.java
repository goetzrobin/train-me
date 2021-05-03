package com.goetzrobin.trainmebe.shared.modules.user.dao;

import com.goetzrobin.trainmebe.shared.modules.user.model.entity.User;

import java.util.List;

public interface UserDAO {
    List<User> findAll();
    User findByEmail(String email);
}
