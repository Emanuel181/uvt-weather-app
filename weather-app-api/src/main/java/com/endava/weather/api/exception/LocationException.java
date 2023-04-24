package com.endava.weather.api.exception;

public abstract class LocationException extends ApplicationException {
    public LocationException(String message) {
        super(message);
    }
}
