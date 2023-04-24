package com.endava.weather.api.exception;

public class UserAlreadyExistsException extends UserException {
    public UserAlreadyExistsException(String message) {
        super(message);
    }
}
