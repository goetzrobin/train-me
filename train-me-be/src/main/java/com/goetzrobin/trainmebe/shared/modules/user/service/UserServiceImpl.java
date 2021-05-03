package com.goetzrobin.trainmebe.shared.modules.user.service;

import com.goetzrobin.trainmebe.shared.modules.user.dao.UserDAO;
import com.goetzrobin.trainmebe.shared.modules.user.model.dto.UserGetDTO;
import com.goetzrobin.trainmebe.shared.modules.user.model.entity.User;
import com.goetzrobin.trainmebe.shared.modules.user.model.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class UserServiceImpl implements UserService {
    private final UserDAO userDAO;
    private final UserMapper userMapper;


    @Autowired
    public UserServiceImpl(UserDAO userDAO, UserMapper userMapper) {
        this.userDAO = userDAO;
        this.userMapper = userMapper;
    }

    @Override
    public List<UserGetDTO> findAll() {
        return userMapper.userListToUserGetDtoList(userDAO.findAll());
    }

    @Override
    public UserGetDTO findByEmail(String email) {
        return userMapper.userToUserGetDto(userDAO.findByEmail(email));
    }

    @Override
    public Optional<User> findByEmailForAuth(String email) {
        return Optional.ofNullable(userDAO.findByEmail(email));
    }

}
