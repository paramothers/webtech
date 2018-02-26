package org.pafour.third.thirdone.exception;

public class CustomerAlreadyExistException extends RuntimeException {

	public CustomerAlreadyExistException(String message) {
		
		super(message);
	}
}
