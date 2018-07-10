package com.example.webdevsummer2serverjavamelina.services;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.webdevsummer2serverjavamelina.models.User;
import com.example.webdevsummer2serverjavamelina.repositories.UserRepository;


//declare this class as restfull controller
@RestController
public class UserService {
	
	//@Autowired
	UserRepository userRepository;
	
	
	// execute whenever you see: http://localhost:8080/api/register

	
	// should this be createUser() ??
	@PostMapping("/api/register")
	// instantiate user object and getting the user from the Request Body 
	public User register(@RequestBody User user, HttpSession session) {
		// save: returns instances of the same thing that it instantiates -- users
		User cu = userRepository.save(user);
		
		session.setAttribute("currentUser", cu);
		
		return cu;
	}
	
	// retrieving data - dynamic, meant for api
	@GetMapping("/api/user")
	public List<User> findAllUsers() {
		// returns iterable, so cast to List of Users
		return (List<User>) userRepository.findAll();
	}
	
	/*
	@GetMapping("/api/user/{userId}")
	public Optional<User> findUserById(@PathVariable("userId"), Integer userId) {
		int id = Integer.parseInt(userId);
		return UserRepository.findById(id);
	}
	*/
	
	
	/*
	@PutMapping("/api/user/{userId")
	public User updateUser(@PathVariable("userID") int id,
			@RequestBody User user) {
		Optional<User> optional = userRepostory.findById(id);
		if (optional.isPresent()) {
			User user = optional.get();
			user.setFirstName(newUser.getFirstName());
			user.setLastName(newUser.getLastName());
			return userRepository.save(user);
		}
		return null;
		// or throw exception
	}
	*/
	
	/*
	
	@DeleteMapping("/api/user/{userId}")
	public deleteUser(@RequestBody Integer userId) {
		return ;
	}
	
	*/
	
	/*
	// login
	@PostMapping("/api/login") 
	public User login(@RequestBody User user) {
		return userRepository.findUserByCredentials(user.getUsername(), user.getPassword());
	}
	*/
	/*
	@GetMapping("/api/checkLogin") 
	public User checkLogin(HttpSession session) {
		return (User) session.getAttribute("currentUser");
	}
	*/
	
}