package com.sept.rest.webservices.restfulwebservices;

import com.sept.rest.webservices.restfulwebservices.UserBean.UserBeanRepository;
import com.sept.rest.webservices.restfulwebservices.WallBean.WallBeanRepository;
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
public class WallBeanControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserBeanRepository mockRepository;
    private WallBeanRepository wallBeanRepository;

    public void findById(){

    }
}
