package com.sept.rest.webservices.restfulwebservices;

import com.sept.rest.webservices.restfulwebservices.ChatBean.ChatBean;
import com.sept.rest.webservices.restfulwebservices.GroupBean.GroupBean;
import com.sept.rest.webservices.restfulwebservices.GroupBean.GroupBeanRepository;
import com.sept.rest.webservices.restfulwebservices.UserBean.UserBean;
import com.sept.rest.webservices.restfulwebservices.UserBean.UserBeanRepository;
import com.sept.rest.webservices.restfulwebservices.WallBean.WallBean;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

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
    @BeforeClass
    void sampleData()
    {
        mockRepository.save(new UserBean((long) 1, "sept", "Test1", "Jeffery", "password", false, "https://pbs.twimg.com/media/Dfbui6uWAAAmSb-.jpg"));
        mockRepository.save(new UserBean((long) 2, "PeppaPig", "Peppa", "Pig", "password", false, "https://mediad.publicbroadcasting.net/p/shared/npr/styles/x_large/nprshared/201908/746995873.jpg"));
        mockRepository.save(new UserBean((long) 3, "testMentor", "TestMentor1", "Mentor", "password", true, "fakeurl"));
        mockRepository.save(new UserBean((long) 4, "testMentor2", "TestMentor2", "Mentor", "password", true,"fakeurl1"));
        WallBean wall1 = new WallBean((long)1, "Post1");
        GroupBean group1 = new GroupBean((long)1, "Group1", (long) 1);
        groupBeanRepository.save(group1);

    }

    @Test
    void checkNotNull()
    {
        assertThat(mockRepository).isNotNull();
        assertThat(groupBeanRepository).isNotNull();
        assertThat(groupBeanRepository.findById((long)1).get()).isNotNull();
    }
    @Test
    public void findById(){
        assertThat(groupBeanRepository.findById((long)1).get().getId()).isEqualTo((long)1);
    }
}
