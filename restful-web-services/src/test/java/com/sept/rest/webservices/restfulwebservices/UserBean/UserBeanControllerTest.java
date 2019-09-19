package com.sept.rest.webservices.restfulwebservices.UserBean;

import org.junit.Test;
import org.junit.jupiter.api.AfterEach;
import org.junit.runner.RunWith;
import static org.junit.Assert.assertEquals;
import org.mockito.Mockito;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class UserBeanControllerTest {

    @Autowired
    private MockMvc mvc;

    @MockBean
    private UserBeanService userBeanService;

    UserBean mockUser = new UserBean(1, "Sherry1377", "Shahrzad", "Rafezi", "Password123!", false);

    @Test
    public void retrieveDetailsForUser() throws Exception {

        Mockito.when(userBeanService.retrieveUser(1)).thenReturn(mockUser);

//        RequestBuilder requestBuilder = MockMvcRequestBuilders.get("/users/1").accept(MediaType.APPLICATION_JSON);
//
//        MvcResult result = mvc.perform(requestBuilder).andReturn();
//
//        System.out.println(result.getResponse());
//        String expected = "{id:1,user_name:Sherry1377,name:Shahrzad,last_name:Rafezi,password:Password123,isMentor:false}";
//
//        JSONAssert.assertEquals(expected, result.getResponse().getContentAsString(), false);
    }

    @AfterEach
    @Test
    public void setDetailsForUser() throws Exception
    {
        RequestBuilder requestBuilder = MockMvcRequestBuilders.get("/users/1").accept(MediaType.APPLICATION_JSON);

        mockUser.setName("newName");
        mockUser.setLast_name("newLastName");
        mockUser.setMentor(true);

        MvcResult result = mvc.perform(requestBuilder).andReturn();
        String expected = "{id:1,user_name:Sherry1377,name:newName,last_name:newLastName,password:Password123,isMentor:true}";

        assertEquals(expected,result.getResponse().getContentAsString(),false);
    }

}
