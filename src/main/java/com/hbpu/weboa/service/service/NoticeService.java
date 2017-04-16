package com.hbpu.weboa.service.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hbpu.weboa.service.bl.NoticeBL;
import com.hbpu.weboa.service.domain.Notice;
import com.hbpu.weboa.service.utils.AssertUtils;
import com.hbpu.weboa.service.utils.PageList;
import com.hbpu.weboa.service.utils.PagerCondition;

/**
 * 通知和公告服务接口实现类
 * @author 晓阳
 * 2017年4月16日下午3:40:07
 */
@Service
public class NoticeService {

	@Autowired
	private NoticeBL noticeBL;
	
	public PageList<Notice> findSpeechList(PagerCondition pagerCondition,Notice notice) {
		AssertUtils.notNull(pagerCondition, "分页信息对象为空");
		AssertUtils.notNull(notice, "查询条件对象为空");
		return noticeBL.findNoticeList(pagerCondition, notice);
	}

	public Integer addNotice(Notice notice) {
		AssertUtils.notNull(notice, "添加言论信息对象为空");
		return noticeBL.addNotice(notice);
	}
	
	public Notice queryNoticeById(Integer noticeId){
		return noticeBL.queryNoticeById(noticeId);
	}
}
