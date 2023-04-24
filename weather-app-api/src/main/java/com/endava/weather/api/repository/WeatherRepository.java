package com.endava.weather.api.repository;

import com.endava.weather.api.model.LocationItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface WeatherRepository extends JpaRepository<LocationItem, Long> {
    List<LocationItem> findAllByTitle(String title);

    List<LocationItem> findByYearGreaterThan(int year);

    Optional<LocationItem> findOneByTitle(String title);
}
