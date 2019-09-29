package com.sept.rest.webservices.restfulwebservices.UserBean;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UserBeanService {
	@Autowired
	UserBeanRepository userBeanRepository;

	private static List<UserBean> UserBeans = new ArrayList<>();
	private static long idCounter = 0;
	final static Logger logger = LoggerFactory.getLogger(UserBeanService.class);



	public List<UserBean> findAll() {
		return UserBeans;
	}

	public UserBean findByUsername(String userName)
	{
		List<UserBean> users = userBeanRepository.findAll();

		for(int i = 0; i < users.size();i++)
		{
			logger.debug("Name passed to method is: + userName");
			logger.debug("Name retrieved from repo is:" + users.get(0).getUser_name());

			//System.out.println("Name passed to method is:" + userName);
			//System.out.println("Name retrieved from repo is:" + users.get(0).getUser_name());

			if (users.get(i).getUser_name().compareTo(userName)==0)
			{
				return(users.get(i));
			}
		}

			return new UserBean((long) 666, "error", "error", "error", "password", false, "https://i.imagesup.co/images2/1f217b8b9e5e5d2bd63e9ff731157efda2e57468.jpg");
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
