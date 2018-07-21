//package com.example.webdevsummer2serverjavamelina.models;
//
//import java.util.List;
//
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.ManyToOne;
//import javax.persistence.OneToMany;
//
//@Entity
//public class Module {
//	
//	@Id
//	@GeneratedValue(strategy=GenerationType.IDENTITY)
//	private int id;
//	private String title;
//	
//	@ManyToOne
//	private Course courses;
//	
//	@OneToMany(mappedBy="module")
//	private List<Lesson> lessons;
//
//	
//	
//	public int getId() {
//		return id;
//	}
//
//	public void setId(int id) {
//		this.id = id;
//	}
//
//	public String getTitle() {
//		return title;
//	}
//
//	public void setTitle(String title) {
//		this.title = title;
//	}
//
//	public Course getCourses() {
//		return courses;
//	}
//
//	public void setCourses(Course courses) {
//		this.courses = courses;
//	}
//
//}
