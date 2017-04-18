/**   
 * Copyright © 2017 北京易酒批电子商务有限公司. All rights reserved.
 */
package com.hbpu.weboa.service.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hbpu.weboa.service.bl.AttendBL;
import com.hbpu.weboa.service.domain.Attend;
import com.hbpu.weboa.service.service.AttendService;
import com.hbpu.weboa.service.utils.AssertUtils;
import com.hbpu.weboa.service.utils.PageList;
import com.hbpu.weboa.service.utils.PagerCondition;

/**  
 * 考勤服务实现类
 * @author xiayang
 * @date 2017年2月11日 下午4:35:42  
 */
@Service
public class AttendService{
	
	@Autowired
	private AttendBL attendBL;

	public PageList<Attend> findAttendList(Attend attend, PagerCondition pagerCondition) {
		AssertUtils.notNull(attend,	"考勤查询对象为空");
		AssertUtils.notNull(pagerCondition, "分页对象为空");
		return attendBL.findAttendList(attend, pagerCondition);
	}

	public void addRemark(Attend attend) {
		AssertUtils.notNull(attend.getAttendUser(), "用户id为空");
		AssertUtils.notNull(attend.getAttendRemark(), "添加备注信息为空");
		attendBL.addRemark(attend);
	}
}
