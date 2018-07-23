package com.example.webdevsummer2serverjavamelina.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.webdevsummer2serverjavamelina.models.Course;
import com.example.webdevsummer2serverjavamelina.repositories.CourseRepository;

@RestController
@CrossOrigin(origins="*")
public class CourseServices {
	
	@Autowired
	CourseRepository courseRepository;	
	
	@GetMapping("/api/course")
	public Iterable<Course> findAllCourses() {
		return courseRepository.findAll(); 
	}
	
	@GetMapping("/api/course/{courseId}")
	public Optional<Course> findCourseById(@PathVariable("courseId") String courseId) {
		int id = Integer.parseInt(courseId);
		return courseRepository.findById(id);
	}
	
	@PostMapping("/api/course")
	public Course createCourse(@RequestBody Course course) {
		Course cc = courseRepository.save(course);
		return cc;
	}
	
	@DeleteMapping("/api/course/{courseId}")
	public void deleteCourse(@PathVariable("courseId") int id) {
		courseRepository.deleteById(id);
	}
	
	@PutMapping("/api/course/{courseId}")
	public Course updateCourse(@PathVariable("courseId") int courseId,
			@RequestBody Course newCourse) {
		
		Optional<Course> optional = courseRepository.findById(courseId);
		if (optional.isPresent()) {
			Course updatedCourse = optional.get();
			updatedCourse.setTitle(newCourse.getTitle());
			updatedCourse.setOwner(newCourse.getOwner());
			updatedCourse.setModified(newCourse.getModified());
			
			return courseRepository.save(updatedCourse);
		}
		return null;
		// or throw exception
	}
}
