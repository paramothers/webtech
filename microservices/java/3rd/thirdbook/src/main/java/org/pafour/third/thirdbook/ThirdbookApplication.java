package org.pafour.third.thirdbook;

import org.pafour.third.thirdbook.component.BookingComponent;
import org.pafour.third.thirdbook.component.StreamSender;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.circuitbreaker.EnableCircuitBreaker;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.feign.EnableFeignClients;

import org.slf4j.Logger;

@SpringBootApplication
//@EnableDiscoveryClient
@EnableFeignClients
@EnableCircuitBreaker
public class ThirdbookApplication implements CommandLineRunner {

	private static Logger log = LoggerFactory.getLogger(ThirdbookApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(ThirdbookApplication.class, args);
	}

	@Autowired
	BookingComponent bookingComponent;

	@Autowired
	StreamSender streamSender;

	@Override
	public void run(String... args) throws Exception {

		// Fare fare = bookingComponent.getFare("BF101", "22-JAN-16");
		//
		// log.debug("the fare by booking service {}",fare.getFare());
		streamSender.send("Hi, Padhu-pavalan-parithi");
		log.info("Message has sent");
		;

	}
}
