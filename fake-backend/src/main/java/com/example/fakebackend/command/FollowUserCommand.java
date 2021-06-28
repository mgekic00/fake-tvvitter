package com.example.fakebackend.command;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FollowUserCommand {

    @JsonProperty("username")
    private String username;

    @JsonProperty("follows")
    private String follows;
}
