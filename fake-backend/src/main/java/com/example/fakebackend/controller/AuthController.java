package com.example.fakebackend.controller;

import com.example.fakebackend.command.RegisterLoginCommand;
import com.example.fakebackend.model.User;
import com.example.fakebackend.repo.UserRepo;
import com.example.fakebackend.response.UserLoggedInResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@Slf4j
@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    UserRepo userRepo;


    @PostMapping(path="/register")
    public ResponseEntity<User> register(@RequestBody RegisterLoginCommand command) {

        String uuid = UUID.randomUUID().toString();

        User user = new User(uuid,command.getUsername(),command.getPassword(),"", false);

        userRepo.save(user);

        return ResponseEntity.ok().body(user);
    }

    @PostMapping(path="/login")
    public ResponseEntity<UserLoggedInResponse> login(@RequestBody RegisterLoginCommand command) {

        Optional<User> user = userRepo.findByUsername(command.getUsername()).stream().findFirst();

        String uuid = null;

        uuid = user.isPresent() ? user.get().getId() : "NOT_FOUND";

        return (uuid.equals("NOT_FOUND") || !(command.getPassword().equals(user.get().getPassword()))) ? ResponseEntity.badRequest().body(new UserLoggedInResponse(uuid)) : ResponseEntity.ok().body(new UserLoggedInResponse(uuid));
    }


}

