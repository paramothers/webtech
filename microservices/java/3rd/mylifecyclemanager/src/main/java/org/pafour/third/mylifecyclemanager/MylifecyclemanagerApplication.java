package org.pafour.third.mylifecyclemanager;

import org.pafour.third.mylifecyclemanager.component.MetricCollector;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MylifecyclemanagerApplication implements CommandLineRunner {

	@Autowired
	MetricCollector metricCollector;
	public static void main(String[] args) {
		SpringApplication.run(MylifecyclemanagerApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		metricCollector.start();
	}
}
