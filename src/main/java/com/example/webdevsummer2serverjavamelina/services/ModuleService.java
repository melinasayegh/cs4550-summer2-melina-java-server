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
import com.example.webdevsummer2serverjavamelina.models.Module;
import com.example.webdevsummer2serverjavamelina.repositories.CourseRepository;
import com.example.webdevsummer2serverjavamelina.repositories.ModuleRepository;

@RestController
@CrossOrigin(origins="*")
public class ModuleService {
	
	@Autowired
	CourseRepository courseRepository;
	
	@Autowired
	ModuleRepository moduleRepository;
	
	@PostMapping("/api/course/{courseId}/module")
	public Module createModule(@PathVariable("courseId") int courseId,
			@RequestBody Module newModule) {
		
		Optional<Course> givenCourse = courseRepository.findById(courseId);
		
		if(givenCourse.isPresent()) {
			Course course = givenCourse.get();
			newModule.setCourse(course);
			return moduleRepository.save(newModule);
		}
		return null;
	}
	
	@GetMapping("/api/module")
	public List<Module> findAllModules() {
		return (List<Module>) moduleRepository.findAll();
	}
	
	@GetMapping("/api/course/{courseId}/module")
	public List<Module> findAllModulesForCourse(@PathVariable("courseId") int courseId) {
		Optional<Course> data = courseRepository.findById(courseId);
		if(data.isPresent()) {
			Course course = data.get();
			return course.getModules();
		}
		return null;		
	}
	
	@DeleteMapping("/api/module/{mId}")
	public void deleteModule(@PathVariable("mId") int moduleId) {
		moduleRepository.deleteById(moduleId);
	}
	
	@GetMapping("/api/module/{moduleId}")
	public Optional<Module> findModuleById(@PathVariable("moduleId") String moduleId) {
		int id = Integer.parseInt(moduleId);
		return moduleRepository.findById(id);
	}
	
	@PutMapping("/api/module/{moduleId}")
	public Module updateModule(@PathVariable("moduleId") int moduleId,
			@RequestBody Module newModule) {
		
		Optional<Module> optional = moduleRepository.findById(moduleId);
		if (optional.isPresent()) {
			Module updatedModule = optional.get();
			updatedModule.setTitle(newModule.getTitle());
			updatedModule.setLessons(newModule.getLessons());
			updatedModule.setCourse(newModule.getCourse());
			
			return moduleRepository.save(updatedModule);
		}
		return null;
		// or throw exception
	}
}
