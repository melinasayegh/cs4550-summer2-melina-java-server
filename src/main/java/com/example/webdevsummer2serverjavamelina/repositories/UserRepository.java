package com.example.webdevsummer2serverjavamelina.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.example.webdevsummer2serverjavamelina.models.User;


public interface UserRepository extends CrudRepository<User,Integer> {
}
