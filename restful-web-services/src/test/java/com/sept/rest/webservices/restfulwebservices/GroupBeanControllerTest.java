package com.sept.rest.webservices.restfulwebservices;

import com.sept.rest.webservices.restfulwebservices.GroupBean.GroupBeanRepository;
import com.sept.rest.webservices.restfulwebservices.UserBean.UserBeanRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class GroupBeanControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private GroupBeanRepository groupBeanRepository;
    @MockBean
    private UserBeanRepository mockRepository;

    @Test
    public void findById(){

    }
}