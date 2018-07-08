package com.example.webdevsummer2serverjavamelina.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.webdevsummer2serverjavamelina.models.User;
import com.example.webdevsummer2serverjavamelina.repositories.UserRepository;


//declare this class as restfull controller
@RestController
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	
	// execute whenever you see: http://localhost:8080/register
	@PostMapping("/api/register")
	// instantiate user object and getting the user from the Request Body 
	public User register(@RequestBody User user) {
		// save: returns instances of the same thing that it instantiates -- users
		return userRepository.save(user);
	}
	
	// retrieving data - dynamic, meant for api
	@GetMapping("/api/user")
	public List<User> findAllUsers() {
		// returns iterable, so cast to List of Users
		return (List<User>) userRepository.findAll();
	}
}