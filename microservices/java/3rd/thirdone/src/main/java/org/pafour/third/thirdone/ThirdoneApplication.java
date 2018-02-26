package org.pafour.third.thirdone;

import org.pafour.third.thirdone.component.Sender;
import org.pafour.third.thirdone.domain.Customer;
import org.pafour.third.thirdone.repository.CustomerRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.core.Queue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RequestParam;

import springfox.documentation.swagger2.annotations.EnableSwagger2;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
//@EnableGlobalMethodSecurity
@EnableSwagger2
//@EnableAuthorizationServer
//@EnableResourceServer
@EnableDiscoveryClient
public class ThirdoneApplication {

	private static Logger log = LoggerFactory.getLogger(ThirdoneApplication.class);
	@Autowired
	Sender sender;
	
	public static void main(String[] args) {
		SpringApplication.run(ThirdoneApplication.class, args);
	}
	
	//curl -H "Content-Type: application/json" -X POST localhost:8080/register -d '{"name":"param1", "email":"param1@gmail.com"}'
	//curl localhost:8090/refresh -d {}
	//curl -H "Content-Type: application/json" -X POST localhost:8082/book/fare -d '{"flightNumber":"BF101", "flightDate":"22-JAN-16"}'
	//curl -H "Content-Type: application/json" http://localhost:8081/fares/get?flightNumber="BF101"&flightDate="22-JAN-16"
	//curl -H "Content-Type: application/json" -X GET localhost:8081/fares/get -d '{"flightNumber":"BF101", "flightDate":"22-JAN-16"}'
	// mvnw dependency:purge-local-repository -DactTransitively=false -DreResolve=false --fail-at-end
	
	@Bean
	Queue queue() {
		
		return new Queue("TestQ",false);
	}
	
	public void run(String... args)  {
		
		sender.send("Padhu, I Love you");
	}
	
	
	
	@Bean
	CommandLineRunner init(CustomerRepository repo) {
		
		return (event) -> {
			
//			sender.send("Padhu, I Love you");
			repo.save(new Customer("Adam", "adam@gmail.com"));
			repo.save(new Customer("param", "param@gmail.com"));
			repo.save(new Customer("padhu", "padhu@gmail.com"));
			repo.save(new Customer("pavalan", "pavalan@gmail.com"));
			repo.save(new Customer("parithi", "parithi@gmail.com"));
		};
	}
}
