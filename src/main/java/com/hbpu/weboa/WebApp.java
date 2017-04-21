package com.hbpu.weboa;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.scheduling.annotation.EnableScheduling;

/**  
 * 系统启动类
 * @author xiayang
 * @date 2017年4月21日 下午5:47:35  
 */
@SpringBootApplication
@ComponentScan(basePackages = "com.hbpu.weboa")
@EnableCaching
@EnableScheduling
public class WebApp extends SpringBootServletInitializer {
	
    public static void main(String[] args) {
        SpringApplication.run(WebApp.class, args);
    }

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(this.getClass());
    }
}
