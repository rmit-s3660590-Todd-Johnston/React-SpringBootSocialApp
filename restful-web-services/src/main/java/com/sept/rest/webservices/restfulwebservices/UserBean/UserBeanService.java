package com.sept.rest.webservices.restfulwebservices.UserBean;

import com.sept.rest.webservices.restfulwebservices.todo.Todo;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class UserBeanService {

	private static List<UserBean> UserBeans = new ArrayList<>();
	private static long idCounter = 0;

	public List<Todo> findAll() {
		return UserBeans;
	}

}
