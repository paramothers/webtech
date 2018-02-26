package org.pafour.third.thirdnotification.component;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

@Component
public class Mailer {

	private static Logger log = LoggerFactory.getLogger(Mailer.class);
	@Autowired
	private JavaMailSender javamailSender;
	
	public void sendMail(String mailId) {

		SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
		simpleMailMessage.setSubject("Customer created");
		simpleMailMessage.setText("this is simple message content");
		simpleMailMessage.setTo(mailId);
		
		javamailSender.send(simpleMailMessage);
		log.debug("Mail has been send to {} ", mailId);
	}
}
