package org.pafour.third.mylifecyclemanager.policy;

import java.util.Map;

public class TpmScalingPolicy implements ScalingPolicy {

	
	public TpmScalingPolicy() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public boolean execute(String serviceId, Map metrics) {
		
		if(metrics.containsKey("guage.servo.tpm")) {
			
			Double tpm = (Double) metrics.get("guage.servo.tpm");
			System.out.println("tpm "+tpm);
			return (tpm > 10);
			
		}
		return false;
	}

}
