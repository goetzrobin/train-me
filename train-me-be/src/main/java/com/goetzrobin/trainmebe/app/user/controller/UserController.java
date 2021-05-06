package com.goetzrobin.trainmebe.app.user.controller;

import com.goetzrobin.trainmebe.shared.modules.security.SecurityHelper;
import com.goetzrobin.trainmebe.shared.modules.user.model.dto.UserGetDTO;
import com.goetzrobin.trainmebe.shared.modules.user.model.entity.User;
import com.goetzrobin.trainmebe.shared.modules.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/{email}")
    public ResponseEntity<UserGetDTO> getUserByEmail(@PathVariable String email) {
        try {
            return ResponseEntity.ok(userService.findByEmail(email));
        } catch (Exception e) {
            return null;
        }
    }
}
