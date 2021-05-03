package com.goetzrobin.trainmebe.shared.modules.user.dao;

import com.goetzrobin.trainmebe.shared.modules.user.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;

@Transactional
public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}