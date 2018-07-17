package com.example.webdevsummer2serverjavamelina.repositories;

import org.springframework.data.repository.CrudRepository;
import com.example.webdevsummer2serverjavamelina.models.Course;

public interface CourseRepository
extends CrudRepository<Course, Integer> { 
	
}
