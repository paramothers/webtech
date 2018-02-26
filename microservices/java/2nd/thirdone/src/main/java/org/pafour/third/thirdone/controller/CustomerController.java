package org.pafour.third.thirdone.controller;

import java.util.List;

import org.pafour.third.thirdone.component.CustomerComponent;
import org.pafour.third.thirdone.domain.Customer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomerController {
	
	private static Logger log = LoggerFactory.getLogger(CustomerController.class);

	@Autowired
	CustomerComponent customerComponent;
	

	@RequestMapping("/customer")
	public List<Customer> getCustomer() {

		log.debug("is rebel is roking");
		return customerComponent.getCustomerList();
	}

	@RequestMapping(path="/register", method=RequestMethod.POST)
	public Customer register(@RequestBody Customer customer) {

		return customerComponent.register(customer);
	}
}
