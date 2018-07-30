package com.example.webdevsummer2serverjavamelina.models;

import javax.persistence.Entity;

@Entity
public class List extends Widget {
	private String listItems;
	private Boolean listType;
	
	public String getListItems() {
		return listItems;
	}
	public void setListItems(String listItems) {
		this.listItems = listItems;
	}
	public Boolean getListType() {
		return listType;
	}
	public void setListType(Boolean listType) {
		this.listType = listType;
	}
}
