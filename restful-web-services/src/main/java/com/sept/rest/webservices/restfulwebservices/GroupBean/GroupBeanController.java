package com.sept.rest.webservices.restfulwebservices.GroupBean;

import com.sept.rest.webservices.restfulwebservices.UserBean.UserBean;
import com.sept.rest.webservices.restfulwebservices.UserBean.UserBeanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class GroupBeanController {
	@Autowired
	GroupBeanRepository groupBeanRepository;
	@Autowired
	UserBeanRepository userBeanRepository;

	//create new user and save to db
	@PostMapping
	public GroupBean createGroup(@Valid @RequestBody GroupBean group)
	{
		return groupBeanRepository.save(group);
	}

	//get all groups
	@GetMapping("/groups")
	public List<GroupBean> getAllGroups()
	{
		return groupBeanRepository.findAll();
	}

	//get a group
	@GetMapping("/groups/{id}")
	public GroupBean getGroupById(@PathVariable(value = "id") Long groupId)
	{
		return groupBeanRepository.findById(groupId).get();
	}

	//add a user to a group
	@PutMapping("/groups/{id}")
	public GroupBean addUserToGroup(@PathVariable(value = "id")Long groupId, @Valid @RequestBody UserBean newUser)
	{
		GroupBean group = groupBeanRepository.findById(groupId).get();
		group.addUser(newUser);
		UserBean user = userBeanRepository.findById(newUser.getId()).get();
		user.addGroup(group);
		userBeanRepository.save(user);
		return groupBeanRepository.save(group);
	}

	//Delete a user from a group
	@DeleteMapping("/groups/{id}")
	public GroupBean deleteUserFromGroup(@PathVariable(value = "id") Long groupId, @Valid @RequestBody UserBean user)
	{
		GroupBean group = groupBeanRepository.findById(groupId).get();
		group.deleteUser(user);
		UserBean deletedUser = userBeanRepository.findById(user.getId()).get();
		deletedUser.deleteGroup(group);
		userBeanRepository.save(deletedUser);
		return groupBeanRepository.save(group);
	}

	//delete a group
	@DeleteMapping("/groups/id")
	public ResponseEntity<?> deleteGroup(@PathVariable(value = "id") Long groupId)
	{
		GroupBean group = groupBeanRepository.findById(groupId).get();
		groupBeanRepository.delete(group);
		return ResponseEntity.ok().build();
	}
}


