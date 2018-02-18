package org.pafour.second.customernotification.component;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

@Component
public class Mailer {

	@Autowired
	private JavaMailSender javamailSender;
	
	public void sendMail(String email) {
		// TODO Auto-generated method stub
	
		SimpleMailMessage simplemail = new SimpleMailMessage();
		simplemail.setTo(email);
		simplemail.setText("Cusomer has created");
		simplemail.setSubject("New Customer");
		
		javamailSender.send(simplemail);
		
	}

}
