package org.pafour.second.hateoas;

import org.springframework.hateoas.ResourceSupport;

public class Greeting extends ResourceSupport{

	private String greeting;

	public Greeting() {

	}

	public Greeting(String greeting) {
		this.greeting = greeting;
	}

	public String getGreeting() {
		return greeting;
	}

	public void setGreeting(String greeting) {
		this.greeting = greeting;
	}
}
