package org.pafour.second.customerprofile;

import org.pafour.second.customerprofile.domain.Customer;
import org.pafour.second.customerprofile.repository.CustomerRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CustomerProfileApplication {

	public static void main(String[] args) {
		SpringApplication.run(CustomerProfileApplication.class, args);
	}

	@Bean
	CommandLineRunner init(CustomerRepository repo) {

		return (evt) -> {

			repo.save(new Customer("Adam", "adam@boot.com"));
			repo.save(new Customer("John", "john@boot.com"));
			repo.save(new Customer("Smith", "smit@boot.com"));
			repo.save(new Customer("Edgar", "edgar@boot.com"));
			repo.save(new Customer("Martin", "martin@boot.com"));
			repo.save(new Customer("Tom", "tom@boot.com"));
			repo.save(new Customer("Sean", "sean@boot.com"));
		};
	}
}
