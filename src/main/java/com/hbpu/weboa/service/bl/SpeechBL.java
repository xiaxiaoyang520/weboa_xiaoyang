/**   
 * Copyright © 2017 北京易酒批电子商务有限公司. All rights reserved.
 */
package com.hbpu.weboa.service.bl;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hbpu.weboa.service.dao.SpeechPOMapper;
import com.hbpu.weboa.service.domain.Speech;
import com.hbpu.weboa.service.utils.PageList;
import com.hbpu.weboa.service.utils.Pager;
import com.hbpu.weboa.service.utils.PagerCondition;

/**  
 * 言论BL类
 * @author xiayang
 * @date 2017年1月23日 下午3:15:35  
 */
@Service
@Transactional
@Repository
public class SpeechBL {
	
	@Autowired
	private SpeechPOMapper speechPOMapper;
	
	public PageList<Speech> findSpeechList(PagerCondition pagerCondition){
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("offset", pagerCondition.startRow());
		paramMap.put("limitnum", pagerCondition.getPageSize());
		List<Speech> speechs =speechPOMapper.findSpeechList(paramMap);
		PageList<Speech> pageList = new PageList<Speech>();
		pageList.setDataList(speechs);
		int recordCount = speechPOMapper.getSpeechListNum(paramMap);
		Pager myPager = new Pager(pagerCondition.getCurrentPage(), pagerCondition.getPageSize(), recordCount);
		pageList.setPager(myPager);
		return pageList;
	}
	
	public Integer addSpeech(Speech speech){
		speech.setCreateTime(new Date());
		speechPOMapper.addSpeech(speech);
		return speech.getSpeechId();
	}
	
	public void deleteSpeech(Integer speechId){
		speechPOMapper.deleteSpeech(speechId);
	}
	
	public void addPraiseNum(Integer speechId){
		speechPOMapper.addPraiseNum(speechId);
	}
}
