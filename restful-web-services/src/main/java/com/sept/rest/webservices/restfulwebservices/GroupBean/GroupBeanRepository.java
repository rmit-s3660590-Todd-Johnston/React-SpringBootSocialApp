package com.sept.rest.webservices.restfulwebservices.GroupBean;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GroupBeanRepository extends JpaRepository<GroupBean, Long> {

}
