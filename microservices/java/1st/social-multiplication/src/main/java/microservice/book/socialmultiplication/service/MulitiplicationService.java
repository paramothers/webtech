package microservice.book.socialmultiplication.service;

import java.util.List;

import microservice.book.socialmultiplication.domain.Multiplication;
import microservice.book.socialmultiplication.domain.MultiplicationResultAttempt;

public interface MulitiplicationService {
	
	
	Multiplication createRandomMultiplication();
	boolean checkAttempt(final MultiplicationResultAttempt resultAttempt);
	List<MultiplicationResultAttempt> getStatsForUser(String alias);
}
