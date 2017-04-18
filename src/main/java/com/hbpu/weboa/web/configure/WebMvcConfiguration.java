/*
 * Copyright © 2016 北京易酒批电子商务有限公司. All rights reserved.
 */

package com.hbpu.weboa.web.configure;

import java.io.IOException;
import java.util.Collections;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.hbpu.weboa.service.domain.User;

//@Configuration
public class WebMvcConfiguration extends WebMvcConfigurerAdapter {


	@Value("${webpath.indexurl}")
	private String indexUrl;
	
	@Value("${webpath.loginurl}")
	private String loginUrl;

//    @Override
//    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> argumentResolvers) {
//        argumentResolvers.add(userInfoArgumentResolver);
//        super.addArgumentResolvers(argumentResolvers);
//    }

    @Bean
    FilterRegistrationBean loginFilter() {

        FilterRegistrationBean loginFilterBean = new FilterRegistrationBean();
        loginFilterBean.setName("loginFilter");
        loginFilterBean.setUrlPatterns(Collections.singleton("/templates/*"));
        loginFilterBean.setOrder(Ordered.HIGHEST_PRECEDENCE);
        loginFilterBean.setFilter(new OncePerRequestFilter() {

            private final Logger logger = LoggerFactory.getLogger(this.getClass());

            @Override
            protected void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, FilterChain filterChain) throws ServletException, IOException {
                final HttpSession session =  httpServletRequest.getSession();
//                String currentId;
                // 没有登录，强制返回登录页
//                String uri = httpServletRequest.getRequestURI();
                User userInfo = (User)session.getAttribute("user");
                if (userInfo == null) {
                	 httpServletResponse.sendRedirect(loginUrl);
                	 return;
				}
                logger.info("创建登录会话");
                filterChain.doFilter(httpServletRequest, httpServletResponse);
            }
        });

        return loginFilterBean;

    }
}
