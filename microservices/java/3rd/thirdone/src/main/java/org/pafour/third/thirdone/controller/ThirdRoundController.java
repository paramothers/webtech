package org.pafour.third.thirdone.controller;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;

import org.pafour.third.thirdone.domain.Greeting;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ThirdRoundController {
	
	
	
	@Autowired
	Environment env;
	
	private static Logger log = LoggerFactory.getLogger(ThirdRoundController.class);
	
	@RequestMapping("/thirdgreet")
	@CrossOrigin
	public Greeting sayGreet() {
		
		log.debug("My firt logback");
		log.debug("The owner of company is allow Gross origin "+env.getProperty("org.pafour"));
		log.debug("hai param");
		return new Greeting("Hai Param");
	}
	
	@ResponseBody
	@RequestMapping("/greetings")
	public HttpEntity<Greeting> greeting(@RequestParam(value="name", required=false,defaultValue="HATEOAS") String name ){
		
		Greeting greeting = new Greeting("Hai "+name);
		
		greeting.add(linkTo(methodOn(ThirdRoundController. class).greeting(name)).withSelfRel());
		log.debug("Simple testing.");
		return new ResponseEntity<Greeting>( greeting, HttpStatus.OK);
	}

}
