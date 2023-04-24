package com.endava.weather.api.exception;

public abstract class ApplicationException extends RuntimeException {
    public ApplicationException(String message) {
        super(message);
    }
}