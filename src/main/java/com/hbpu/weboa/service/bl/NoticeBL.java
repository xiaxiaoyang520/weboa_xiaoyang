/**   
 * Copyright © 2017 北京易酒批电子商务有限公司. All rights reserved.
 */
package com.hbpu.weboa.service.bl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hbpu.weboa.service.dao.NoticePOMapper;
import com.hbpu.weboa.service.domain.Notice;
import com.hbpu.weboa.service.utils.PageList;
import com.hbpu.weboa.service.utils.Pager;
import com.hbpu.weboa.service.utils.PagerCondition;


/**
 * 言论BL
 * @author 晓阳
 * 2017年4月16日下午3:28:44
 */
@Service
@Transactional
public class NoticeBL {

	@Autowired 
	private NoticePOMapper noticePOMapper;
	
	public PageList<Notice> findNoticeList(PagerCondition pagerCondition,Notice notice) {
		Map<String, Object> paramMap = new HashMap<String, Object>();
		Integer createUser = notice.getCreateUser();
		if (createUser != null&&!createUser.equals(0)) {
			paramMap.put("createUser", createUser);
		}
		paramMap.put("noticeType", notice.getNoticeType());
		paramMap.put("offset", pagerCondition.startRow());
		paramMap.put("limitnum", pagerCondition.getPageSize());
		List<Notice> notices = noticePOMapper.findNoticeList(paramMap);
		PageList<Notice> pageList = new PageList<Notice>();
		pageList.setDataList(notices);
		int recordCount = noticePOMapper.getNoticeListNum(paramMap);
		Pager myPager = new Pager(pagerCondition.getCurrentPage(), pagerCondition.getPageSize(), recordCount);
		pageList.setPager(myPager);
		return pageList;
	}

	public Integer addNotice(Notice notice) {
		noticePOMapper.addNotice(notice);
		return notice.getNoticeId();
	}
	
	public Notice queryNoticeById(Integer noticeId){
		return noticePOMapper.queryNoticeById(noticeId);
	}

	
}
