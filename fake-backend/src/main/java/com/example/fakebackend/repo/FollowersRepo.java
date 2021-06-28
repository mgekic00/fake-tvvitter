package com.example.fakebackend.repo;

import com.example.fakebackend.model.FollowingLink;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FollowersRepo extends JpaRepository<FollowingLink,String> {

    @Query(value = "SELECT f.follows FROM Following f WHERE f.username = :username", nativeQuery = true)
    List<String> findFollowersByUsername(@Param("username") String username);



}
