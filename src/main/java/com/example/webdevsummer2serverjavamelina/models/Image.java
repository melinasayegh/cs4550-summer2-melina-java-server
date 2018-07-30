package com.example.webdevsummer2serverjavamelina.models;

import javax.persistence.Entity;

@Entity
public class Image extends Widget {
	private String src;

	public String getSrc() {
		return src;
	}

	public void setSrc(String src) {
		this.src = src;
	}
}
