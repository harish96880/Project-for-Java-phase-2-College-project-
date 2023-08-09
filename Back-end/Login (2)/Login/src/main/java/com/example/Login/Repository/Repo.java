package com.example.Login.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Login.Model.Login;

@Repository
public interface Repo extends JpaRepository<Login,Long> {

    List<Login> findByEmail(String email);
    
}
