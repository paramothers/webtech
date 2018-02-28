package org.pafour.third.thirdfare.controller;

import org.pafour.third.thirdfare.component.FareComponent;
import org.pafour.third.thirdfare.entity.Fare;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/fares")
public class FareController {

	private static Logger log = LoggerFactory.getLogger(FareController.class);
	private FareComponent fareComponent;

	@Autowired
	public FareController(FareComponent fareComponent) {

		this.fareComponent = fareComponent;
	}
	
	@RequestMapping("/get")
	public Fare getFares(@RequestParam("flightNumber") String flightNumber, @RequestParam("flightDate") String flightDate){
		
		log.info("traceid");
		return fareComponent.get(flightNumber, flightDate);
	}

}
