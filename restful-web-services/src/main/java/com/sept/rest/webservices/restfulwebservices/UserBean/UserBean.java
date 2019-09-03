package com.sept.rest.webservices.restfulwebservices.UserBean;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "userBean")
public class UserBean {

    @Id
    @GeneratedValue
    private Long id;
    @NotBlank
    private String user_name;
    @NotBlank
    private String name;
    @NotBlank
    private String last_name;


    public UserBean() {
        super();
    }

    public UserBean(Long id, String user_name, String name, String last_name){
        super();
        this.id = id;
        this.user_name = user_name;
        this.name = name;
        this.last_name = last_name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }
}
