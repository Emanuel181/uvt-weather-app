package com.endava.weather.api.exception;

public abstract class UserException extends ApplicationException {
    public UserException(String message) {
        super(message);
    }
}
