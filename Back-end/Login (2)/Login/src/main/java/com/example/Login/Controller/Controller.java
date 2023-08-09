package com.example.Login.Controller;


import com.example.Login.Repository.Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.Login.Model.Login;
import com.example.Login.Service.Services;

import java.util.List;

@CrossOrigin("*")
@RestController
public class Controller {
    @Autowired
    private Services services;
    private Repo repo;

    public Controller(Repo repo) {
        this.repo = repo;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody Login login){
        services.save(login);
        return new ResponseEntity<>("Saved", HttpStatus.OK);
    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Login login){
  return new ResponseEntity<>(services.login(login), HttpStatus.OK);
    }

    @GetMapping
    public List<Login> getAll() {
        return repo.findAll();
    }
}
