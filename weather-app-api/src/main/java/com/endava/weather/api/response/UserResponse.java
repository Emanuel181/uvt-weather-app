package com.endava.weather.api.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class UserResponse {
    private Long id;

    private String email;

    private String username;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private List<String> roles;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String passwordExpiryDate;
}
