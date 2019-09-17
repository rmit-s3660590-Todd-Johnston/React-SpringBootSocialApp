package com.sept.rest.webservices.restfulwebservices.UserBean;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

@RunWith(SpringRunner.class)
@WebMvcTest(value = UserBeanController.class)
public class UserBeanControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserBeanService userBeanService;

    UserBean mockUser = new UserBean((long) 1, "Sherry1377", "Shahrzad", "Rafezi", "Password123!", false);

    @Test
    public void retrieveDetailsForUser() throws Exception {

        Mockito.when(userBeanService.retrieveUser(Mockito.anyString())).thenReturn(mockUser);

        RequestBuilder requestBuilder = MockMvcRequestBuilders.get("/users/1").accept(MediaType.APPLICATION_JSON);

        MvcResult result = mockMvc.perform(requestBuilder).andReturn();

        System.out.println(result.getResponse());
        String expected = "{id:1,user_name:Sherry1377,name:Shahrzad,last_name:Rafezi,password:Password123,isMentor:false}";

        JSONAssert.assertEquals(expected, result.getResponse().getContentAsString(), false);
    }
}
