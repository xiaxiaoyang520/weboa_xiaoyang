/**   
 * Copyright © 2017 北京易酒批电子商务有限公司. All rights reserved.
 */
package com.hbpu.weboa.service.bl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hbpu.weboa.service.dao.CommentPOMapper;
import com.hbpu.weboa.service.domain.Comment;

/**  
 * 评论BL
 * @author xiayang
 * @date 2017年1月23日 下午4:12:04  
 */
@Service
@Transactional
@Repository
public class CommentBL {
	
	@Autowired
	private CommentPOMapper commentPOMapper;
	
	public List<Comment> findCommentList(Integer speechId){
		return commentPOMapper.findCommentList(speechId);
	}

	public Integer addComment(Comment comment) {
		comment.setCreateTime(new Date());
		commentPOMapper.addComment(comment);
		return comment.getCommentId();
	}
}
