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
    @NotBlank
    private String password;
    @NotBlank
    private boolean isMentor;
    @NotBlank
    private String[] subjects;


    public UserBean() {
        super();
    }

    public UserBean(Long id, String user_name, String name, String last_name, String password, boolean isMentor){
        super();
        this.id = id;
        this.user_name = user_name;
        this.name = name;
        this.last_name = last_name;
        this.password = password;
        this.isMentor = isMentor;
        this.subjects = new String[4];//uninitialised list of classes, to be done via addclass method after user creation
        //max classes/subjects

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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setMentor(boolean isMentor)
    {
        this.isMentor = isMentor;
    }

    public boolean getMentor()
    {
        return this.isMentor;
    }

    public String addSubject(String subject)
    {
        //checking if all class slots are taken
        for(int i = 0; i< this.subjects.length; i++)
        {
            if(this.subjects[i]==null)
            {
               this.subjects[i] = subject;
                return "Subject Added Successfully";
            }
        }
        //if no slot is found
        return "Subjects full! Please remove a class before adding another";
    }

    public String removeSubject(String subject)
    {
        for(int i = 0; i< this.subjects.length; i++)
        {
            if(this.subjects[i].equals(subject))
            {
                this.subjects[i] = null;
                return "Subject removed Successfully";
            }
        }
        return "Unable to find subject";
    }
}
