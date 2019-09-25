package com.sept.rest.webservices.restfulwebservices.GroupBean;

import com.sept.rest.webservices.restfulwebservices.UserBean.UserBean;
import com.sept.rest.webservices.restfulwebservices.WallBean.WallBean;
import org.springframework.data.annotation.Id;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.WeakHashMap;

@Entity
@Table(name = "group")
public class GroupBean {
	@Id
	@GeneratedValue
	private String id;

	@NotBlank
	private String groupName;

	private ArrayList<UserBean> users;

	@NotBlank
	private WallBean wallBean;

	public GroupBean(String id, String groupName, WallBean wallBean)
	{
		this.id = "g"+ id;
		this.users = new ArrayList<UserBean>();
		this.groupName = groupName;
		this.wallBean = wallBean;
	}

	public String getId()
	{
		return this.id;
	}

	public String getGroupName()
	{
		return this.groupName;
	}

	public ArrayList<UserBean> getUsers()
	{
		return this.users;
	}

	public WallBean getWallBean()
	{
		return this.wallBean;
	}

	public void addUser(UserBean user)
	{
		users.add(user);
	}

	public void deleteUser(UserBean user)
	{
		users.remove(user);
	}


}
