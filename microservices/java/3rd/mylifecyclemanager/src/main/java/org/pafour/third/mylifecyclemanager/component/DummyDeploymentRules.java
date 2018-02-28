package org.pafour.third.mylifecyclemanager.component;

public class DummyDeploymentRules implements DeploymentRule {

	public DummyDeploymentRules() {
		// TODO Auto-generated constructor stub
	}
	private static final int max_instance=2;
	@Override
	public boolean execute() {
		if(DeploymentEngine.num_instances >= max_instance) {
			
			return true;
		}
		return false;
	}

}
