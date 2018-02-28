package org.pafour.third.mylifecyclemanager.component;

import org.springframework.stereotype.Component;

@Component
public class DeploymentRules {

	public DeploymentRules() {
		// TODO Auto-generated constructor stub
	}

	public DeploymentRule getDeploymentRules(String serviceId) {
		// TODO Auto-generated method stub
		return new DummyDeploymentRules();
	}

}
