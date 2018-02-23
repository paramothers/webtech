package org.pafour.third.thirdone;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;

@SpringBootApplication
@EnableGlobalMethodSecurity
@EnableAuthorizationServer
@EnableResourceServer
public class ThirdoneApplication {

	public static void main(String[] args) {
		SpringApplication.run(ThirdoneApplication.class, args);
	}
}
