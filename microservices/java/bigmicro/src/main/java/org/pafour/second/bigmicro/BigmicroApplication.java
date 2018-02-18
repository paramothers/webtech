package org.pafour.second.bigmicro;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;

@EnableGlobalMethodSecurity
@SpringBootApplication
public class BigmicroApplication {

	public static void main(String[] args) {
		SpringApplication.run(BigmicroApplication.class, args);
	}
}
