package com.sept.rest.webservices.restfulwebservices.WallBean;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WallBeanRepository extends JpaRepository<WallBean, Long> {
}
