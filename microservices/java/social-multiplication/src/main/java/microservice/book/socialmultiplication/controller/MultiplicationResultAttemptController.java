package microservice.book.socialmultiplication.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import microservice.book.socialmultiplication.domain.MultiplicationResultAttempt;
import microservice.book.socialmultiplication.service.MulitiplicationService;

@RestController
@RequestMapping
public class MultiplicationResultAttemptController {

	private final MulitiplicationService mulitiplicationService;

	@Autowired
	public MultiplicationResultAttemptController(final MulitiplicationService mulitiplicationService) {

		this.mulitiplicationService = mulitiplicationService;
	}
	
	@Getter
	@RequiredArgsConstructor
	@NoArgsConstructor(force=true)
	private static final class ResultResponse{
		
		private final boolean correct;
	}
	
	@PostMapping
	ResponseEntity<ResultResponse> postResut(@RequestBody MultiplicationResultAttempt multiplicationResultAttempt){
		
		return ResponseEntity.ok(new ResultResponse(mulitiplicationService.checkAttemp(multiplicationResultAttempt)));
	}

}
