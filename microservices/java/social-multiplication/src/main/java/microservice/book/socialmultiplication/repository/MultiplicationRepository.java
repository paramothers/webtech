package microservice.book.socialmultiplication.repository;

import org.springframework.data.repository.CrudRepository;

import microservice.book.socialmultiplication.domain.Multiplication;

public interface MultiplicationRepository extends CrudRepository<Multiplication, Long> {

}
