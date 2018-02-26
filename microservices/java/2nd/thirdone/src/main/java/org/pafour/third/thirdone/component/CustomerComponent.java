package org.pafour.third.thirdone.component;

import java.util.List;
import java.util.Optional;

import org.pafour.third.thirdone.domain.Customer;
import org.pafour.third.thirdone.exception.CustomerAlreadyExistException;
import org.pafour.third.thirdone.repository.CustomerRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

@Component
@Lazy
public class CustomerComponent {

	private static Logger log = LoggerFactory.getLogger(CustomerComponent.class);

	private CustomerRepository customerRepository;
	private Sender sender;

	@Autowired
	public CustomerComponent(CustomerRepository customerRepository, Sender sender) {

		this.customerRepository = customerRepository;
		this.sender = sender;
	}

	public List<Customer> getCustomerList() {

		log.debug("size of customer {}", customerRepository.findAll().size());
		return customerRepository.findAll();
	}

	public Customer register(Customer customer) {

		Optional<Customer> existingCustomer = customerRepository.findByName(customer.getName());

		if (existingCustomer.isPresent()) {

			throw new CustomerAlreadyExistException("Cutomer name already exist");
		} else {

			customerRepository.save(customer);
			sender.send(customer.getEmail());
		}

		log.debug("customer newly create id {} ", customer.getId());

		return customer;

	}

}
