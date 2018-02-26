package org.pafour.third.thirdbook.domain;

public class Fare {

	public Fare() {
		// TODO Auto-generated constructor stub
	}

	public Fare(String flightNumber, String flightDate, String fare) {
		super();
		this.flightNumber = flightNumber;
		this.flightDate = flightDate;
		this.fare = fare;
	}

	long id;

	String flightNumber;
	String flightDate;
	String fare;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFlightNumber() {
		return flightNumber;
	}

	public void setFlightNumber(String flightNumber) {
		this.flightNumber = flightNumber;
	}

	public String getFlightDate() {
		return flightDate;
	}

	public void setFlightDate(String flightDate) {
		this.flightDate = flightDate;
	}

	public String getFare() {
		return fare;
	}

	public void setFare(String fare) {
		this.fare = fare;
	}

}
