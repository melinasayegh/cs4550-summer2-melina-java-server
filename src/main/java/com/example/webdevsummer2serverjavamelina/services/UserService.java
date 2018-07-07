package com.example.webdevsummer2serverjavamelina.services;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.webdevsummer2serverjavamelina.models.User;


//declare this class as restfull controller
@RestController
public class UserService {
	// execute whenever you see: http://localhost:8080/register
	
	@PostMapping("/register")
	// instantiate user object and getting the user from the Request Body 
	public User register(@RequestBody User user) {
		return user;
	}
}
