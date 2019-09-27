package com.sept.rest.webservices.restfulwebservices.UserBean;

import java.util.ArrayList;
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

	public Optional<UserBean> findById(Long id)
	{
		return userBeanRepository.findById(id);
	}
}
