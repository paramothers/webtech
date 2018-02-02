package microservice.book.socialmultiplication.controller;

import static org.junit.Assert.fail;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.json.JacksonTester;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;

import microservice.book.socialmultiplication.domain.Multiplication;
import microservice.book.socialmultiplication.service.MulitiplicationService;

@RunWith(SpringRunner.class)
@WebMvcTest
public class MultiplicationControllerTest {

	@MockBean
	private MulitiplicationService multiplicationControllerTest;
	
	@Autowired
	private MockMvc mvc;
	
	private JacksonTester<Multiplication> json;
	
	@Before
	public void setup(){
		
		JacksonTester.initFields(this, new ObjectMapper());
	}
	
	@Test
	public void testMultiplicationController() {
		
		fail("Not yet implemented");
	}

}
