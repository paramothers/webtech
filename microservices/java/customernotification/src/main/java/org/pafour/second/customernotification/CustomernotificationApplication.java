package org.pafour.second.customernotification;

import org.springframework.amqp.rabbit.annotation.EnableRabbit;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableRabbit
public class CustomernotificationApplication {

	public static void main(String[] args) {
		SpringApplication.run(CustomernotificationApplication.class, args);
	}
}
