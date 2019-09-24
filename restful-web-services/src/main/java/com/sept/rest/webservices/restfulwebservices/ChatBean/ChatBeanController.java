package com.sept.rest.webservices.restfulwebservices.ChatBean;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")

public class ChatBeanController {
	@Autowired
	ChatBeanRepository chatBeanRepository;

	//return all chatBeans
	@GetMapping("/chat")
	public List<ChatBean> getAllChatBeans ()
	{
		return chatBeanRepository.findAll();
	}

	//get chatBean by id
	@GetMapping("/chat/{id}")
	public ChatBean getChatById(@PathVariable(value = "id") Long chatId)
	{
		return chatBeanRepository.findById(chatId).get();
	}

	//creating a new chat
	@PostMapping("/chat")
	public ChatBean createChat(@Valid @RequestBody ChatBean chat)
	{
		return chatBeanRepository.save(chat);
	}

	//add a message to a chat
	@PutMapping("/chat/{id}")
			 public ChatBean addMessage(@PathVariable(value = "id") Long chatId, @Valid @RequestBody MessageBean messageDetails)
	{
		ChatBean chat = chatBeanRepository.findById(chatId).get();
		chat.addMessage(messageDetails);
		ChatBean updatedChat = chatBeanRepository.save(chat);
		return updatedChat;
	}

	//delete a chat
	@DeleteMapping("/chat/{id}")
	public ResponseEntity<?> deleteChat(@PathVariable(value = "id") Long chatId)
	{
		ChatBean chat = chatBeanRepository.findById(chatId).get();
		chatBeanRepository.delete(chat);
		return ResponseEntity.ok().build();
	}

}
