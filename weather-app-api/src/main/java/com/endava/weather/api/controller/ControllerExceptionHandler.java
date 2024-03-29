package com.endava.weather.api.controller;


import com.endava.weather.api.exception.ApplicationException;
import com.endava.weather.api.response.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;


@RestControllerAdvice
//@ControllerAdvice
//@ResponseBody
public class ControllerExceptionHandler {
    @ExceptionHandler(ApplicationException.class)
    public ApiResponse handleApplicationException(final ApplicationException e) {
        System.out.println("test");
        System.out.println(e.getMessage());
        return ApiResponse.builder()
                .status(HttpStatus.OK.value())
                .message(e.getMessage())
                .build();
    }
}
