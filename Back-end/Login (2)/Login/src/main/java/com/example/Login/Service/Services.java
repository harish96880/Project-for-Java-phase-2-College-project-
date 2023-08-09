package com.example.Login.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Login.Model.Login;
import com.example.Login.Repository.Repo;

@Service
public class Services {
@Autowired
private Repo repo;
    public void save(Login login) {
        Login login2 = new Login();
        login2.setName(login.getName());
        login2.setEmail(login.getEmail());
        login2.setPassword(login.getPassword());
repo.save(login2);
    }
    public boolean login(Login login) {
            List<Login> userList =  repo.findByEmail(login.getEmail());
            Login user = userList.get(0); 
            String storedPassword = user.getPassword();
           return login.getPassword().equals(storedPassword);
    }
    
}
