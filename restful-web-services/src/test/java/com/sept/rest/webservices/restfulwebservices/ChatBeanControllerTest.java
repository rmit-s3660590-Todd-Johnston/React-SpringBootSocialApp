package com.sept.rest.webservices.restfulwebservices;

import com.sept.rest.webservices.restfulwebservices.ChatBean.ChatBean;
import com.sept.rest.webservices.restfulwebservices.ChatBean.ChatBeanRepository;
import com.sept.rest.webservices.restfulwebservices.UserBean.UserBean;
import com.sept.rest.webservices.restfulwebservices.UserBean.UserBeanRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class ChatBeanControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserBeanRepository mockRepository;
    @MockBean
    private ChatBeanRepository chatBeanRepository;

    UserBean mockUser = new UserBean(1L, "Sherry1377", "Shahrzad", "Rafezi", "Password1234!", false,"gfg");

    @Test
    public void findById(){

    }
}
