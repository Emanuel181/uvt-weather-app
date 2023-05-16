package com.endava.weather.api.controller;

import com.endava.weather.api.model.LocationItem;
import com.endava.weather.api.response.ApiResponse;
import com.endava.weather.api.response.WeatherResponse;
import com.endava.weather.api.service.WeatherService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;


@RestController
@RequestMapping("/api/weather")
@CrossOrigin(origins = "http://localhost:4200")
public class WeatherController {

    private final WeatherService weatherService;

    public WeatherController(WeatherService weatherService) {
        this.weatherService = weatherService;
    }

    @GetMapping(path = "/getAllByName/{name}")
    public ApiResponse getAllBy(@PathVariable String name) {
        RestTemplate restTemplate = new RestTemplate();
        Object[] items = restTemplate.getForObject("http://api.weatherapi.com/v1/current.json?key=bc3ecfaa933e4734bf491123232804&q=London&aqi=no", Object[].class);



        return new ApiResponse(HttpStatus.OK.value(), "Un string", List.of(items));
    }

    @GetMapping(path = "/getAllByYear/{year}")
    public ApiResponse getAllByYear(@PathVariable int year) {
        return new ApiResponse(HttpStatus.OK.value(), "Un string", weatherService.findByYearGreaterThan(year));
    }

    @PostMapping(path = "/location")
    public ApiResponse sendStock(@Valid @RequestBody LocationItem locationItem) {
        System.out.println("Sending new movie to the database...");
        return ApiResponse.<WeatherResponse>builder()
                .status(HttpStatus.OK.value())
                .message("Stock item added to the database")
                .data(weatherService.sendLocation(locationItem))
                .build();
    }

    @PutMapping(path = "/location/{id}")
    public ApiResponse updateMovie(@PathVariable Long id, @RequestBody LocationItem locationItem) {
        System.out.println("Updating stock item with " + id + " in the database... ");
        return ApiResponse.<WeatherResponse>builder()
                .status(HttpStatus.OK.value())
                .message("Stock item updated successfully!")
                .data(weatherService.updateLocation(id, locationItem))
                .build();
    }

    @DeleteMapping(path = "/location/{id}")
    public ApiResponse deleteMovie(@PathVariable Long id) {
        System.out.println("Deleting stock item with "+ id + " from the database...");
        return ApiResponse.<WeatherResponse>builder()
                .status(HttpStatus.OK.value())
                .message("Stock item deleted successfully!")
                .data(weatherService.deleteLocation(id))
                .build();
    }

    @GetMapping(path = "/locations")
    public ApiResponse loadWeathers() {
        System.out.println("Getting the list of movies from the database...");
        return ApiResponse.<WeatherResponse>builder()
                .status(HttpStatus.OK.value())
                .message("Getting the list of movies from the database...")
                .data(weatherService.loadLocations())
                .build();
    }
}
