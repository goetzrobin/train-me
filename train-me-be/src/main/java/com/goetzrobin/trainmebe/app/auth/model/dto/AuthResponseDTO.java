package com.goetzrobin.trainmebe.app.auth.model.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class AuthResponseDTO<T> {
    private T user;
    private String token;
}
