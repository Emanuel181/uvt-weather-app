package com.endava.weather.api.repository;

import com.endava.weather.api.model.UserItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserItem, Long> {
    List<UserItem> findByEmail(String email);
    Optional<UserItem> findOneByEmail(String email);
}
