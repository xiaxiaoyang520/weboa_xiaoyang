/**   
 * Copyright © 2017 北京易酒批电子商务有限公司. All rights reserved.
 */
package com.hbpu.weboa.web.controller;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.hbpu.weboa.service.utils.AssertUtils;
import com.hbpu.weboa.web.consts.GeetestConfig;
import com.hbpu.weboa.web.consts.GeetestLib;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import com.alibaba.dubbo.common.URL;
import com.hbpu.weboa.service.domain.User;
import com.hbpu.weboa.service.service.UserService;
import org.springframework.web.util.WebUtils;

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
		Cookie cookie = WebUtils.getCookie(request, "USER_ID");
		String userSessionId = cookie.getValue();
		String errMsg = validateVerificationCode(request, userSessionId);
		if (StringUtils.isEmpty(errMsg)) {
			User user = userService.userLogin(userTel, userPassword);
			HttpSession session = request.getSession();
			session.setAttribute("user", user);
			// 登陆操作
			if (user != null) {
				return new ModelAndView(new RedirectView("index.html#/dashboard.html"));
			} else {
				throw new Exception("登陆异常");
			}

		} else {
			return new ModelAndView(new RedirectView("login.html", true));
		}
		} catch (Exception e) {
			LOG.warn("登录异常", e);
		}
		return new ModelAndView(new RedirectView("login.html?error=" + URL.encode("登陆异常"), true));
		// 登陆操作
	}

	// 滑块验证
	private String validateVerificationCode(HttpServletRequest request, String userSessionId) {
		String validateMsg = null;
		String challenge = request.getParameter("geetest_challenge");
		String validate = request.getParameter("geetest_validate");
		String seccode = request.getParameter("geetest_seccode");
		AssertUtils.hasText(challenge, "请完成验证");
		AssertUtils.hasText(validate, "请完成验证");
		AssertUtils.hasText(seccode, "请完成验证");
		try {
			GeetestLib gtSdk = new GeetestLib(GeetestConfig.getGeetest_id(), GeetestConfig.getGeetest_key(),
					GeetestConfig.isnewfailback());
			HttpSession session = request.getSession();
			// 从session中获取gt-server状态,当状态正常时，状态值为1，非正常值为0
			int gt_server_status_code = 1;
			// 默认验证不通过
			int gtResult = 0;
			// 极限验证服务器的两种校验模式
			if (gt_server_status_code == 1) {
				// gt-server正常，向gt-server进行二次验证
				gtResult = gtSdk.enhencedValidateRequest(challenge, validate, seccode, userSessionId);
			} else {
				// gt-server非正常情况下，进行failback模式验证
				gtResult = gtSdk.failbackValidateRequest(challenge, validate, seccode);
			}
			// 根据最终校验结果返回数据
			if (gtResult == 0) {
				// 验证失败
				validateMsg = "验证码校验未通过";
			}
		} catch (Exception e) {
			LOG.error("验证码校验异常", e);
			validateMsg = "验证码校验异常";
		}
		return validateMsg;
	}
}
