package com.sept.rest.webservices.restfulwebservices.ChatBean;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;

@Entity
@Table(name = "chat")
public class ChatBean {
    @Id
    @GeneratedValue
    private Long id;

    @NotBlank
    private final String type = "c";

    @NotBlank
    private ArrayList<Long> userIDs;

    @NotBlank
    private ArrayList<Long> messageIDs;

    public ChatBean(Long id, ArrayList<Long> users) {
        this.id = id;
        this.userIDs = users;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return this.type;
    }

    public ArrayList<Long> getUserIds() {
        return this.userIDs;
    }

    public void addUserBean(Long userBean) {
        // if new chat instance
        if (this.userIDs == null) {
            this.userIDs = new ArrayList<Long>();
        }
        this.userIDs.add(userBean);
    }

    public void addMessage(Long messageID) {
        //if first messageBean
        if (this.messageIDs == null) {
            this.messageIDs = new ArrayList<Long>();
        }
        this.messageIDs.add(messageID);
    }

    public void deleteUserBean(Long user) {
        userIDs.remove(user);
    }
}
