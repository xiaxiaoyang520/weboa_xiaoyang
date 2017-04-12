/**   
 * Copyright © 2017 北京易酒批电子商务有限公司. All rights reserved.
 */
package com.hbpu.weboa.service.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hbpu.weboa.service.bl.SpeechBL;
import com.hbpu.weboa.service.domain.Speech;
import com.hbpu.weboa.service.utils.AssertUtils;
import com.hbpu.weboa.service.utils.PageList;
import com.hbpu.weboa.service.utils.PagerCondition;

/**  
 * 言论服务接口实现类
 * @author xiayang
 * @date 2017年1月23日 下午3:28:29  
 */
@Service
public class SpeechService{
	
	@Autowired
	private SpeechBL speechBL;

	public PageList<Speech> findSpeechList(PagerCondition pagerCondition) {
		AssertUtils.notNull(pagerCondition, "分页信息对象为空");
		return speechBL.findSpeechList(pagerCondition);
	}

	public Integer addSpeech(Speech speech) {
		AssertUtils.notNull(speech, "添加言论信息对象为空");
		return speechBL.addSpeech(speech);
	}

	public void deleteSpeech(Integer speechId) {
		AssertUtils.notNull(speechId, "删除言论信息id为空");
		speechBL.deleteSpeech(speechId);
		
	}

	public void addPraiseNum(Integer speechId) {
		AssertUtils.notNull(speechId, "点赞信息id为空");
		speechBL.addPraiseNum(speechId);
	}
}
