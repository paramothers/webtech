package micorservice.book.gamification.gamification.service;

import micorservice.book.gamification.gamification.domain.GameStats;

public interface GameService {
	GameStats newAttemptForUser(Long userId, Long attemptId, boolean correct);

	GameStats retrieveStatsForUser(Long userId);
	
}
