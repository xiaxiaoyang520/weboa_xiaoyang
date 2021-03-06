/**   
 * Copyright © 2017 北京易酒批电子商务有限公司. All rights reserved.
 */
package com.hbpu.weboa.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.hbpu.weboa.service.domain.Permit;
import com.hbpu.weboa.service.domain.User;
import com.hbpu.weboa.service.service.PermitService;
import com.hbpu.weboa.service.service.UserService;
import com.hbpu.weboa.service.utils.PageList;
import com.hbpu.weboa.service.utils.PagerCondition;
import com.hbpu.weboa.web.pagemodel.BaseResult;
import com.hbpu.weboa.web.pagemodel.PagesResult;
import com.hbpu.weboa.web.pagemodel.ROResult;

/**  
 * 审核控制器
 * @author xiayang
 * @date 2017年3月19日 下午1:45:01  
 */
@RestController
public class PermitController {
	
	@Autowired
	private PermitService permitService;
	
	@Autowired
	private UserService userService;
	
	@RequestMapping(value="/templates/permit/findPermitList/{currentPage}",method=RequestMethod.POST)
	public BaseResult findPermitList(@PathVariable("currentPage") Integer currentPage,
			@RequestBody Permit permit){
		PagerCondition pagerCondition = new PagerCondition(currentPage, 5);
		String submitUserName = permit.getSubmitUserName();
		if (!StringUtils.isEmpty(submitUserName)) {
			User user = userService.queryUserByName(submitUserName);
			if (user != null) {
				permit.setSubmitUser(user.getUserId());
			} else {
				permit.setSubmitUser(-1);
			}
		}
		String handleUserName = permit.getHandleUserName();
		if (!StringUtils.isEmpty(handleUserName)) {
			User user = userService.queryUserByName(handleUserName);
			if (user != null) {
				permit.setHandleUser(user.getUserId());
			} else {
				permit.setHandleUser(-1);
			}
		}
		PageList<Permit> permitPage = permitService.findPermitList(permit, pagerCondition);
		List<Permit> permitList = permitPage.getDataList();
		for (Permit permitInfo : permitList) {
			Integer submitUserId = permitInfo.getSubmitUser();
			User submitUser  = userService.getUserById(submitUserId);
			permitInfo.setSubmitUserName(submitUser.getUserName());
			if (permitInfo.getHandleUser() != null) {
				Integer handleUserId = permitInfo.getHandleUser();
				User handleUser  = userService.getUserById(handleUserId);
				permitInfo.setHandleUserName(handleUser.getUserName());
			}
		}
		return new PagesResult<Permit>(permitPage);
	}
	
	@RequestMapping(value="/templates/permit/addPermit",method=RequestMethod.POST)
	public BaseResult addPermit(@RequestBody Permit permit){
		permitService.addPermit(permit);
		return BaseResult.getSuccessResult();
	}
	
	@RequestMapping(value="/templates/permit/queryPermitById/{permitId}",method=RequestMethod.POST)
	public BaseResult queryPermitById(@PathVariable Integer permitId){
		Permit permit = permitService.queryPermitById(permitId);
		Integer submitUserId = permit.getSubmitUser();
		User submitUser  = userService.getUserById(submitUserId);
		permit.setSubmitUserName(submitUser.getUserName());
		if (permit.getHandleUser() != null) {
			Integer handleUserId = permit.getHandleUser();
			User handleUser  = userService.getUserById(handleUserId);
			permit.setHandleUserName(handleUser.getUserName());
		}
		return new ROResult<Permit>(permit);
	}
	
	@RequestMapping(value="/templates/permit/approve",method=RequestMethod.POST)
	public BaseResult approve(@RequestBody Permit permit){
		permit.setPermitState(2);
		permitService.updatePermit(permit);
		return BaseResult.getSuccessResult();
	}
	
	@RequestMapping(value="/templates/permit/disApprove",method=RequestMethod.POST)
	public BaseResult disApprove(@RequestBody Permit permit){
		permit.setPermitState(3);
		permitService.updatePermit(permit);
		return BaseResult.getSuccessResult();
	}
	
}
