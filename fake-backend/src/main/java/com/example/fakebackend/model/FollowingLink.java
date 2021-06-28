package com.example.fakebackend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "following")
public class FollowingLink {

    @Id
    @Column(name = "id")
    @JsonProperty("id")
    private String id;

    @Column(name = "username")
    @JsonProperty("username")
    private String username;

    @Column(name = "follows")
    @JsonProperty("follows")
    private String follows;
}
