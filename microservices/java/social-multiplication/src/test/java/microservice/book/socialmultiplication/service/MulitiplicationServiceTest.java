package microservice.book.socialmultiplication.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import microservice.book.socialmultiplication.domain.Multiplication;

@RunWith(SpringRunner.class)
@SpringBootTest
public class MulitiplicationServiceTest {

	@MockBean
	private RandomGeneratorService randomGeneratorService;

	@Autowired
	MulitiplicationService multiplicationService;

	@Test
	public void testCreateRandomMultiplication() {

		// given(randomGeneratorService.generateRandomFact()). willReturn(50,
		// 30);
		Multiplication multiplication = multiplicationService.createRandomMultiplication();

//		assertThat(multiplication.getFactorA()).isEqualTo(50);
//		assertThat(multiplication.getFactorB()).isEqualTo(30);
//		assertThat(multiplication.getResult()).isEqualTo(1500);
	}

}
