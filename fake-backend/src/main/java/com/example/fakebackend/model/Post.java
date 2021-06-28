package com.example.fakebackend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Timestamp;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "posts")
public class Post {

    @Id
    @Column(name = "postId")
    @JsonProperty("postId")
    private String postId;

    @Column(name = "username")
    @JsonProperty("username")
    private String username;

    @Column(name = "content")
    @JsonProperty("content")
    private String content;

    @Column(name = "imgUri")
    @JsonProperty("imgUri")
    private String imgUri;

    @Column(name = "created")
    @JsonProperty("created")
    private Timestamp created;
}
