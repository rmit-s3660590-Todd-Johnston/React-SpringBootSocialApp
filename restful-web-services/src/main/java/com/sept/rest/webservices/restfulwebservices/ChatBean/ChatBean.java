package com.sept.rest.webservices.restfulwebservices.ChatBean;
import com.sept.rest.webservices.restfulwebservices.UserBean.UserBean;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;

@Entity
@Table(name = "chat")
public class ChatBean {
	@Id
	@GeneratedValue
	private String id;

	@NotBlank
	private ArrayList<UserBean> userBeans;

	@NotBlank
	private ArrayList<MessageBean> messageBeans;

	ChatBean(String id)
	{
		this.id = "c" + id;
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

	public void addMessage(MessageBean messageBean)
	{
		//if first messageBean
		if(this.messageBeans == null)
		{
			this.messageBeans = new ArrayList<MessageBean>();
		}
		this.messageBeans.add(messageBean);
	}

}
