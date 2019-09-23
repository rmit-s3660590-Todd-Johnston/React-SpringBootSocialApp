package com.sept.rest.Chat;
import com.sept.rest.webservices.restfulwebservices.UserBean.UserBean;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;

@Entity
@Table(name = "chat")
public class Chat {
	@Id
	@GeneratedValue
	private Long id;

	@NotBlank
	private ArrayList<UserBean> userBeans;

	@NotBlank
	private ArrayList<Message> messages;

	Chat(Long id)
	{
		this.id = id;
	}

	public ArrayList<UserBean> getUserBeans()
	{
		return this.userBeans;
	}

	public void addUserBean(UserBean userBean)
	{
		// if new chat instance
		if(this.userBeans == null)
		{
			this.userBeans = new ArrayList<UserBean>();
		}
		this.userBeans.add(userBean);
	}

	public void addMessage(Message message)
	{
		//if first message
		if(this.messages == null)
		{
			this.messages = new ArrayList<Message>();
		}
		this.messages.add(message);
	}

}
