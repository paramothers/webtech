package org.pafour.second.bigmicro.controller;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.pafour.second.bigmicro.domain.Greeting;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.codec.Base64;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.RestTemplate;

@SpringBootTest(webEnvironment=WebEnvironment.RANDOM_PORT)
@RunWith(SpringRunner.class)
public class GreetingControllerTest {

	@Test
	public void testGreeting() {
		// assertTrue(1 ==1);
		
		String plainCredentions = "guest:guest123";
		HttpHeaders header = new HttpHeaders();
		header.add("Authorization", "Basic "+new String(Base64.encode(plainCredentions.getBytes())));

		HttpEntity<String> request = new HttpEntity<String>(header);
		
		RestTemplate restTemplate = new RestTemplate();
//		Greeting greet = restTemplate.getForObject("http://192.168.43.85:8080/greeting", HttpMethod.GET,request, Greeting.class);
		ResponseEntity<Greeting> response  = restTemplate.exchange("http://localhost:8080/greeting",
				HttpMethod.GET,request, Greeting.class);
//		System.out.println(greet.getGreeting());
//		Assert.assertEquals("Hai Paval", greet.getGreeting());
	}

}
