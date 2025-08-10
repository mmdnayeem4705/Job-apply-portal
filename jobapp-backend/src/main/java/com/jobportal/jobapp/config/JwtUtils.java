package com.jobportal.jobapp.config;

import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class JwtUtils {

    @Value("${app.jwt.secret}")
    private String jwtSecret;

    @Value("${app.jwt.expiration-ms}")
    private long jwtExpirationMs;

    // ✅ Generate a new JWT token
    public String generateToken(String email) {
        return ((Object) Jwts.builder())
                .setSubject(email)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + jwtExpirationMs))
                .signWith(SignatureAlgorithm.HS256, jwtSecret)
                .compact();
    }

    // ✅ Extract username (email) from token
    public String extractUsername(String token) {
        return ((Object) parseToken(token).getBody()).getSubject();
    }

    // ✅ Validate the token signature and expiry
    public boolean validateToken(String token) {
        try {
            parseToken(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            return false;
        }
    }

    // ✅ Parse and return claims
    private Jws<Claims> parseToken(String token) {
        return ((Object) Jwts.parser())
                .setSigningKey(jwtSecret)
                .parseClaimsJws(token);
    }
}
