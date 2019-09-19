package com.sept.rest.webservices.restfulwebservices.UserBean;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class UserBeanService {

	//
	private static List<UserBean> UserBeans = new ArrayList<>();
	private static String[] subjects = new String[4];;

	static {
		UserBean user1 = new UserBean(1, "Sherry1377", "Shahrzad", "Rafezi", "Password123!", false);
		UserBean user2 = new UserBean(2, "Jack27", "Jack", "Ryan", "Pa$$word123", true);
	}

	public List<UserBean> retrieveAll() {
		return UserBeans;
	}

	public UserBean retrieveUser(int userId) {
		for (UserBean user : UserBeans) {
			if (user.getId() == (userId)) {
				return user;
			}
		}
		return null;
	}

	public String addSubject(String subject) {
		//checking if all class slots are taken
		for(int i = 0; i< this.subjects.length; i++)
		{
			if(this.subjects[i]==null) {
				this.subjects[i] = subject;
				return "Subject Added Successfully";
			}
		}
		//if no slot is found
		return "Subjects full! Please remove a class before adding another";
	}

	public String removeSubject(String subject) {
		for(int i = 0; i< this.subjects.length; i++) {
			if(this.subjects[i].equals(subject))
			{
				this.subjects[i] = null;
				return "Subject removed Successfully";
			}
		}
		return "Unable to find subject";
	}

}
