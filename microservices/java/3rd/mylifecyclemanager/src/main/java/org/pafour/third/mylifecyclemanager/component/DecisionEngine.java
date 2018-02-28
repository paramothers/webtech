package org.pafour.third.mylifecyclemanager.component;

import java.util.Map;

import org.pafour.third.mylifecyclemanager.policy.ScalingPolicies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class DecisionEngine {

	public DecisionEngine() {
		// TODO Auto-generated constructor stub
	}
	
	@Autowired
	ScalingPolicies scalingPolicies;
	@Autowired
	DeploymentEngine deploymentEngine;
	
	@Autowired
	DeploymentRules deploymentRules;

	public boolean execute(String serviceId, Map metrics) {
		
		if(scalingPolicies.getPolicy(serviceId).execute(serviceId, metrics)) {
			
			return deploymentEngine.scaleUp(deploymentRules.getDeploymentRules(serviceId), serviceId);
		}
		return false;
	}
}
