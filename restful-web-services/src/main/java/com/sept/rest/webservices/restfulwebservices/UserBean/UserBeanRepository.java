package com.sept.rest.webservices.restfulwebservices.UserBean;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.concurrent.Future;

// this interface deals with database management in Java.
//this is where you do queries
//Annotation used to Indicate the DAO (Data Access Object) component in the persistence layer.
@Repository
public interface UserBeanRepository extends JpaRepository<UserBean, Long> {
   // List<UserBean> findAllBy(Long id);
//	@Query("SELECT u.user_name FROM UserBean u where u.user_name = :user_name")
	//UserBean findByUserName(@Param("user_name")String user_name);

}
