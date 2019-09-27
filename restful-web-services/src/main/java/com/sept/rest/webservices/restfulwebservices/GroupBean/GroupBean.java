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
	private Long id;

	@NotBlank
	private final String type = "g";

	@NotBlank
	private String groupName;

	@NotBlank
	private ArrayList<Long> users;

	@NotBlank
	private Long wallId;

	public GroupBean(Long id, String groupName, WallBean wallBean)
	{
		this.id = id;
		this.users = new ArrayList<>();
		this.groupName = groupName;
		this.wallId = wallBean.getId();
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
		return this.users;
	}

	public Long getWallBean()
	{
		return this.wallId;
	}

	public void addUser(UserBean user)
	{
		users.add(user.getId());
	}

	public void deleteUser(UserBean user)
	{
		users.remove(user.getId());
	}


}
