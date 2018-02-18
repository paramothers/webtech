package org.pafour.second.customerprofile.component;

import java.util.Optional;

import org.pafour.second.customerprofile.domain.Customer;
import org.pafour.second.customerprofile.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CustomerRegistrar {

	CustomerRepository customerRepository;
	Sender sender;
	
	@Autowired
	public CustomerRegistrar(CustomerRepository customerRepository, Sender sender) {
		this.customerRepository = customerRepository;
		this.sender = sender;
	}
	
	public Customer register(Customer customer) {
		
		Optional<Customer> exitingCustomer = customerRepository.findByName(customer.getName());
		
		System.out.println("exiting customer "+exitingCustomer);
		if(exitingCustomer.isPresent()) {
			System.out.println("it is there!!");
			throw new RuntimeException(customer.getName()+", is already exist");
		} else {
			customerRepository.save(customer);
			sender.send(customer.getEmail());
		}
		return customer;
	}

}
