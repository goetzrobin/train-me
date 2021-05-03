package com.goetzrobin.trainmebe.shared.config.security;

import com.goetzrobin.trainmebe.shared.modules.user.model.entity.User;
import io.jsonwebtoken.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Date;

import static java.lang.String.format;

@Component
@RequiredArgsConstructor
public class JwtTokenUtil {

    private final String jwtSecret = "ThisShouldBeAbsolutelySecretAndWouldNeverBeThereIfThisWasNotAnExample";
    private final String jwtIssuer = "train.me";

    public String generateAccessToken(User user) {
        return Jwts.builder()
                .setSubject(format("%s,%s", user.getUserSysId(), user.getUsername()))
                .setIssuer(jwtIssuer)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000)) // 1 week
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
                .compact();
    }

    public String getUserId(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(jwtSecret)
                .parseClaimsJws(token)
                .getBody();

        return claims.getSubject().split(",")[0];
    }

    public String getUsername(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(jwtSecret)
                .parseClaimsJws(token)
                .getBody();

        return claims.getSubject().split(",")[1];
    }

    public Date getExpirationDate(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(jwtSecret)
                .parseClaimsJws(token)
                .getBody();

        return claims.getExpiration();
    }

    public boolean validate(String token) {
        try {
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token);
            return true;
        } catch (MalformedJwtException ex) {
            System.out.printf("Invalid JWT token - %s\n", ex.getMessage());
        } catch (ExpiredJwtException ex) {
            System.out.printf("Expired JWT token - %s\n", ex.getMessage());
        } catch (UnsupportedJwtException ex) {
            System.out.printf("Unsupported JWT token - %s\n", ex.getMessage());
        } catch (IllegalArgumentException ex) {
            System.out.printf("JWT claims string is empty - %s\n", ex.getMessage());
        }
        return false;
    }

}