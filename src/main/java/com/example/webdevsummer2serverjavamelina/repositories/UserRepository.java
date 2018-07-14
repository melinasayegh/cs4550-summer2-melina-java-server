package com.example.webdevsummer2serverjavamelina.repositories;
import com.example.webdevsummer2serverjavamelina.models.User;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;


public interface UserRepository extends CrudRepository<User,Integer> {
	@Query("SELECT user FROM User user WHERE user.username=:username AND user.password=:password")
	public User findUserByCredentials(@Param("username") String u, @Param("password") String p);
	
	
	@Query("SELECT u FROM User u WHERE u.username=:username")
	public Iterable<User> findUserByUsername(@Param("username") String u);
}
