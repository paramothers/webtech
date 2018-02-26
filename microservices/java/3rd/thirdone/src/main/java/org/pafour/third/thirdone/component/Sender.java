package org.pafour.third.thirdone.component;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.core.RabbitMessagingTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Sender {
	
	@Autowired
	RabbitMessagingTemplate messagingTemplate;
	private static Logger log = LoggerFactory.getLogger(Sender.class);
	
	public void send(String message) {
		
		messagingTemplate.convertAndSend("TestQ",message);
		log.debug("Message {} has been send to RabbitMQ",message);
		
	}

}
