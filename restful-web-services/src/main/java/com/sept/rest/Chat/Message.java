package com.sept.rest.Chat;

import org.springframework.data.annotation.Id;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "chat")
public class Message {
	@Id
	@NotBlank
	private DateTimeFormat timeStamp;

	@NotBlank
	private String content;

	@NotBlank
	private Long userId;


	Message(DateTimeFormat timeStamp, String content, Long userId)
	{
		this.timeStamp = timeStamp;
		this.content = content;
		this.userId = userId;
	}
	public String getContent() {
		return this.content;
	}

	public DateTimeFormat getTimeStamp() {
		return this.timeStamp;
	}

	public Long getUserId()
	{
		return this.getUserId();
	}
}