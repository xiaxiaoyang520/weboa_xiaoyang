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

import com.hbpu.weboa.service.domain.Comment;
import com.hbpu.weboa.service.domain.PraiseRecord;
import com.hbpu.weboa.service.domain.Speech;
import com.hbpu.weboa.service.domain.User;
import com.hbpu.weboa.service.service.CommentService;
import com.hbpu.weboa.service.service.SpeechService;
import com.hbpu.weboa.service.service.UserService;
import com.hbpu.weboa.service.utils.PageList;
import com.hbpu.weboa.service.utils.PagerCondition;
import com.hbpu.weboa.web.pagemodel.BaseResult;
import com.hbpu.weboa.web.pagemodel.PagesResult;

/**  
 * 言论管理控制器
 * @author xiayang
 * @date 2017年3月19日 下午1:45:01  
 */
@RestController
public class SpeechController {
	
	@Autowired
	private SpeechService speechService;
	
	@Autowired
	private CommentService commentService;
	
	@Autowired
	private UserService userService;
	
	@RequestMapping(value="/templates/speech/findSpeechList/{currentPage}/{createUser}",method=RequestMethod.POST)
	public BaseResult findSpeechList(@PathVariable("currentPage") Integer currentPage,
			@PathVariable Integer createUser){
		PagerCondition pagerCondition = new PagerCondition(currentPage, 5);
		PageList<Speech> speechPage = speechService.findSpeechList(pagerCondition,createUser);
		List<Speech> speechList = speechPage.getDataList();
		for (Speech speech : speechList) {
			Integer speechId = speech.getSpeechId();
			List<Comment> commentList = commentService.findCommentList(speechId);
			speech.setComments(commentList);
			List<PraiseRecord> praiseRecordList = speechService.findPraiseRecordList(speechId);
			speech.setPraiseRecords(praiseRecordList);
			User user = userService.getUserById(speech.getCreateUser());
			speech.setCreateUserName(user.getUserName());
		}
		return new PagesResult<Speech>(speechPage);
	}
	
	@RequestMapping(value="/templates/speech/addSpeech",method=RequestMethod.POST)
	public BaseResult addSpeech(@RequestBody Speech speech){
		speechService.addSpeech(speech);
		return BaseResult.getSuccessResult();
	}
	
	@RequestMapping(value="/templates/speech/addPraiseNum/{speechId}/{userId}",method=RequestMethod.POST)
	public BaseResult addPraiseNum(@PathVariable Integer speechId,@PathVariable Integer userId){
		boolean result = speechService.queryPraiseRecord(speechId, userId);
		if (result) {
			speechService.addPraiseRecord(speechId,userId);
			speechService.addPraiseNum(speechId);
		}
		return BaseResult.getSuccessResult();
	}
	
	@RequestMapping(value="/templates/speech/addComment",method=RequestMethod.POST)
	public BaseResult addComment(@RequestBody Comment comment){
		speechService.addComment(comment);
		return BaseResult.getSuccessResult();
	}
	
}
