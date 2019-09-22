package com.sept.rest.webservices.restfulwebservices.UserBean;

		import java.util.ArrayList;
		import java.util.List;

		import org.springframework.beans.factory.annotation.Autowired;
		import org.springframework.stereotype.Service;

@Service
public class UserBeanService {

	@Autowired
	UserBeanRepository userBeanRepository;
	private static List<UserBean> UserBeans = new ArrayList<>();
	private static long idCounter = 0;

	public List<UserBean> findAll() {
		return userBeanRepository.findAll();
	}




}
