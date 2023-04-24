package com.endava.weather.api.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class WeatherResponse {
    private Long id;
    private String title;
    private String description;
    private String director;
    private Integer year;
}
