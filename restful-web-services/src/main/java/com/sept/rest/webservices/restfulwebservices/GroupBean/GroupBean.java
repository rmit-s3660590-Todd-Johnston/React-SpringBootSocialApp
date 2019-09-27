package com.sept.rest.webservices.restfulwebservices.GroupBean;

import com.sept.rest.webservices.restfulwebservices.UserBean.UserBean;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;

@Entity
@Table(name = "group_bean")
public class GroupBean {
	@Id
	@GeneratedValue
	private Long id;

	@NotBlank
	private final String type = "g";

	@NotBlank
	private String groupName;

	@NotBlank
	private Long wallId;

	public GroupBean(Long id, String groupName, Long wallBean)
	{
		this.id = id;
		this.groupName = groupName;
		this.wallId = wallBean;
	}

	public Long getId()
	{
		return this.id;
	}

	public String getType()
	{
		return type;
	}

	public String getGroupName()
	{
		return this.groupName;
	}

	public ArrayList<Long> getUsers()
	{
	    return null;
	}

	public Long getWallBean()
	{
		return this.wallId;
	}

	public void addUser(UserBean user)
	{

	}

	public void deleteUser(UserBean user)
	{

	}


}
