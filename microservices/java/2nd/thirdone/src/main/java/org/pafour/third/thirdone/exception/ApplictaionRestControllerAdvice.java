package org.pafour.third.thirdone.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ApplictaionRestControllerAdvice {
	
	private static Logger log = LoggerFactory.getLogger(ApplictaionRestControllerAdvice.class);
	
	@ExceptionHandler(CustomerAlreadyExistException.class)
	public ResponseMsg hanlderCutomerNotFoundException(CustomerAlreadyExistException w) {
		
		log.info("Dai param, exception occured!!");
		ResponseMsg res = new ResponseMsg(w.getMessage());
		return res;
	}

}
