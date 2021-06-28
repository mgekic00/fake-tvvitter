package com.example.fakebackend.controller;

import com.example.fakebackend.command.CreatePostCommand;
import com.example.fakebackend.model.Post;
import com.example.fakebackend.repo.FollowersRepo;
import com.example.fakebackend.repo.PostsRepo;
import com.example.fakebackend.response.GetPostsResponse;
import com.example.fakebackend.response.PostCreatedResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.function.Consumer;


@Slf4j
@RestController
@RequestMapping("/posts")
public class PostsController {

    @Autowired
    PostsRepo postsRepo;

    @Autowired
    FollowersRepo followersRepo;

    @PostMapping(path="/create")
    public ResponseEntity<PostCreatedResponse> createPost(@RequestBody CreatePostCommand command) {

        String uuid = UUID.randomUUID().toString();

        Post post = new Post(uuid, command.getUsername(), command.getContent(), command.getImgUri(), new Timestamp(System.currentTimeMillis()));

        postsRepo.save(post);

        PostCreatedResponse response = new PostCreatedResponse(uuid);

        return ResponseEntity.ok().body(response);
    }

    @GetMapping(path="/user/{name}")
    public ResponseEntity<List<Post>> getPostsByUsername(@PathVariable String name) {

        List<Post> posts = postsRepo.findByUsername(name);

       // GetPostsResponse response = new GetPostsResponse(postsRepo.findByUsername(name));

        return ResponseEntity.ok().body(posts);
    }

    @GetMapping(path="{name}")
    public ResponseEntity<List<Post>> getPostsFollowed(@PathVariable String name) {

        List<String> followedUsers = followersRepo.findFollowersByUsername(name);
        List<Post> allPosts = new ArrayList<>();

        // TODO replace this with SQL join

        for(String followedUser : followedUsers) {

            allPosts.addAll(postsRepo.findByUsername(followedUser));
        }

        return ResponseEntity.ok().body(allPosts);


    }

}
