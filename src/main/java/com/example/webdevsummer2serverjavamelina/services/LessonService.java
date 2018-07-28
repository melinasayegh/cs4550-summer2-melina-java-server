package com.example.webdevsummer2serverjavamelina.services;

import java.util.List;
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
	
	@PostMapping("/api/course/{courseId}/module/{moduleId}/lesson")
	public Lesson createLesson(@PathVariable("courseId") int courseId,
			@PathVariable("moduleId") int moduleId,
			@RequestBody Lesson newLesson) {
		
		Optional<Course> givenCourse = courseRepository.findById(courseId);
		Optional<Module> givenModule = moduleRepository.findById(moduleId);
		
		if(givenCourse.isPresent() && givenModule.isPresent()) {
			Module module = givenModule.get();
			newLesson.setModule(module);
			return lessonRepository.save(newLesson);
		}
		return null;
	}
	
	@GetMapping("/api/lesson")
	public List<Lesson> findAllLessons() {
		return (List<Lesson>) lessonRepository.findAll();
	}
	
	@GetMapping("/api/lesson/{lessonId}")
	public Optional<Lesson> findLessonById(@PathVariable("lessonId") String lessonId) {
		int id = Integer.parseInt(lessonId);
		return lessonRepository.findById(id);
	}
	
	@GetMapping("/api/course/{cid}/module/{moduleId}/lesson")
	public List<Lesson> findAllLessonsForModule(@PathVariable("cid") int cid,
			@PathVariable("moduleId") int moduleId) {
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
	
	@PutMapping("/api/lesson/{lessonId}")
	public Lesson updateLesson(@PathVariable("lessonId") int lessonId,
			@RequestBody Lesson newLesson) {
		
		Optional<Lesson> optional = lessonRepository.findById(lessonId);
		if (optional.isPresent()) {
			Lesson updateLesson = optional.get();
			updateLesson.setTitle(newLesson.getTitle());
			updateLesson.setModule(newLesson.getModule());
			
			return lessonRepository.save(updateLesson);
		}
		return null;
		// or throw exception
	}
}
