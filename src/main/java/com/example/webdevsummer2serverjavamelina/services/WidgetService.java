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

import com.example.webdevsummer2serverjavamelina.models.Lesson;
import com.example.webdevsummer2serverjavamelina.models.Widget;
import com.example.webdevsummer2serverjavamelina.repositories.CourseRepository;
import com.example.webdevsummer2serverjavamelina.repositories.LessonRepository;
import com.example.webdevsummer2serverjavamelina.repositories.ModuleRepository;
import com.example.webdevsummer2serverjavamelina.repositories.WidgetRepository;

@RestController
@CrossOrigin(origins="*")
public class WidgetService {
	
	@PostMapping("/api/widget")
	public void saveWidgets(@RequestBody List<Widget> widgets) {
		
	}
	
	@Autowired
	LessonRepository lessonRepository;
	
	@Autowired
	WidgetRepository widgetRepository;
	
	@PostMapping("/api/lesson/{lessonId}/widgets")
	public List<Widget>  saveWidgets(@PathVariable("lessonId") int lessonId, @RequestBody List<Widget> widgets) {
		
		Optional<Lesson> givenLesson = lessonRepository.findById(lessonId);
		
		if(givenLesson.isPresent()) {
			
			Lesson lesson = givenLesson.get();
			
			List<Widget> reUpdate = lesson.getWidgets();
			
			// can't just update widgets, because there may be some deleted, and there may be new ones
			// need to delete all and create new ones
			
			for (Widget removeW : reUpdate) {
				this.deleteWidget(removeW.getId());
			}
			
			for (Widget w : widgets) {
				this.createWidget(lessonId, w);
			}
			
			return lesson.getWidgets();
		}
		return null;
	}
	
	@PostMapping("/api/lesson/{lessonId}/widget")
	public Widget createWidget(
			@PathVariable("lessonId") int lessonId,
			@RequestBody Widget newWidget) {
		
		Optional<Lesson> givenLesson = lessonRepository.findById(lessonId);
		
		if(givenLesson.isPresent()) {
			Lesson lesson = givenLesson.get();
			newWidget.setLesson(lesson);
			return widgetRepository.save(newWidget);
		}
		return null;
	}
	
	@GetMapping("/api/widget")
	public List<Widget> findAllWidgets() {
		return (List<Widget>) widgetRepository.findAll();
	}
	
	@GetMapping("/api/widget/{widgetId}")
	public Optional<Widget> findWidgetById(@PathVariable("widgetId") String widgetId) {
		int id = Integer.parseInt(widgetId);
		return widgetRepository.findById(id);
	}
	
	//@GetMapping("/api/course/{cid}/module/{moduleId}/lesson/{lessonId}/widget")
	@GetMapping("/api/lesson/{lessonId}/widget")
	public List<Widget> findAllWidgetsForLesson(@PathVariable("lessonId") int lessonId) {
		Optional<Lesson> data = lessonRepository.findById(lessonId);
		if(data.isPresent()) {
			Lesson lesson = data.get();
			return lesson.getWidgets();
		}
		return null;		
	}
	
	@DeleteMapping("/api/widget/{widgetId}")
	public void deleteWidget(@PathVariable("widgetId") int widgetId) {
		widgetRepository.deleteById(widgetId);
	}
	

	@PutMapping("/api/widget/{widgetId}")
	public Widget updateWidget(@PathVariable("widgetId") int widgetId,
			@RequestBody Widget newWidget) {
		
		Optional<Widget> optional = widgetRepository.findById(widgetId);
		if (optional.isPresent()) {
			
			Widget updateWidget = optional.get();
			
			updateWidget.setName(newWidget.getName());
			updateWidget.setOrderRank(newWidget.getOrderRank());
			updateWidget.setText(newWidget.getText());
			updateWidget.setClassName(newWidget.getClassName());
			updateWidget.setStyle(newWidget.getStyle());
			updateWidget.setWidth(newWidget.getWidth());
			updateWidget.setHeight(newWidget.getHeight());
			updateWidget.setLesson(newWidget.getLesson());
			updateWidget.setWidgetType(newWidget.getWidgetType());
			
			// individual fields
			updateWidget.setSize(newWidget.getSize());
			updateWidget.setHref(newWidget.getHref());
			updateWidget.setSrc(newWidget.getSrc());
			updateWidget.setListItems(newWidget.getListItems());
			updateWidget.setListType(newWidget.getListType());
			
			return widgetRepository.save(updateWidget);
		}
		return null;
		// or throw exception
	}
}
