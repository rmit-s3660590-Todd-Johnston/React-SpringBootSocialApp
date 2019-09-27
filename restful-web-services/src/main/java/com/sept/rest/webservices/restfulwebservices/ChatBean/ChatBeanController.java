package com.sept.rest.webservices.restfulwebservices.ChatBean;

import com.sept.rest.webservices.restfulwebservices.UserBean.UserBean;
import com.sept.rest.webservices.restfulwebservices.UserBean.UserBeanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ChatBeanController {
    @Autowired
    ChatBeanRepository chatBeanRepository;
    @Autowired
    UserBeanRepository userBeanRepository;

    //return all chatbeans
    @GetMapping("/chat")
    public List<ChatBean> getAllChatBeans() {
        return chatBeanRepository.findAll();
    }

    //get chatBean by id
    @GetMapping("/chat/{id}")
    public ChatBean getChatById(@PathVariable(value = "id") Long chatId) {
        return chatBeanRepository.findById(chatId).get();
    }

    //creating a new chat
    @PostMapping("/chat")
    public ChatBean createChat(@Valid @RequestBody ChatBean chat) {
        return chatBeanRepository.save(chat);
    }

    //add a message to a chat
    @PutMapping("/chat/{id}")
    public ChatBean addMessage(@PathVariable(value = "id") Long chatId, @Valid @RequestBody MessageBean messageDetails) {
        ChatBean chat = chatBeanRepository.findById(chatId).get();
        chat.addMessage(messageDetails.getId());
        ChatBean updatedChat = chatBeanRepository.save(chat);
        return updatedChat;
    }

    //add a user to a chat
    @PutMapping("/chat/users/{id}")
    public ChatBean addUser(@PathVariable(value = "id") Long chatId, @Valid @RequestBody UserBean user) {
        ChatBean chat = chatBeanRepository.findById(chatId).get();
        chat.addUserBean(user.getId());
        ChatBean updatedChat = chatBeanRepository.save(chat);
        UserBean addedUser = userBeanRepository.findById(user.getId()).get();
        addedUser.addChat(chat);
        userBeanRepository.save(addedUser);
        return chatBeanRepository.save(updatedChat);
    }

    //delete a chat
    @DeleteMapping("/chat/{id}")
    public ResponseEntity<?> deleteChat(@PathVariable(value = "id") Long chatId) {
        ChatBean chat = chatBeanRepository.findById(chatId).get();
        chatBeanRepository.delete(chat);
        return ResponseEntity.ok().build();
    }

    //delete a user from a chat
    @DeleteMapping("/chat/users/{id}")
    public ChatBean deleteUser(@PathVariable(value = "id") Long chatId, @Valid @RequestBody UserBean user) {
        ChatBean chat = chatBeanRepository.findById(chatId).get();
        chat.deleteUserBean(user.getId());
        UserBean deletedUser = userBeanRepository.findById(user.getId()).get();
        deletedUser.deleteChat(chat);
        userBeanRepository.save(deletedUser);
        return chatBeanRepository.save(chat);

    }
}
