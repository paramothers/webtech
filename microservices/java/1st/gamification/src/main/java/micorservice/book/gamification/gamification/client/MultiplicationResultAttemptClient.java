package micorservice.book.gamification.gamification.client;

import micorservice.book.gamification.gamification.client.dto.MultiplicationResultAttempt;

public interface MultiplicationResultAttemptClient {
	
	MultiplicationResultAttempt retrieveMultiplicationResultAttemptbyId(final Long multiplicationId);

}
