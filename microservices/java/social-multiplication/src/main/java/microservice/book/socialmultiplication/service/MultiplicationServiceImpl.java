package microservice.book.socialmultiplication.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.Assert;

import microservice.book.socialmultiplication.domain.Multiplication;
import microservice.book.socialmultiplication.domain.MultiplicationResultAttempt;
import microservice.book.socialmultiplication.domain.User;
import microservice.book.socialmultiplication.event.EventDispatcher;
import microservice.book.socialmultiplication.event.MultiplicationSolvedEvent;
import microservice.book.socialmultiplication.repository.MultiplicationResultAttemptRepository;
import microservice.book.socialmultiplication.repository.UserRepository;

@Service
public class MultiplicationServiceImpl implements MulitiplicationService {

	private RandomGeneratorService randomGeneratorService;
	private MultiplicationResultAttemptRepository attemptRepository;
	private UserRepository userRepository;
	private EventDispatcher eventDispatcher;

	@Autowired
	public MultiplicationServiceImpl(RandomGeneratorService randomGeneratorService,
			final MultiplicationResultAttemptRepository attemptRepository, final UserRepository userRepository,
			EventDispatcher eventDispatcher) {
		this.randomGeneratorService = randomGeneratorService;
		this.attemptRepository = attemptRepository;
		this.userRepository = userRepository;
		this.eventDispatcher = eventDispatcher;
	}

	@Override
	public Multiplication createRandomMultiplication() {

		int factorA = randomGeneratorService.generateRandomFact();
		int factorB = randomGeneratorService.generateRandomFact();
		return new Multiplication(factorA, factorB);
	}

	public List<MultiplicationResultAttempt> getStatsForUser(String userAlias) {

		return attemptRepository.findTop5ByUserAliasOrderByIdDesc(userAlias);
	}
	/*
	 * @Override public boolean checkAttemp(MultiplicationResultAttempt
	 * resultAttempt) { // TODO Auto-generated method stub return
	 * resultAttempt.getResultAttempt() ==
	 * resultAttempt.getMultiplication().getFactorA()
	 * resultAttempt.getMultiplication().getFactorB(); }
	 */

	@Override
	@Transactional
	public boolean checkAttempt(final MultiplicationResultAttempt attempt) {

		// Check if the user already exists for that alias
		Optional<User> user = userRepository.findByAlias(attempt.getUser().getAlias());
		// Checks if it's correct
		boolean correct = attempt.getResultAttempt() == attempt.getMultiplication().getFactorA()
				* attempt.getMultiplication().getFactorB();
		// Avoids 'hack' attempts
		Assert.isTrue(!attempt.isCorrect(), "You can't send an attempt marked as correct!!");
		// Creates a copy, now setting the 'correct' field accordingly
		MultiplicationResultAttempt checkedAttempt = new MultiplicationResultAttempt(attempt.getUser(),
				attempt.getMultiplication(), attempt.getResultAttempt(), correct);

		attemptRepository.save(checkedAttempt);

		// Communicates the result via Event
		eventDispatcher.send(new MultiplicationSolvedEvent(checkedAttempt.getId(), checkedAttempt.getUser().getId(),
				checkedAttempt.isCorrect()));
		// Returns the result return correct;
		return correct;
	}

}
