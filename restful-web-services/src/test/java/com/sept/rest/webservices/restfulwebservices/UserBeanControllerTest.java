package com.sept.rest.webservices.restfulwebservices;

import com.sept.rest.webservices.restfulwebservices.UserBean.*;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Optional;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class UserBeanControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserBeanRepository mockRepository;

    UserBean mockUser = new UserBean(1L, "Sherry1377", "Shahrzad", "Rafezi", "Password1234!", false);

    @Test
    public void findById(){
        Mockito.when(mockRepository.findById(mockUser.getId())).thenReturn(Optional.of(mockUser));
    }

    @Test
    public void saveTest() {
        UserBean mockUser1 = new UserBean(2L, "Todd1256", "Todd", "Johnston", "Password", true);
        mockRepository.save(mockUser1);
        Assert.assertNotNull(mockRepository.findById(mockUser1.getId()));
    }
}
