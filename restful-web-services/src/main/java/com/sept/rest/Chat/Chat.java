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
	private long id;

	@NotBlank
	private ArrayList<UserBean> userBeans;

	@NotBlank
	private ArrayList<Message> messages;

}
