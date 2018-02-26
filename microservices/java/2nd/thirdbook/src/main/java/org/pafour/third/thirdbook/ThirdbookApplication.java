package org.pafour.third.thirdbook;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.feign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class ThirdbookApplication {

	public static void main(String[] args) {
		SpringApplication.run(ThirdbookApplication.class, args);
	}
}
