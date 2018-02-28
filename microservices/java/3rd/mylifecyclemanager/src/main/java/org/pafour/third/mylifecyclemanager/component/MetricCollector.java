package org.pafour.third.mylifecyclemanager.component;

import java.util.Map;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import org.slf4j.Logger;

@Component
public class MetricCollector  {

	static private Logger log = LoggerFactory.getLogger(MetricCollector.class);
	
	@Autowired
	private DiscoveryClient discoveryClient;
	@Autowired
	private RestTemplate restTemplate;

	public MetricCollector() {
		// TODO Auto-generated constructor stub
	}

	@Autowired
	DecisionEngine decisionEngine;

	public void start() {

		while (true) {

			discoveryClient.getServices().forEach(service->{
				
				log.debug("Service ",service);
				Map metrics = restTemplate.getForObject("http://"+service+"/metrics", Map.class);
				decisionEngine.execute(service, metrics);
			});
		}
	}

}

@Configuration
class AppConfiguration {

	@LoadBalanced
	@Bean
	public RestTemplate getBean() {
		return new RestTemplate();
	}
}
