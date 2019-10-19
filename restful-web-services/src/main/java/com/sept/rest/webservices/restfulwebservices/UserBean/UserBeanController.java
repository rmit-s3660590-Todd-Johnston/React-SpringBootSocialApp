package com.sept.rest.webservices.restfulwebservices.UserBean;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserBeanController {
    //This annotation is used to wire the bean classes automatically.
    @Autowired
    UserBeanRepository userBeanRepository;
    @Autowired
    UserBeanService service;

    // Get All Users
    @GetMapping("/users")
    public List<UserBean> getAllUsers() {

        //create test users
        createUser(new UserBean((long) 1, "sept", "Test1", "Jeffery", "password", false, "https://pbs.twimg.com/media/Dfbui6uWAAAmSb-.jpg"));
        createUser(new UserBean((long) 2, "PeppaPig", "Peppa", "Pig", "password", false, "https://mediad.publicbroadcasting.net/p/shared/npr/styles/x_large/nprshared/201908/746995873.jpg"));
        //userBeanRepository.save(new UserBean((long) 3, "testMentor", "TestMentor1", "Mentor", "password", true, "fakeurl"));
        // userBeanRepository.save(new UserBean((long) 4, "testMentor2", "TestMentor2", "Mentor", "password", true,"fakeurl1"));

        return service.findAll();
    }

    // Create a new User
    @PostMapping("/users")
    public UserBean createUser(@Valid @RequestBody UserBean user) {
        return userBeanRepository.save(user);
    }


    // Get a Single user
    @RequestMapping("/users/{id}")
    public UserBean getUserById(@PathVariable(value = "id") Long UserId) {
        return userBeanRepository.findById(UserId).get();
        //it says incompatible types, because it uses Long? but if I put get() Method it works
    }

    //find by username
    @GetMapping("/users/{user_name}")
    public UserBean findByUserName(@PathVariable(value = "user_name") String user_name) {
        return service.findByUsername(user_name);
    }

    // Update a user
    @PutMapping("/users/{id}")
    public UserBean updateUser(@PathVariable(value = "id") Long UserId, @Valid @RequestBody UserBean userDetails) {

        UserBean user = userBeanRepository.findById(userId).get();
        //it says incompatible types, because it uses Long? but if I put get() Method it works

        System.out.println("HEY WE HERE");
        System.out.println(userDetails.getProfilePic());
        System.out.println(user.getProfilePic());

        user.setProfilePic(userDetails.getProfilePic() != null ? userDetails.getProfilePic() : user.getProfilePic());

        return userBeanRepository.saveAndFlush(user);
    }

    //update a profile pic
//    @PutMapping("/users/{id}")
//    public UserBean updateProfilePic(@PathVariable(value = "id")Long userId, String profilePic)
//    {
//       UserBean user = userBeanRepository.findById(userId).get();
//       user.setProfilePic(profilePic);
//       return userBeanRepository.save(user);
//    }

    // Delete a user
    @DeleteMapping("/users/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable(value = "id") Long userId) {
        UserBean user = userBeanRepository.findById(userId).get();
        //it says incompatible types, because it uses Long? but if I put get() Method it works

        userBeanRepository.delete(user);

        return ResponseEntity.ok().build();
    }
}
