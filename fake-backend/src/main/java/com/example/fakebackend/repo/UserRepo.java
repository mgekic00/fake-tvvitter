package com.example.fakebackend.repo;

import com.example.fakebackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepo extends JpaRepository<User,String> {
    List<User> findByUsername(String username);

    @Query(value = "SELECT * FROM Users u WHERE u.username LIKE CONCAT('%',:username,'%')", nativeQuery = true)
    List<User> findByUsernameContaining(@Param("username") String username);


}
