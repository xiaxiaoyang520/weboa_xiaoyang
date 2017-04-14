/**   
 * Copyright © 2017 北京易酒批电子商务有限公司. All rights reserved.
 */
package com.hbpu.weboa.web.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import com.alibaba.dubbo.common.URL;
import com.hbpu.weboa.service.domain.User;
import com.hbpu.weboa.service.service.UserService;

/**
 * 登陆控制器
 * 
 * @author xiayang
 * @date 2017年3月18日 下午3:19:18
 */
@RestController
public class LoginController {

	@Autowired
	private UserService userService;

	private static final Logger LOG = LoggerFactory.getLogger(LoginController.class);

	@RequestMapping("/")
	public ModelAndView toLogin() {
		return new ModelAndView(new RedirectView("templates/login.html"));
	}

	@RequestMapping(value = "/templates/userLogin", method = RequestMethod.POST)
	public ModelAndView userLogin(@RequestParam(value = "userTel") String userTel,
			@RequestParam(value = "userPassword") String userPassword, HttpServletResponse response,
			HttpServletRequest request) throws Exception {

		try {
			User user = userService.userLogin(userTel, userPassword);
			HttpSession session = request.getSession();
			session.setAttribute("user", user);
			// 登陆操作
			if (user != null) {
				return new ModelAndView(new RedirectView("index.html#/dashboard.html"));
			} else {
				throw new Exception("登陆异常");
			}
		} catch (Exception e) {
			LOG.warn("登录异常", e);
		}
		return new ModelAndView(new RedirectView("login.html?error=" + URL.encode("登陆异常"), true));
		// 登陆操作
	}
}
