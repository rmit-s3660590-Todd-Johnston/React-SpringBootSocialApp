package com.sept.rest.webservices.restfulwebservices.UserBean;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

// this interface deals with database management in Java.
//this is where you do queries
//Annotation used to Indicate the DAO (Data Access Object) component in the persistence layer.
@Repository
public interface UserBeanRepository extends JpaRepository<UserBean, Long> {
   // List<UserBean> findAllBy(Long id);

}
