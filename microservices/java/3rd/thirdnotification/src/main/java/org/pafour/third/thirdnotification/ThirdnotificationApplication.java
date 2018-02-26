package org.pafour.third.thirdnotification;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class ThirdnotificationApplication {

	public static void main(String[] args) {
		SpringApplication.run(ThirdnotificationApplication.class, args);
	}
}
