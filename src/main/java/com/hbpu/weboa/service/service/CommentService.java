/**   
 * Copyright © 2017 北京易酒批电子商务有限公司. All rights reserved.
 */
package com.hbpu.weboa.service.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hbpu.weboa.service.bl.CommentBL;
import com.hbpu.weboa.service.domain.Comment;
import com.hbpu.weboa.service.utils.AssertUtils;

/**  
 * 评论服务接口实现类
 * @author xiayang
 * @date 2017年1月23日 下午4:17:37  
 */
@Service
public class CommentService{

	@Autowired
	private CommentBL commentBL;
	public List<Comment> findCommentList(Integer speechId) {
		AssertUtils.notNull(speechId, "言论id为空");
		return commentBL.findCommentList(speechId);
	}
	public Integer addComment(Comment comment) {
		AssertUtils.notNull(comment, "评论对象为空");
		return commentBL.addComment(comment);
	}
}
