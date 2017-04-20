/**   
 * Copyright © 2017 北京易酒批电子商务有限公司. All rights reserved.
 */
package com.hbpu.weboa.service.bl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hbpu.weboa.service.dao.AttendPOMapper;
import com.hbpu.weboa.service.domain.Attend;
import com.hbpu.weboa.service.utils.DateHelper;
import com.hbpu.weboa.service.utils.PageList;
import com.hbpu.weboa.service.utils.Pager;
import com.hbpu.weboa.service.utils.PagerCondition;

/**
 * 考勤BL
 * @author xiayang
 * @date 2017年1月23日 下午4:58:34
 */
@Service
@Transactional
@Repository
public class AttendBL {
	@Autowired
	private AttendPOMapper attendPOMapper;
	
	public PageList<Attend> findAttendList(Attend attend, PagerCondition pagerCondition) {
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("attendUser", attend.getAttendUser());
		paramMap.put("attendStartDate", DateHelper.formatBeginTime(attend.getAttendStartDate()));
		paramMap.put("attendEndDate", DateHelper.formatEndTime(attend.getAttendEndDate()));
		paramMap.put("offset", pagerCondition.startRow());
		paramMap.put("limitnum", pagerCondition.getPageSize());
		List<Attend> attends = attendPOMapper.findAttendList(paramMap);
		PageList<Attend> pageList = new PageList<Attend>();
		pageList.setDataList(attends);
		int recordCount = attendPOMapper.getAttendListNum(paramMap);
		Pager myPager = new Pager(pagerCondition.getCurrentPage(), pagerCondition.getPageSize(), recordCount);
		pageList.setPager(myPager);
		return pageList;
	}
	
	public Integer addAttend(Attend attend) {
		attendPOMapper.addAttend(attend);
		return attend.getAttendId();
	}
	
	public void addRemark(Attend attend){
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("attendId", attend.getAttendId());
		paramMap.put("attendRemark", attend.getAttendRemark());
		attendPOMapper.addRemark(paramMap);
	}
}
