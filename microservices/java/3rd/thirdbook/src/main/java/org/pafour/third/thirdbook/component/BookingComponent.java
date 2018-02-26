package org.pafour.third.thirdbook.component;

import org.pafour.third.thirdbook.domain.Fare;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class BookingComponent {

	FareServiceProxy fareServiceProxy;

	@Autowired
	public BookingComponent(FareServiceProxy fareServiceProxy) {

		this.fareServiceProxy = fareServiceProxy;
		
	}

	public Fare getFare(String flightNumber, String flightDate) {
		
		return fareServiceProxy.getFare(flightNumber, flightDate);
	}

}
