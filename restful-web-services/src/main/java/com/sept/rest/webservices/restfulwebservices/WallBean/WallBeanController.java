package com.sept.rest.webservices.restfulwebservices.WallBean;
import com.sept.rest.webservices.restfulwebservices.UserBean.UserBean;
import com.sept.rest.webservices.restfulwebservices.UserBean.UserBeanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@CrossOrigin(origins="http://localhost:4200")
public class WallBeanController {

    @Autowired
    WallBeanRepository wallBeanRepository;
    @Autowired
    UserBeanRepository userBeanRepository;

    // Get All Posts
    @GetMapping("/posts")
    public List<WallBean> getAllPosts() {
        return wallBeanRepository.findAll();
    }

    // Create a new Post
    @PostMapping("/posts")
    public WallBean createPost(@Valid @RequestBody WallBean wall) {
        return wallBeanRepository.save(wall);
    }


    // Get a Single Post
    @GetMapping("/posts/{id}")
    public WallBean getPostById(@PathVariable(value = "id") Long postId){
        return wallBeanRepository.findById(postId).get();
    }

    // Update a Post
    @PutMapping("/posts/{id}")
    public WallBean updatePost(@PathVariable(value = "id") Long postId, @Valid @RequestBody WallBean postDetails, @Valid @RequestBody UserBean user){
        WallBean wall = wallBeanRepository.findById(postId).get();
        wall.setPost(postDetails.getPost());
        WallBean updatedWall = wallBeanRepository.save(wall);

        UserBean postUser = userBeanRepository.findById(user.getId()).get();
        postUser.setUserWall(updatedWall);
        userBeanRepository.save(postUser);
        return updatedWall;
    }


    // Delete a post
    @DeleteMapping("/posts/{id}")
    public ResponseEntity<?> deletePost(@PathVariable(value = "id") Long postId, @Valid @RequestBody UserBean user){
        WallBean wall = wallBeanRepository.findById(postId).get();
        wallBeanRepository.delete(wall);

        UserBean postUser = userBeanRepository.findById(user.getId()).get();
        postUser.setUserWall(null);
        userBeanRepository.save(postUser);
        return ResponseEntity.ok().build();
    }

}
