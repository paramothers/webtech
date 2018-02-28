package org.pafour.third.thirdbook.contoller;

import org.pafour.third.thirdbook.component.BookingComponent;
import org.pafour.third.thirdbook.domain.Fare;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/book")
public class BookController {

	private BookingComponent bookingComponent;

	public BookController(BookingComponent 	bookingComponent) {
		
		this.bookingComponent = bookingComponent;
	}
	
	@RequestMapping("/fare")
	public Fare getFair(@RequestParam("flightNumber")String flightNumber, @RequestParam("flightDate") String flightDate) {
		
		return bookingComponent.getFare(flightNumber,flightDate );
	}

}
