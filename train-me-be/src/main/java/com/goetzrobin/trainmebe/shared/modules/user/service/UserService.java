package com.goetzrobin.trainmebe.shared.modules.user.service;

import com.goetzrobin.trainmebe.shared.modules.user.model.dto.UserGetDTO;
import com.goetzrobin.trainmebe.shared.modules.user.model.entity.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<UserGetDTO> findAll();
    UserGetDTO findByEmail(String email);

    Optional<User> findByEmailForAuth(String email);
}
