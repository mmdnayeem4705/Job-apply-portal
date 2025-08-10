package com.jobportal.jobapp.controller;

import com.jobportal.jobapp.entity.User;
import com.jobportal.jobapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*") // ⚠️ Use specific origin in production for security
public class AuthController {

    @Autowired
    private UserRepository userRepo;

    // ✅ REGISTER endpoint
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        Optional<User> existingUser = userRepo.findByEmail(user.getEmail());

        if (existingUser.isPresent()) {
            return ResponseEntity.badRequest().body("⚠️ Email already registered!");
        }

        // 🚨 WARNING: Plaintext password - not secure!
        // In production, always hash passwords using PasswordEncoder
        userRepo.save(user);
        return ResponseEntity.ok("✅ Registered Successfully!");
    }

    // ✅ LOGIN endpoint
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user) {
        Optional<User> dbUser = userRepo.findByEmail(user.getEmail());

        if (dbUser.isPresent()) {
            User found = dbUser.get();

            // 🚨 Again: use hashed passwords in production!
            if (user.getPassword().equals(found.getPassword())) {
                return ResponseEntity.ok(found); // 🔐 In production, return JWT token instead
            }
        }

        return ResponseEntity.status(401).body("❌ Invalid email or password");
    }
}
