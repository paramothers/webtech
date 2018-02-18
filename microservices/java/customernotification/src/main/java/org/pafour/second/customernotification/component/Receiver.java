package org.pafour.second.customernotification.component;

import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
public class Receiver {

	@Autowired
	Mailer mailer;
	
	@Bean
	public Queue queue() {

		return new Queue("CustomerQ", false);
	}
	
	@RabbitListener(queues="CustomerQ")
	public void messageListener(String  email) {
		
		System.out.println("email "+email);
		mailer.sendMail(email);
	}
}
