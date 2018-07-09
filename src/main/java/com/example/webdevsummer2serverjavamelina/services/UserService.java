package com.example.webdevsummer2serverjavamelina.services;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	
	/*
	// execute whenever you see: http://localhost:8080/api/register
	@PostMapping("/api/register")
	// instantiate user object and getting the user from the Request Body 
	public User register(@RequestBody User user, HttpSession session) {
		// save: returns instances of the same thing that it instantiates -- users
		User cu = userRepository.save(user);
		
		session.setAttribute("currentUser", cu);
		
		return cu;
	}
	*/
	/*
	// login
	@PostMapping("/api/login") 
	public User login(@RequestBody User user) {
		return userRepository.findUserByCredentials(user.getUsername(), user.getPassword());
	}
	*/
	
	@GetMapping("/api/checkLogin") 
	public User checkLogin(HttpSession session) {
		return (User) session.getAttribute("currentUser");
	}
	
	// retrieving data - dynamic, meant for api
	@GetMapping("/api/user")
	public List<User> findAllUsers() {
		// returns iterable, so cast to List of Users
		return (List<User>) userRepository.findAll();
	}
	
	/*
	@GetMapping("/api/user/{userId}")
	public User findUserById(@PathVariable(name="userId") Integer userId) {
		UserRepository userRepo = UserRepository.getInstance();
		return userRepo.findUserById(userId);
	}
	*/
	/*
	@PostMapping("/api/user/{userId}")
	public updateUser(@RequestBody Integer userId) {
		return ;
	}
	
	@DeleteMapping("/api/user/{userId}")
	public deleteUser(@RequestBody Integer userId) {
		return ;
	}
	
	*/
	
}