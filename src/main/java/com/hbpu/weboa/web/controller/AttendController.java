/**   
 * Copyright © 2017 北京易酒批电子商务有限公司. All rights reserved.
 */
package com.hbpu.weboa.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.hbpu.weboa.service.domain.Attend;
import com.hbpu.weboa.service.domain.User;
import com.hbpu.weboa.service.service.AttendService;
import com.hbpu.weboa.service.service.UserService;
import com.hbpu.weboa.service.utils.PageList;
import com.hbpu.weboa.service.utils.PagerCondition;
import com.hbpu.weboa.web.pagemodel.BaseResult;
import com.hbpu.weboa.web.pagemodel.PagesResult;

/**  
 * 考勤控制器
 * @author xiayang
 * @date 2017年4月18日 下午4:57:57  
 */
@RestController
public class AttendController {
	
	@Autowired
	private AttendService attendService;
	
	@Autowired
	private UserService userService;
	
	@RequestMapping(value="/templates/attend/findAttendList/{currentPage}",method=RequestMethod.POST)
	public BaseResult findAttendList(@PathVariable("currentPage") Integer currentPage,
			@RequestBody Attend attend){
		PagerCondition pagerCondition = new PagerCondition(currentPage, 10);
		PageList<Attend> attendPage = attendService.findAttendList(attend, pagerCondition);
		List<Attend> attends = attendPage.getDataList();
		for (Attend attendInfo : attends) {
			User user = userService.getUserById(attendInfo.getAttendUser());
			attendInfo.setAttendUserName(user.getUserName());
		}
		return new PagesResult<Attend>(attendPage);
	}
	
	@RequestMapping(value="/templates/attend/addAttendRemark",method=RequestMethod.POST)
	public BaseResult addUser(@RequestBody Attend attend){
		attendService.addRemark(attend);
		return BaseResult.getSuccessResult();
	}
}
