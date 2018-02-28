package org.pafour.third.thirdbook.component;

import org.pafour.third.thirdbook.domain.Fare;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;

@Component
public class BookingComponent {

	FareServiceProxy fareServiceProxy;

	@Autowired
	public BookingComponent(FareServiceProxy fareServiceProxy) {

		this.fareServiceProxy = fareServiceProxy;
		
	}

	@HystrixCommand(fallbackMethod="getDummy")
	public Fare getFare(String flightNumber, String flightDate) {
		
		return fareServiceProxy.getFare(flightNumber, flightDate);
	}
	
	private Fare getDummy() {
		return new Fare();
	}

}
