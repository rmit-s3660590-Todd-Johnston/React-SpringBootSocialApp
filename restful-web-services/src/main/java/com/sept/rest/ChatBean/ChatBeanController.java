package com.sept.rest.ChatBean;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:4200")

public class ChatBeanController {
	@Autowired
	ChatBeanRepository chatBeanRepository;

	

}
