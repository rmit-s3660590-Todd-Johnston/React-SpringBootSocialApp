package com.sept.rest.webservices.restfulwebservices.UserBean;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UserBeanService {
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

		while(iterator.hasNext())
		{
			if (iterator.next().getUser_name().compareTo(userName)==0)
			{
				return iterator.next();
			}
		}
		return null;
	}

	public Optional<UserBean> findById(Long id)
	{
		return userBeanRepository.findById(id);
	}
}
