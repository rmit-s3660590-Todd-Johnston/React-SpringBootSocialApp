package com.sept.rest.webservices.restfulwebservices;

import com.sept.rest.webservices.restfulwebservices.GroupBean.GroupBean;
import com.sept.rest.webservices.restfulwebservices.GroupBean.GroupBeanRepository;
import com.sept.rest.webservices.restfulwebservices.UserBean.UserBean;
import com.sept.rest.webservices.restfulwebservices.UserBean.UserBeanRepository;
import com.sept.rest.webservices.restfulwebservices.WallBean.WallBean;
import org.junit.Before;
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

    @Before
   public void sampleData() {
        mockRepository.save(new UserBean( 1L, "sept", "Test1", "Jeffery", "password", false, "https://pbs.twimg.com/media/Dfbui6uWAAAmSb-.jpg"));
        mockRepository.save(new UserBean( 2L, "PeppaPig", "Peppa", "Pig", "password", false, "https://mediad.publicbroadcasting.net/p/shared/npr/styles/x_large/nprshared/201908/746995873.jpg"));
        mockRepository.save(new UserBean(3L, "testMentor", "TestMentor1", "Mentor", "password", true, "fakeurl"));
        mockRepository.save(new UserBean( 4L, "testMentor2", "TestMentor2", "Mentor", "password", true,"fakeurl1"));
        WallBean wall1 = new WallBean(1L, "Post1");
        GroupBean group1 = new GroupBean(1L, "Group1",  1L);
        groupBeanRepository.save(group1);
    }

    @Test
    public void checkNotNull() {
        assertThat(mockRepository).isNotNull();
        assertThat(groupBeanRepository).isNotNull();
        assertThat(groupBeanRepository.findById(1L)).isNotNull();
    }

    @Test
    public void findById(){
        assertThat(groupBeanRepository.findById(1L).get().getId()).isEqualTo(1L);
        //give an error saying "No value present"
    }
}
