package org.pafour.third.thirdone.component;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Component
public class Receiver {
	
	private static Logger log = LoggerFactory.getLogger(Receiver.class);
	
//	@RabbitListener(queues="TestQ")
	public void processMessage(String content) {
		log.info("ThirdOne microservices received {} ",content);
	}

}
