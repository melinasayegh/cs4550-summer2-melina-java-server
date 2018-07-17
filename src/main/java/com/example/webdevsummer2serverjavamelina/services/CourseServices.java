package com.example.webdevsummer2serverjavamelina.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.webdevsummer2serverjavamelina.models.Course;
import com.example.webdevsummer2serverjavamelina.repositories.CourseRepository;

@RestController
public class CourseServices {
	
	@Autowired
	CourseRepository courseRepository;	
	
	@GetMapping("/api/course")
	public Iterable<Course> findAllCourses() {
		return courseRepository.findAll(); 
	}
}
