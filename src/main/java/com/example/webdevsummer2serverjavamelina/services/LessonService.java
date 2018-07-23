package com.example.webdevsummer2serverjavamelina.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.webdevsummer2serverjavamelina.models.Course;
import com.example.webdevsummer2serverjavamelina.models.Lesson;
import com.example.webdevsummer2serverjavamelina.models.Module;
import com.example.webdevsummer2serverjavamelina.repositories.CourseRepository;
import com.example.webdevsummer2serverjavamelina.repositories.LessonRepository;
import com.example.webdevsummer2serverjavamelina.repositories.ModuleRepository;

@RestController
@CrossOrigin(origins="*")
public class LessonService {
	
	@Autowired
	CourseRepository courseRepository;
	
	@Autowired
	ModuleRepository moduleRepository;
	
	@Autowired
	LessonRepository lessonRepository;
	
	@GetMapping("/api/lesson")
	public List<Lesson> findAllLessons() {
		return (List<Lesson>) lessonRepository.findAll();
	}
	
	@GetMapping("/api/module/{moduleId}/lesson")
	public List<Lesson> findAllLessonsForModule(@PathVariable("moduleId") int moduleId) {
		Optional<Module> data = moduleRepository.findById(moduleId);
		if(data.isPresent()) {
			Module module = data.get();
			return module.getLessons();
		}
		return null;		
	}
	
	@DeleteMapping("/api/lesson/{lId}")
	public void deleteModule(@PathVariable("lId") int lessonId) {
		lessonRepository.deleteById(lessonId);
	}

}
