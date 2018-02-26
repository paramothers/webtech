package org.pafour.third.thirdfare;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.pafour.third.thirdfare.component.FareComponent;
import org.pafour.third.thirdfare.controller.FareController;
import org.pafour.third.thirdfare.entity.Fare;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
@EnableDiscoveryClient
public class ThirdfareApplication implements CommandLineRunner {

	private static Logger log = LoggerFactory.getLogger(FareController.class);

	@Autowired
	FareComponent fareComponent;

	public static void main(String[] args) {
		SpringApplication.run(ThirdfareApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		Fare[] fares = {

				new Fare("BF100", "22-JAN-16", "101"), new Fare("BF101", "22-JAN-16", "101"),
				new Fare("BF102", "22-JAN-16", "102"), new Fare("BF103", "22-JAN-16", "103"),
				new Fare("BF104", "22-JAN-16", "104"), new Fare("BF105", "22-JAN-16", "105"),
				new Fare("BF106", "22-JAN-16", "106") };

		List<Fare> fareList = Arrays.stream(fares).collect(Collectors.toList());
		fareList.forEach(fare -> fareComponent.save(fare));
		log.info("Result fare:  "+fareComponent.get("BF101","22-JAN-16").getFare());
		
	}
}
