package microservice.book.socialmultiplication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import microservice.book.socialmultiplication.domain.MultiplicationResultAttempt;
import microservice.book.socialmultiplication.service.MulitiplicationService;

@RestController
@RequestMapping
public class MultiplicationResultAttemptController {

	private final MulitiplicationService multiplicationService;

	@Autowired
	public MultiplicationResultAttemptController(final MulitiplicationService mulitiplicationService) {

		this.multiplicationService = mulitiplicationService;
	}

	/*@Getter
	@RequiredArgsConstructor
	@NoArgsConstructor(force = true)
	private static final class ResultResponse {

		private final boolean correct;
	}*/
	
	@GetMapping
	ResponseEntity<List<MultiplicationResultAttempt>> getStatistics(@RequestParam("alais") String alias){
	
		return ResponseEntity.ok(multiplicationService.getStatsForUser(alias));
	}

	@PostMapping
	ResponseEntity<MultiplicationResultAttempt> postResult(@RequestBody MultiplicationResultAttempt multiplicationResultAttempt) {

		boolean isCorrect = multiplicationService.checkAttempt(multiplicationResultAttempt);
		MultiplicationResultAttempt attemptCopy = new MultiplicationResultAttempt(multiplicationResultAttempt.getUser(),
				multiplicationResultAttempt.getMultiplication(), multiplicationResultAttempt.getResultAttempt(),
				isCorrect);
		return ResponseEntity.ok(attemptCopy);
	}

}
