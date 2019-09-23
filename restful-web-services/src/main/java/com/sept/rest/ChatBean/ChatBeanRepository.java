package com.sept.rest.ChatBean;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChatBeanRepository extends JpaRepository<ChatBean, Long> {
}
