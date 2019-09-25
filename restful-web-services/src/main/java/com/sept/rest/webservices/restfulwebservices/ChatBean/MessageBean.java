package com.sept.rest.webservices.restfulwebservices.ChatBean;

import com.sept.rest.webservices.restfulwebservices.UserBean.UserBean;
import org.springframework.data.annotation.Id;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "chat")
public class MessageBean {
	@Id
	@NotBlank
	private DateTimeFormat timeStamp;

	@NotBlank
	private final String type = "m";

	@NotBlank
	private String content;

	@NotBlank
	private UserBean user;


	MessageBean(DateTimeFormat timeStamp, String content, UserBean user)
	{
		this.timeStamp = timeStamp;
		this.content = content;
		this.user = user;
	}
	public String getContent() {
		return this.content;
	}

	public DateTimeFormat getTimeStamp() {
		return this.timeStamp;
	}

	public UserBean getUser()
	{
		return this.user;
	}

	public String getType()
	{
		return type;
	}
}