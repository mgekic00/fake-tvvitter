package com.example.fakebackend.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.fakebackend.model.Post;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostsRepo extends JpaRepository<Post,String> {
    List<Post> findByUsername(String name);
}
