package micorservice.book.gamification.gamification.service;

import java.util.List;

import micorservice.book.gamification.gamification.domain.LeaderBoardRow;

public interface LeaderBoardService {

	
	
	List<LeaderBoardRow> getCurrentLeaderBoard();
}
