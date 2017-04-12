/**   
 * Copyright © 2016 北京易酒批电子商务有限公司. All rights reserved.
 */
package com.hbpu.weboa;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.scheduling.annotation.EnableScheduling;

/**  
 * 统计分析web服务启动
 * @author ganmingzhu
 * @date 2016年12月21日 下午2:19:19  
 */
@SpringBootApplication
@ComponentScan(basePackages = "com.hbpu.weboa")
@EnableCaching
@EnableScheduling
//@EnableAutoConfiguration
public class StatsWebApp extends SpringBootServletInitializer {
	
	/** 
	 * @param args
	 * @return void
	 */
    public static void main(String[] args) {
        SpringApplication.run(StatsWebApp.class, args);
    }

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(this.getClass());
    }
}
