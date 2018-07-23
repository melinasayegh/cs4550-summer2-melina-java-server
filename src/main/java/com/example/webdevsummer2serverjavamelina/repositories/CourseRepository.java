package com.example.webdevsummer2serverjavamelina.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.webdevsummer2serverjavamelina.models.Course;
import com.example.webdevsummer2serverjavamelina.models.User;

public interface CourseRepository extends CrudRepository<Course, Integer> { 
	@Query("SELECT course FROM Course course WHERE course.owner=:owner")
	public User findCourseByOwner(@Param("owner") String o);
	
	@Query("SELECT course FROM Course course WHERE course.title=:title")
	public User findCourseByTitle(@Param("title") String c);
	
	@Query("SELECT course FROM Course course WHERE course.title=:title AND course.owner=:owner")
	public User findCourseByTitleAndOwner(@Param("title") String c, @Param("owner") String o);
}
