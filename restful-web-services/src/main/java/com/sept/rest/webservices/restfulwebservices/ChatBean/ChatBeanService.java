package com.sept.rest.webservices.restfulwebservices.ChatBean;

import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ChatBeanService {
	ChatBeanRepository chatBeanRepository;

	public Optional<ChatBean> findById(Long id)
	{
		return chatBeanRepository.findById(id);
	}

}
