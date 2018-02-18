package org.pafour.second.customerprofile.constroller;

import org.pafour.second.customerprofile.component.CustomerRegistrar;
import org.pafour.second.customerprofile.domain.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomerController {

	@Autowired
	CustomerRegistrar customerResitrar;
	
	@RequestMapping(path="/register", method=RequestMethod.POST)
	Customer register(@RequestBody Customer customer) {
		
		return customerResitrar.register(customer);
	}
}
