package org.pafour.third.thirdfare.repository;

import org.pafour.third.thirdfare.entity.Fare;
import org.springframework.data.jpa.repository.JpaRepository;

//@RepositoryRestResource
public interface FareRepository extends JpaRepository<Fare, Long> {
	

	Fare getFareByFlightNumberAndFlightDate(String flightNumber, String flightDate);

}
