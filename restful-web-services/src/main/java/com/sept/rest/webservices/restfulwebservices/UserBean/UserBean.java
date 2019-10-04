package com.sept.rest.webservices.restfulwebservices.UserBean;
import com.sept.rest.webservices.restfulwebservices.ChatBean.ChatBean;
import com.sept.rest.webservices.restfulwebservices.GroupBean.GroupBean;
import com.sept.rest.webservices.restfulwebservices.WallBean.WallBean;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;

@Entity
@Table(name = "userBean")
public class UserBean {

    @Id
    @GeneratedValue
    private Long id;

    private final String type = "u";

    private String user_name;

    private String name;

    private String last_name;

    private String password;

    private boolean isMentor;

    private String profilePic;

    private String[] subjects;


    private ArrayList<Long> userChats;
    private ArrayList<Long> userGroups;
    private Long userWallID;



    public UserBean() {
        super();
    }


    public UserBean(Long id, String user_name, String name, String last_name, String password, boolean isMentor, String profilePic){
        super();
        this.id = id;
        this.user_name = user_name;
        this.name = name;
        this.last_name = last_name;
        this.password = password;
        this.isMentor = isMentor;
        this.profilePic = profilePic;
        this.subjects = new String[4];//uninitialised list of classes, to be done via addclass method after user creation
        //max classes/subjects
        this.userChats = new ArrayList<>();
        this.userGroups = new ArrayList<>();


    }

    public Long getId() {
        return id;
    }

    public String getType()
    {
        return type;
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

    public String getProfilePic() {
        return profilePic;
    }

    public void setProfilePic(String profilePic) {
        this.profilePic = profilePic;
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

    public String[] getSubjects()
    {
        return this.subjects;
    }

    public void setSubjects(String[] subjects)
    {
        this.subjects = subjects;
    }

    public void addChat(ChatBean chat)
    {
        this.userChats.add(chat.getId());
    }

    public void deleteChat(ChatBean chat)
    {
        this.userChats.remove(chat.getId());
    }

    public void addGroup(GroupBean group)
    {
        this.userGroups.add(group.getId());
    }

    public void deleteGroup(GroupBean group)
    {
        this.userGroups.remove(group.getId());
    }

    public void setUserWall(WallBean wall)
    {
        this.userWallID = wall.getId();
    }

    public Long getUserWall()
    {
        return this.userWallID;
    }

    public ArrayList<Long> getUserChats()
    {
        return this.userChats;
    }

    public ArrayList<Long> getUserGroups() {
        return userGroups;
    }
}
