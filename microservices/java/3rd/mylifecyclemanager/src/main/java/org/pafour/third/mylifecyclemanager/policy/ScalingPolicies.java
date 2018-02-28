package org.pafour.third.mylifecyclemanager.policy;

import org.springframework.stereotype.Component;

@Component
public class ScalingPolicies {

	public ScalingPolicies() {
		// TODO Auto-generated constructor stub
	}
	
	public ScalingPolicy getPolicy(String serviceId) {
		return new TpmScalingPolicy();
	}

}
