package com.example.fakebackend.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.sql.Timestamp;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class GetPostsResponse {
    
    @JsonProperty("postId")
    private String postId;

    @JsonProperty("username")
    private String username;

    @JsonProperty("content")
    private String content;

    @JsonProperty("imgUri")
    private String imgUri;

    @JsonProperty("created")
    private Timestamp created;


}
