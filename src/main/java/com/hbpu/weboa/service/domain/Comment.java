package com.hbpu.weboa.service.domain;

import java.io.Serializable;
import java.util.Date;

/**
 * 评论模型id
 * @author 晓阳
 * 2017年1月14日下午8:10:27
 */
public class Comment implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	/**
	 * 评论id
	 */
	private Integer commentId;
	
	/**
	 * 评论内容
	 */
	private String context;
	
	/**
	 * 评论时间
	 */
	private Date createTime;
	
	/**
	 * 评论人id
	 */
	private Integer userId;
	
	/**
	 * 评论言论id
	 */
	private Integer speechId;

	public Integer getCommentId() {
		return commentId;
	}

	public void setCommentId(Integer commentId) {
		this.commentId = commentId;
	}

	public String getContext() {
		return context;
	}

	public void setContext(String context) {
		this.context = context;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Integer getSpeechId() {
		return speechId;
	}

	public void setSpeechId(Integer speechId) {
		this.speechId = speechId;
	}

	
}
