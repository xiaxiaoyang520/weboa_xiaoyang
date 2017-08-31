package com.hbpu.weboa.web.controller;

import com.hbpu.weboa.web.consts.GeetestConfig;
import com.hbpu.weboa.web.consts.GeetestLib;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.WebUtils;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.UUID;
import java.util.concurrent.TimeUnit;

/**
 * Description: 验证码控制器
 * @author xiayang
 * @date 2017年5月24日 下午5:47:40
 */
@RestController
public class CodeController {

    /**
     * 获取验证码
     * @param request
     * @param response
     * @throws IOException
     */
    @RequestMapping(value = "/templates/code", method = RequestMethod.GET)
    public void queryCode(HttpServletRequest request, HttpServletResponse response) throws IOException {
        GeetestLib gtSdk = new GeetestLib(GeetestConfig.getGeetest_id(), GeetestConfig.getGeetest_key(),
                GeetestConfig.isnewfailback());
        final Cookie cookie = WebUtils.getCookie(request, "USER_ID");
        String userSessionId;
        if (cookie == null) {
            final String cookieId = UUID.randomUUID().toString().replaceAll("-", "");
            final Cookie myCookie = new Cookie("USER_ID", cookieId);
            myCookie.setHttpOnly(true);
            myCookie.setPath("/");
            response.addCookie(myCookie);
            userSessionId = cookieId;
        } else {
            userSessionId = cookie.getValue();
        }
        gtSdk.preProcess(userSessionId);
        PrintWriter out = response.getWriter();
        out.println(gtSdk.getResponseStr());
    }
}
