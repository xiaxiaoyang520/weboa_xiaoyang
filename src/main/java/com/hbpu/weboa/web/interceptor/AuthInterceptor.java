package com.hbpu.weboa.web.interceptor;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

@Component
public class AuthInterceptor extends HandlerInterceptorAdapter {

    private static final Logger logger = LoggerFactory.getLogger(AuthInterceptor.class);

    
	@Value("${webpath.indexurl}")
	private String indexUrl;
	
	@Value("${webpath.loginurl}")
	private String loginUrl;

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
            throws Exception {
        super.afterCompletion(request, response, handler, ex);
    }

    @Override
    public void afterConcurrentHandlingStarted(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
        super.afterConcurrentHandlingStarted(request, response, handler);
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
                           ModelAndView modelAndView) throws Exception {
        super.postHandle(request, response, handler, modelAndView);
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
        if (!(handler instanceof HandlerMethod)) {
            return true;
        }
        final HttpSession session = request.getSession();
        logger.error("userInfo:"+ session.getAttribute("user"));
        logger.error("url:"+request.getRequestURL()+"========="+"uri:"+request.getRequestURI());
        if (session.getAttribute("user") != null||request.getRequestURI().contains("Login")||request.getRequestURI().contains("code")) {
        	return true;
        } else {
        	logger.error("未登录！");
        	return sendForbidden(response, loginUrl, "请登录后再访问");
		}
    }

    private boolean sendForbidden(HttpServletResponse response, String redirectURI, String message) throws IOException {
        response.addHeader("redirectURI", redirectURI);
        response.sendError(HttpStatus.FORBIDDEN.value(), message);
        return false;
    }

}
