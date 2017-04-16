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

import com.hbpu.weboa.service.domain.Dept;
import com.hbpu.weboa.service.domain.Notice;
import com.hbpu.weboa.service.domain.User;
import com.hbpu.weboa.service.service.DeptService;
import com.hbpu.weboa.service.service.NoticeService;
import com.hbpu.weboa.service.service.UserService;
import com.hbpu.weboa.service.utils.PageList;
import com.hbpu.weboa.service.utils.PagerCondition;
import com.hbpu.weboa.web.pagemodel.BaseResult;
import com.hbpu.weboa.web.pagemodel.PagesResult;
import com.hbpu.weboa.web.pagemodel.ROResult;

/**  
 * 通知和公告控制器
 * @author xiayang
 * @date 2017年3月19日 下午1:45:01  
 */
@RestController
public class NoticeController {
	
	@Autowired
	private NoticeService noticeService;
	
	@Autowired
	private UserService userService;
	
	@Autowired 
	private DeptService deptService;
	
	@RequestMapping(value="/templates/notice/findNoticeList/{currentPage}",method=RequestMethod.POST)
	public BaseResult findNoticeList(@PathVariable("currentPage") Integer currentPage,
			@RequestBody Notice notice){
		PagerCondition pagerCondition = new PagerCondition(currentPage, 5);
		PageList<Notice> noticePage = noticeService.findSpeechList(pagerCondition, notice);
		List<Notice> noticeList = noticePage.getDataList();
		for (Notice noticeInfo : noticeList) {
			Integer createUser = noticeInfo.getCreateUser();
			User user  = userService.getUserById(createUser);
			noticeInfo.setCreateUserName(user.getUserName());
			String noticeContext = noticeInfo.getNoticeContext();
			if (noticeContext.length()>50) {
				noticeInfo.setNoticeContext(noticeContext.substring(0, 50)+"...");
			}
		}
		return new PagesResult<Notice>(noticePage);
	}
	
	@RequestMapping(value="/templates/notice/addNotice",method=RequestMethod.POST)
	public BaseResult addNotice(@RequestBody Notice notice){
		noticeService.addNotice(notice);
		return BaseResult.getSuccessResult();
	}
	
	@RequestMapping(value="/templates/notice/queryNoticeById/{noticeId}",method=RequestMethod.POST)
	public BaseResult queryNoticeById(@PathVariable Integer noticeId){
		Notice notice = noticeService.queryNoticeById(noticeId);
		Integer createUser = notice.getCreateUser();
		User user  = userService.getUserById(createUser);
		notice.setCreateUserName(user.getUserName());
		Dept dept = deptService.queryDeptByDeptHeader(createUser);
		notice.setCreateDept(dept.getDeptName());
		return new ROResult<Notice>(notice);
	}
	
}
