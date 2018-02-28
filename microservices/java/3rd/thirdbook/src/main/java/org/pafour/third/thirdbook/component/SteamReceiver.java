package org.pafour.third.thirdbook.component;

import java.util.Map;

import org.slf4j.LoggerFactory;
import org.springframework.cloud.stream.annotation.EnableBinding;
import org.springframework.integration.annotation.ServiceActivator;

import org.slf4j.Logger;



@EnableBinding(BookingSink.class)
public class SteamReceiver {

	static private Logger log = LoggerFactory.getLogger(SteamReceiver.class);
	
	public SteamReceiver() {
		// TODO Auto-generated constructor stub
	}
	
	@ServiceActivator(inputChannel = BookingSink.InventoryQ)
	public void accept(Map<String,Object> fare) {
		
		log.info("fare received ",fare);
		System.out.println("fare received  "+fare);
	}

}
