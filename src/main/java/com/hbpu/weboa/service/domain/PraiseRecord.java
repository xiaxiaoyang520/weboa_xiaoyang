package com.hbpu.weboa.service.domain;

import java.io.Serializable;
import java.util.Date;

/**
 * 点赞记录模型
 * @author 晓阳
 * 2017年4月14日下午11:45:14
 */
public class PraiseRecord implements Serializable{

	private static final long serialVersionUID = 1L;
	
	/**
	 * 点赞记录id
	 */
	private Integer praiseRecordId;
	
	/**
	 * 言论id
	 */
	private Integer speechId;
	
	/**
	 * 用户id
	 */
	private Integer userId;
	
	/**
	 * 用户名
	 */
	private String userName;
	
	/**
	 * 点赞时间
	 */
	private Date createTime;

	public Integer getPraiseRecordId() {
		return praiseRecordId;
	}

	public void setPraiseRecordId(Integer praiseRecordId) {
		this.praiseRecordId = praiseRecordId;
	}

	public Integer getSpeechId() {
		return speechId;
	}

	public void setSpeechId(Integer speechId) {
		this.speechId = speechId;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}
	
	
	
}
