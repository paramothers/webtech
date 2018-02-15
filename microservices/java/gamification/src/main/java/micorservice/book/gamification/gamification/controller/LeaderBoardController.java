package micorservice.book.gamification.gamification.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import micorservice.book.gamification.gamification.domain.LeaderBoardRow;
import micorservice.book.gamification.gamification.service.LeaderBoardService;

@RestController
@RequestMapping("/leaders")
public class LeaderBoardController {

	private final LeaderBoardService leaderBoardService;

	public LeaderBoardController(final LeaderBoardService leaderBoardService) {
		this.leaderBoardService = leaderBoardService;
	}

	@GetMapping
	public List<LeaderBoardRow> getLeaderBoard() {
		return leaderBoardService.getCurrentLeaderBoard();
	}

}
