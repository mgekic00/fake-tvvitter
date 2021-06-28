package com.example.fakebackend.command;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GetUsersCommand {

    @JsonProperty("usersQuery")
    private String usersQuery;
}
