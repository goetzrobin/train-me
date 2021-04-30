package com.goetzrobin.trainmebe.user.service;

import com.goetzrobin.trainmebe.user.dao.UserDAO;
import com.goetzrobin.trainmebe.user.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserServiceImpl implements UserService {
    private final UserDAO userDAO;

    @Autowired
    public UserServiceImpl(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    public List<User> findAll() {
        return userDAO.findAll();
    }

}
