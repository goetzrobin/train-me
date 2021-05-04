package com.goetzrobin.trainmebe.app.auth.controller;

import com.goetzrobin.trainmebe.app.auth.model.dto.AuthRequestDTO;
import com.goetzrobin.trainmebe.app.auth.model.dto.AuthResponseDTO;
import com.goetzrobin.trainmebe.shared.config.security.JwtTokenUtil;
import com.goetzrobin.trainmebe.shared.modules.user.model.dto.UserGetDTO;
import com.goetzrobin.trainmebe.shared.modules.user.model.entity.User;
import com.goetzrobin.trainmebe.shared.modules.user.model.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthenticationManager authenticationManager;
    private final JwtTokenUtil jwtTokenUtil;
    private final UserMapper userMapper;

    @PostMapping("login")
    public ResponseEntity<AuthResponseDTO<UserGetDTO>> login(@RequestBody @Valid AuthRequestDTO request) {
        try {
            Authentication authenticate = authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));

            User user = (User) authenticate.getPrincipal();
            String token = jwtTokenUtil.generateAccessToken(user);

            AuthResponseDTO<UserGetDTO> userAuthDTO = AuthResponseDTO.<UserGetDTO>builder()
                    .user(userMapper.userToUserGetDto(user))
                    .token(token)
                    .build();

            return ResponseEntity.ok()
                    .header(HttpHeaders.AUTHORIZATION, token)
                    .body(userAuthDTO);
        } catch (BadCredentialsException ex) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}
