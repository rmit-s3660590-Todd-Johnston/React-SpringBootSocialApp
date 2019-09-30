package com.sept.rest.webservices.restfulwebservices;

import com.sept.rest.webservices.restfulwebservices.ChatBean.ChatBean;
import com.sept.rest.webservices.restfulwebservices.ChatBean.ChatBeanRepository;
import com.sept.rest.webservices.restfulwebservices.UserBean.UserBean;
import com.sept.rest.webservices.restfulwebservices.UserBean.UserBeanRepository;
import org.junit.BeforeClass;
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

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class ChatBeanControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserBeanRepository mockRepository;
    @MockBean
    private ChatBeanRepository chatRepository;
    @MockBean

    UserBean mockUser = new UserBean(1L, "Sherry1377", "Shahrzad", "Rafezi", "Password1234!", false,"gfg");

    @BeforeClass
    void sampleData() {
        mockRepository.save(new UserBean( 1L, "sept", "Test1", "Jeffery", "password", false, "https://pbs.twimg.com/media/Dfbui6uWAAAmSb-.jpg"));
        mockRepository.save(new UserBean( 2L, "PeppaPig", "Peppa", "Pig", "password", false, "https://mediad.publicbroadcasting.net/p/shared/npr/styles/x_large/nprshared/201908/746995873.jpg"));
        mockRepository.save(new UserBean( 3L, "testMentor", "TestMentor1", "Mentor", "password", true, "fakeurl"));
        mockRepository.save(new UserBean( 4L, "testMentor2", "TestMentor2", "Mentor", "password", true,"fakeurl1"));
        chatRepository.save(new ChatBean( 1L,null));
        chatRepository.save(new ChatBean( 2L,null));
        chatRepository.findById(1L).get().addUserBean(1L);
    }

    @Test
    void checkNotNull() {
        assertThat(mockRepository).isNotNull();
        assertThat(chatRepository).isNotNull();
        assertThat(chatRepository.findById((long)1).get()).isNotNull();
    }

    @Test
    public void findById(){
        ArrayList<Long> userIds = new ArrayList<>();
        userIds.add((long)1);
        assertThat(chatRepository.findById((long)1).get().getUserIds()).isEqualTo(userIds);
    }
}
