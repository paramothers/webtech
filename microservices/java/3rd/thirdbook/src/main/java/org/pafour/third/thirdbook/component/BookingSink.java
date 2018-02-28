package org.pafour.third.thirdbook.component;

import org.springframework.cloud.stream.annotation.Input;
import org.springframework.messaging.MessageChannel;

public interface BookingSink {
	
	public static String InventoryQ = "inventoryQ";
	
	@Input("inventoryQ")
	public MessageChannel inventoryQ();

}
