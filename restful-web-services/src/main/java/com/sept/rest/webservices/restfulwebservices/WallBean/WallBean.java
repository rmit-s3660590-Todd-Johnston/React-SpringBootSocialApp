package com.sept.rest.webservices.restfulwebservices.WallBean;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "wallBean")
public class WallBean {
    @Id
    @GeneratedValue
    private Long id;
    @NotBlank
    private final String type = "w";
    private String post;

    public WallBean(Long id, String post){
        this.id = id;
        this.post = post;
    }

    public String getType()
    {
        return this.type;
    }

    public String getPost() {
        return post;
    }

    public void setPost(String post) {
        this.post = post;
    }

}
