package com.sept.rest.Chat;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "chat")
public class Message {

	@NotBlank
	private DateTimeFormat timestamp;

	@NotBlank
	private String content;

	@NotBlank
	private long UserId;
}
