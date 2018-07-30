package com.example.webdevsummer2serverjavamelina.services;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.webdevsummer2serverjavamelina.models.Widget;

@RestController
@CrossOrigin(origins = "*")
public class WidgetService {
	
	@PostMapping("/api/widget")
	public void saveWidgets(@RequestBody List<Widget> widgets) {
		
	}
}
