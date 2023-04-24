package com.endava.weather.api.service;

import com.endava.weather.api.exception.LocationAlreadyExistsException;
import com.endava.weather.api.exception.LocationNotFoundException;
import com.endava.weather.api.model.LocationItem;
import com.endava.weather.api.repository.WeatherRepository;
import com.endava.weather.api.response.WeatherResponse;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class WeatherService {
    private final WeatherRepository weatherRepository;

    public WeatherService(WeatherRepository weatherRepository) {
        this.weatherRepository = weatherRepository;
    }

    public List<WeatherResponse> sendLocation(LocationItem locationItem) {
        Optional<LocationItem> locationFoundInDb = weatherRepository.findOneByTitle(locationItem.getTitle());

        if (locationFoundInDb.isPresent()) {
            throw new LocationAlreadyExistsException("Stock already exists in the database!");
        }

        weatherRepository.save(locationItem);
        return loadLocations();
    }

    public List<WeatherResponse> updateLocation(Long id, LocationItem locationItem) {
        Optional<LocationItem> stockItemToBeUpdated = weatherRepository.findById(id);

        if (!stockItemToBeUpdated.isPresent()) {
            throw new LocationNotFoundException("Stock does not exist in the database!");
        }

        locationItem.setId(id);
        weatherRepository.save(locationItem);
        return loadLocations();
    }

    public List<WeatherResponse> deleteLocation(Long id) {
        Optional<LocationItem> stockToBeDeleted = weatherRepository.findById(id);

        if (!stockToBeDeleted.isPresent()) {
            throw new LocationNotFoundException("Stock does not exist in the database!");
        }

        weatherRepository.deleteById(id);
        return loadLocations();
    }

    public List<WeatherResponse> loadLocations() {
        List<LocationItem> locations = weatherRepository.findAll();

        return locations.stream()
                .filter(m -> m.getTitle() != null && !m.getTitle().isEmpty())
                .map(m -> WeatherResponse.builder()
                        .id(m.getId())
                        .title(m.getTitle())
                        .description(m.getDescription())
                        .director(m.getDirector())
                        .year(m.getYear())
                        .build())
                .collect(Collectors.toUnmodifiableList());
    }

    public List<LocationItem> findAllBy(String title) {
        return weatherRepository.findAllByTitle(title);
    }

    public List<LocationItem> findByYearGreaterThan(int year) {
        return weatherRepository.findByYearGreaterThan(year);
    }
}
