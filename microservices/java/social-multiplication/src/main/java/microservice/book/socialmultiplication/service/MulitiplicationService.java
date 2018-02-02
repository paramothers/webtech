package microservice.book.socialmultiplication.service;

import microservice.book.socialmultiplication.domain.Multiplication;
import microservice.book.socialmultiplication.domain.MultiplicationResultAttempt;

public interface MulitiplicationService {
	
	
	Multiplication createRandomMultiplication();
	boolean checkAttemp(final MultiplicationResultAttempt resultAttempt);
}
