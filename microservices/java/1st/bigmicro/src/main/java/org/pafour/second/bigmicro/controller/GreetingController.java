package org.pafour.second.bigmicro.controller;

import org.pafour.second.bigmicro.domain.Greeting;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class GreetingController {
	
	@Autowired
	Environment env;
	
	private static final Logger logger = LoggerFactory.getLogger(GreetingController.class);
	
	@CrossOrigin
	@RequestMapping("/greeting")
	public Greeting greeting() {
		
		logger.debug(" anonymouse property name from "+env.getProperty("pafour.name"));
		System.out.println(" anonymouse property name from "+env.getProperty("pafour.name"));
		return new Greeting("Hai Pavalan and Parithi");
	}
}
