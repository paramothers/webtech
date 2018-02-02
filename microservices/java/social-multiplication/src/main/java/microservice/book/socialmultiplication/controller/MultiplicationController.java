package microservice.book.socialmultiplication.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import microservice.book.socialmultiplication.domain.Multiplication;
import microservice.book.socialmultiplication.service.MulitiplicationService;

@RestController
@RequestMapping("/multiplications")
public class MultiplicationController {

	private final MulitiplicationService mulitiplicationService;

	@Autowired
	public MultiplicationController(MulitiplicationService mulitiplicationService) {

		this.mulitiplicationService = mulitiplicationService;
	}

	@GetMapping("/random")
	Multiplication getRandomMultiplication() {
		return mulitiplicationService.createRandomMultiplication();
	}

}
