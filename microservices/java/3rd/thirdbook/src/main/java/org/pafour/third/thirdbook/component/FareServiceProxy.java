package org.pafour.third.thirdbook.component;

import org.pafour.third.thirdbook.domain.Fare;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name="fares-service")
//@RibbonClient(name="fares")
public interface FareServiceProxy {

	@RequestMapping(value="/get", method=RequestMethod.GET)
	Fare getFare(@RequestParam(value="flightNumber")String flightNumber, @RequestParam(value="flightDate")String flightDate);
}
