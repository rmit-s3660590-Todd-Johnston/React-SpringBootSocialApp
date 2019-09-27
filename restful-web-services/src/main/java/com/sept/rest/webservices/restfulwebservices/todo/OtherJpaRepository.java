package com.sept.rest.webservices.restfulwebservices.todo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OtherJpaRepository extends JpaRepository<Other, Long>{
	List<Other> findByUsername(String username);
}