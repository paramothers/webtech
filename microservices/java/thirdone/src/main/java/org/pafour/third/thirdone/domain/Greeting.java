package org.pafour.third.thirdone.domain;

import org.springframework.hateoas.ResourceSupport;

public class Greeting extends ResourceSupport{

	private String greet;

	public Greeting(String greet) {

		this.greet = greet;
	}

	public String getGreet() {
		return greet;
	}

	public void setGreet(String greet) {
		this.greet = greet;
	}

}
