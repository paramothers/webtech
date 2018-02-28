package org.pafour.third.thirdfare.component;

import org.pafour.third.thirdfare.entity.Fare;
import org.pafour.third.thirdfare.repository.FareRepository;
import org.springframework.stereotype.Component;

@Component
public class FareComponent {

	private FareRepository fareRepository;

	public FareComponent(FareRepository fareRepository) {
		
		this.fareRepository =  fareRepository;
	}

	public Fare get(String flightNumber, String flightDate) {
		
		return fareRepository.getFareByFlightNumberAndFlightDate(flightNumber, flightDate);
		
	}

	public Object save(Fare fare) {
		
		return fareRepository.save(fare);
	}

}
