package com.sept.rest.Chat;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "chat")
public class Message {
	@NotBlank
	private DateTimeFormat timeStamp;

	@NotBlank
	private String content;

	@NotBlank
	private Long UserId;


	public String getContent() {
		return this.content;
	}

	public DateTimeFormat getTimeStamp() {
		return this.timeStamp;
	}
}