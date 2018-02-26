package org.pafour.second.hateoas.controller;

import org.pafour.second.hateoas.Greeting;
import org.springframework.hateoas.mvc.ControllerLinkBuilder;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HateoasController {

	@RequestMapping("/greeting2")
	public Greeting greeting2(String name) {
		return new Greeting("from HATAEOAS");
	}

	@RequestMapping("/hateoas")
	@ResponseBody
	public HttpEntity<Greeting> greeting(
			@RequestParam(value = "name", required = false, defaultValue = "HATEOAS") final String name) {

		Greeting greet = new Greeting("Hai Padhu");
		greet.add(ControllerLinkBuilder.linkTo(ControllerLinkBuilder.methodOn(HateoasController.class).greeting2(name))
				.withSelfRel());

		return new ResponseEntity<Greeting>(greet, HttpStatus.OK);
	}
}
