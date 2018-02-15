package microservice.book.socialmultiplication.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;
import microservice.book.socialmultiplication.domain.Multiplication;
import microservice.book.socialmultiplication.service.MulitiplicationService;

@Slf4j
@RestController
@RequestMapping("/multiplications")
public class MultiplicationController {

	private final MulitiplicationService mulitiplicationService;
	private final int serverPort;

	@Autowired
	public MultiplicationController(@Value("${server.port}") final int port,MulitiplicationService mulitiplicationService) {

		this.mulitiplicationService = mulitiplicationService;
		this.serverPort = port;
	}

	@GetMapping("/random")
	Multiplication getRandomMultiplication() {
		
//		log.info("Generating a random multiplication from server @ {}", serverPort);
		return mulitiplicationService.createRandomMultiplication();
	}

}
