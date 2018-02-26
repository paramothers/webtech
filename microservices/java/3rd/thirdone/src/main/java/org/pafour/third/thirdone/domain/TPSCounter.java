package org.pafour.third.thirdone.domain;

import java.util.Calendar;
import java.util.concurrent.atomic.LongAdder;

public class TPSCounter {
	
	private  LongAdder counter ;
	private Calendar expire;
	private int threshold = 2;
	

	public TPSCounter() {
		
		counter = new LongAdder();
		expire = Calendar.getInstance();
		expire.add(Calendar.MINUTE, 1);		
	}
	
	boolean isExpired() {
		
		return Calendar.getInstance().after(expire);
	}
	
	boolean isWeek() {
		
		return (counter.intValue() > threshold);
	}
	
	public void increment() {
		
		counter.increment();
	}

}
