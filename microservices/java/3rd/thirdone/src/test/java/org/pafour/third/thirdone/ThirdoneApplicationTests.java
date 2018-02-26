package org.pafour.third.thirdone;

import java.net.InetSocketAddress;
import java.net.Proxy;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.pafour.third.thirdone.domain.Greeting;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.RestTemplate;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ThirdoneApplicationTests {

	private Logger log =  LoggerFactory.getLogger(ThirdoneApplicationTests.class);
	@Test
	public void contextLoads() {
		
		/*SimpleClientHttpRequestFactory clientHttpRequestFactory = new SimpleClientHttpRequestFactory();
		Proxy proxy = new Proxy(Proxy.Type.HTTP, new InetSocketAddress("my.proxy.com", 9999));
		clientHttpRequestFactory.setProxy(proxy);*/
		
		log.debug("My firt logback");
		RestTemplate restTemplate = new RestTemplate();
		Greeting greet = restTemplate.getForObject("http://27.5.215.118:8080/thirdgreet", Greeting.class);	
		
		log.debug("My firt logback");
		log.debug("Response is {}", greet.getGreet());
		
	}

}
