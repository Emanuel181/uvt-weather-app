package com.endava.weather.api.exception;

public class LocationAlreadyExistsException extends LocationException {
    public LocationAlreadyExistsException(String message) {
        super(message);
    }
}
