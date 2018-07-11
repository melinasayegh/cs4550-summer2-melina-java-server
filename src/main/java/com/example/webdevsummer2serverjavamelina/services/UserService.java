package com.example.webdevsummer2serverjavamelina.services;

import com.example.webdevsummer2serverjavamelina.models.User;
import com.example.webdevsummer2serverjavamelina.repositories.UserRepository;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


//declare this class as restfull controller
@RestController
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	
	
	// execute whenever you see: http://localhost:8080/api/register
	
	@PostMapping("/api/register")
	// instantiate user object and getting the user from the Request Body 
	public User createUser(@RequestBody User user, HttpSession session) {
		// save: returns instances of the same thing that it instantiates -- users
		User cu = userRepository.save(user);
		return cu;
	}

	@PostMapping("/api/register")
	// instantiate user object and getting the user from the Request Body 
	public User register(@RequestBody User user, HttpSession session) {
		// save: returns instances of the same thing that it instantiates -- users
		User cu = createUser(user, session);
		session.setAttribute("currentUser", cu);
		return cu;
	}
	
	@GetMapping("/api/user/{userId}")
	public Optional<User> findUserById(@PathVariable("userId") String userId) {
		int id = Integer.parseInt(userId);
		return userRepository.findById(id);
	}
	
	@GetMapping("/api/user")	
	public Iterable<User> findAllUsers(
			@RequestParam(name="username", required=false) String username, 
			@RequestParam(name="password", required=false) String password) {
		if(username != null && password != null) {
			return (Iterable<User>) userRepository.findUserByCredentials(username, password);
		} else if(username != null) {
			return userRepository.findUserByUsername(username);
		} else {
			return userRepository.findAll();
		}
	}

	@PutMapping("/api/user/{userId")
	public User updateUser(
			@PathVariable("userID") int id,
			@RequestBody User newUser) {
		Optional<User> optional = userRepository.findById(id);
		if (optional.isPresent()) {
			User user = optional.get();
			user.setFirstName(newUser.getFirstName());
			user.setLastName(newUser.getLastName());
			user.setEmail(newUser.getEmail());
			user.setPhone(newUser.getPhone());
			user.setRole(newUser.getRole());
			user.setDOB(newUser.getDOB());
			
			return userRepository.save(user);
		}
		return null;
		// or throw exception
	}



	@DeleteMapping("/api/user/{userId}")
	public void deleteUser(@PathVariable("userId") int userId) {
		userRepository.deleteById(userId);
	}
	
	
	// login
	@PostMapping("/api/login")
	public User login(@RequestBody User user, HttpSession session) {
		User newUser = userRepository.findUserByCredentials(user.getUsername(), user.getPassword());
		System.out.println("USer " + newUser.getFirstName());
		session.setAttribute("currentUser", newUser);
		
		return newUser;
	}
	
	
	@GetMapping("/api/profile") 
	public Optional<User> profile(HttpSession session) {
		User currentUser = (User) session.getAttribute("currentUser");
		return userRepository.findById(currentUser.getId());
	}
	
	@PutMapping("/api/profile")
	public User updateProfile(@RequestBody User user, HttpSession session) { 
		if (user != null) {
		    session.setAttribute("user", user);
		    return updateUser(user.getId(), user);
		} 
		else { 
			return null;
		
		}
	}

	@PostMapping("/api/logout")
	public void logout(HttpSession session) {
		session.invalidate();
	}
}