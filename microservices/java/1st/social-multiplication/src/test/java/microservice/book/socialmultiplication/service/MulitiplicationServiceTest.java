package microservice.book.socialmultiplication.service;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import microservice.book.socialmultiplication.domain.Multiplication;

@RunWith(SpringRunner.class)
@SpringBootTest
public class MulitiplicationServiceTest {

	@Mock
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
	
	@Before
	public void setup(){
		
		MockitoAnnotations.initMocks(this);
	}

}
