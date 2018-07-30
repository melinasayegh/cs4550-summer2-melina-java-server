package com.example.webdevsummer2serverjavamelina.models;

import javax.persistence.Entity;

@Entity
public class Heading extends Widget {
	
	private Integer size;

	public Integer getSize() {
		return size;
	}

	public void setSize(Integer size) {
		this.size = size;
	}
}