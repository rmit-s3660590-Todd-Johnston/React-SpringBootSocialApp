package com.sept.rest.webservices.restfulwebservices.ChatBean;

import com.sept.rest.webservices.restfulwebservices.UserBean.UserBean;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "chat")
public class MessageBean {
	@Id
	@GeneratedValue
	private Long id;

	@NotBlank
	private String timeStamp;

	@NotBlank
	private final String type = "m";

	@NotBlank
	private String content;

	@NotBlank
	private Long user;


	MessageBean(String timeStamp, String content, Long user)
	{
		this.timeStamp = timeStamp;
		this.content = content;
		this.user = user;
	}
	public String getContent() {
		return this.content;
	}

	public String getTimeStamp() {
		return this.timeStamp;
	}

	public Long getUser()
	{
		return this.user;
	}

	public String getType()
	{
		return type;
	}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}