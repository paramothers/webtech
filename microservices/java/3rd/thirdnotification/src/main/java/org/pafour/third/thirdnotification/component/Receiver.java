package org.pafour.third.thirdnotification.component;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.stereotype.Component;

@Component
@RefreshScope
public class Receiver {

	private static Logger log = LoggerFactory.getLogger(Receiver.class);
	
	@Value("${userParamname}")
	private String username;

	private Mailer mailer;

	@Autowired
	public Receiver(Mailer mailer) {

		this.mailer = mailer;
	}

	@RabbitListener(queues = "TestQ")
	private void readMessage(String mail) {

		log.debug("Notification microservices message message for {},  read from rabbot {} ", username, mail);
		mailer.sendMail(mail);
		
	}
}
