package microservice.book.socialmultiplication.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import microservice.book.socialmultiplication.domain.Multiplication;
import microservice.book.socialmultiplication.domain.MultiplicationResultAttempt;

@Service
public class MultiplicationServiceImpl implements MulitiplicationService {

	private RandomGeneratorService randomGeneratorService;

	@Autowired
	public MultiplicationServiceImpl(RandomGeneratorService randomGeneratorService) {
		this.randomGeneratorService = randomGeneratorService;
	}

	@Override
	public Multiplication createRandomMultiplication() {

		int factorA = randomGeneratorService.generateRandomFact();
		int factorB = randomGeneratorService.generateRandomFact();
		return new Multiplication(factorA, factorB);
	}

	@Override
	public boolean checkAttemp(MultiplicationResultAttempt resultAttempt) {
		// TODO Auto-generated method stub
		return resultAttempt.getResultAttempt() == resultAttempt.getMultiplication().getFactorA()
				* resultAttempt.getMultiplication().getFactorB();
	}

}
