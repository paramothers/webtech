package org.pafour.third.thirdnotification.config;

import org.springframework.amqp.core.Queue;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Config {

	@Bean
	Queue getQueue() {

		return new Queue("TestQ", false);
	}

}
