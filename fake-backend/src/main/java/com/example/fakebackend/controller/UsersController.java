package com.example.fakebackend.controller;

import com.example.fakebackend.command.FollowUserCommand;
import com.example.fakebackend.model.FollowingLink;
import com.example.fakebackend.model.User;
import com.example.fakebackend.repo.FollowersRepo;
import com.example.fakebackend.repo.UserRepo;
import com.example.fakebackend.response.FollowLinkCreatedResponse;
import com.example.fakebackend.response.GetFollowedResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@RestController
@RequestMapping("/users")
public class UsersController {

    @Autowired
    UserRepo userRepo;

    @Autowired
    FollowersRepo followersRepo;



    @GetMapping(path="/{name}")
    public ResponseEntity<Map<String, String>> getUsersByQuery(@PathVariable String name) {


        List<User> users = userRepo.findByUsernameContaining(name);

        Map<String, String> userQueryResponse = new TreeMap<String, String>( users.stream().collect(Collectors.toMap(User::getUsername,User::getDescription)));

        return ResponseEntity.ok().body(userQueryResponse);
    }

    @PostMapping(path="/follow")
    public ResponseEntity<FollowLinkCreatedResponse> follow(@RequestBody FollowUserCommand command) {

        String uuid = UUID.randomUUID().toString();

        FollowingLink followingLink = new FollowingLink(uuid, command.getUsername(), command.getFollows());

        followersRepo.save(followingLink);

        FollowLinkCreatedResponse response = new FollowLinkCreatedResponse(uuid);

        return ResponseEntity.ok().body(response);
    }

    @GetMapping(path="following/{name}")
    public ResponseEntity<GetFollowedResponse> getFollowingByName(@PathVariable String name) {


        List<String> users = followersRepo.findFollowersByUsername(name);

        GetFollowedResponse response = new GetFollowedResponse(followersRepo.findFollowersByUsername(name));

        return ResponseEntity.ok().body(response);
    }

}
