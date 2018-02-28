package org.pafour.third.mylifecyclemanager.policy;

import java.util.Map;

public interface ScalingPolicy {

	public boolean execute(String serviceId, Map metrics);
}
