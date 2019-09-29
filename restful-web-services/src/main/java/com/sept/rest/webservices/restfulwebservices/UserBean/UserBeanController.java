package com.sept.rest.webservices.restfulwebservices.UserBean;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController
@CrossOrigin(origins="http://localhost:4200")
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
       // userBeanRepository.save(new UserBean((long) 3, "testMentor", "TestMentor1", "Mentor", "password", true));
      //  userBeanRepository.save(new UserBean((long) 4, "testMentor2", "TestMentor2", "Mentor", "password", true));

        return service.findAll();
    }

    // Create a new User
    @PostMapping("/users")
    public UserBean createUser(@Valid @RequestBody UserBean user) {
        return userBeanRepository.save(user);
    }

    // Get a Single user
    @RequestMapping("/users/{id}")
    public UserBean getUserById(@PathVariable(value = "id") Long UserId){
        return userBeanRepository.findById(UserId).get();
        //it says incompatible types, because it uses Long? but if I put get() Method it works
    }

    //find by username
    @GetMapping("/users/{user_name}")
    public UserBean findByUserName(@PathVariable(value = "user_name") String user_name)
    {
        return service.findByUsername(user_name);
    }

    // Update a user
    @PutMapping("/users/{id}")
    public UserBean updateUser(@PathVariable(value = "id") Long UserId, @Valid @RequestBody UserBean userDetails){

        UserBean user = userBeanRepository.findById(UserId).get();
        //it says incompatible types, because it uses Long? but if I put get() Method it works

        user.setUser_name(userDetails.getUser_name());
        user.setName(userDetails.getName());
        user.setLast_name(userDetails.getLast_name());
        user.setPassword(userDetails.getPassword());
        user.setMentor(userDetails.getMentor());
        user.setSubjects(userDetails.getSubjects());

        UserBean updatedUser = userBeanRepository.save(user);

        return updatedUser;
    }

    // Delete a user
    @DeleteMapping("/users/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable(value = "id") Long userId){
        UserBean user = userBeanRepository.findById(userId).get();
        //it says incompatible types, because it uses Long? but if I put get() Method it works

        userBeanRepository.delete(user);

        return ResponseEntity.ok().build();
    }
}
