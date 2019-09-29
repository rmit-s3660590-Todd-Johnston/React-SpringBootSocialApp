package com.sept.rest.webservices.restfulwebservices.UserBean;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UserBeanService {
	@Autowired
	UserBeanRepository userBeanRepository;

	private static List<UserBean> UserBeans = new ArrayList<>();
	private static long idCounter = 0;

	public List<UserBean> findAll() {
		return UserBeans;
	}

	public UserBean findByUsername(String userName)
	{
		List<UserBean> users = userBeanRepository.findAll();
		Iterator<UserBean> iterator = users.iterator();

		//otherwise iterate through list
		while(iterator.hasNext())
		{
			if (iterator.next().getUser_name().compareTo(userName)==0)
			{
				return iterator.next();
			}
		}
			return new UserBean((long) 666, "error", "error", "error", "password", false);
	}

	public List<UserBean> findAllUsers()
	{
		return userBeanRepository.findAll();
	}

	public Optional<UserBean> findById(Long id)
	{
		return userBeanRepository.findById(id);
	}
}
