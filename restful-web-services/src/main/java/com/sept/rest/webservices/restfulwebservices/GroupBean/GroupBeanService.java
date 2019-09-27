package com.sept.rest.webservices.restfulwebservices.GroupBean;

import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class GroupBeanService {
	GroupBeanRepository groupBeanRepository;
	public Optional<GroupBean> findById(Long id)
	{
		return groupBeanRepository.findById(id);
	}
}
