package com.sept.rest.webservices.restfulwebservices.UserBean;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//Controller
@RestController
@CrossOrigin(origins="http://localhost:4200")

public class UserBeanController {
    @GetMapping(path = "/user")

    public UserBean helloWorld() {
        return new UserBean("Test");
    }
}
