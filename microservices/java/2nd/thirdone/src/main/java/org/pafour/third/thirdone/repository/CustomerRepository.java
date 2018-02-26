package org.pafour.third.thirdone.repository;

import java.util.Optional;

import org.pafour.third.thirdone.domain.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface CustomerRepository extends JpaRepository<Customer, Long>{
	
	
	public Optional<Customer> findByName(@Param("name")String name);
	

}
