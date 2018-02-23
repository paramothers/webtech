package org.pafour.second.actuatordemo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingActuatorController {

	@RequestMapping(path="/greet", method=RequestMethod.GET)
	public String greeting() {
		return "hai param";
	}
}
