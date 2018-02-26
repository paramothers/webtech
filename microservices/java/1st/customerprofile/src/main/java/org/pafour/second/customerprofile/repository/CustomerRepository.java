package org.pafour.second.customerprofile.repository;

import java.util.Optional;

import org.pafour.second.customerprofile.domain.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface CustomerRepository extends JpaRepository<Customer, Long> {

	Optional<Customer> findByName(@Param("name") String name);
}
