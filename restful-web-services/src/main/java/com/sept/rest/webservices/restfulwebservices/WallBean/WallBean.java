package com.sept.rest.webservices.restfulwebservices.WallBean;

import javax.persistence.*;

@Entity
@Table(name = "wallBean")
public class WallBean {
    @Id
    @GeneratedValue
    private String id;
    private String post;

    public WallBean(String id, String post){
        this.id = "w" + id;
        this.post = post;
    }

    public String getPost() {
        return post;
    }

    public void setPost(String post) {
        this.post = post;
    }

}
