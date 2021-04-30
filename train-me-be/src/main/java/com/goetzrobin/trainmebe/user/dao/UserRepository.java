package com.goetzrobin.trainmebe.user.dao;

import com.goetzrobin.trainmebe.user.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;

@Transactional()
public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}