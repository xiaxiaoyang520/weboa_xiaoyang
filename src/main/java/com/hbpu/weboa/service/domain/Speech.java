package com.hbpu.weboa.service.domain;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * 发表言论模型类
 * @author 晓阳
 * 2017年1月14日下午8:03:25
 */
public class Speech implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	/**
	 * 发表言论id
	 */
	private Integer speechId;
	
	/**
	 * 言论标题
	 */
	private String title;
	
	/**
	 * 言论内容
	 */
	private String context;
	
	/**
	 * 言论发表时间
	 */
	private Date createTime;
	
	/**
	 * 发表人id
	 */
	private Integer createUser;
	
	/**
	 * 创建用户名称
	 */
	private String createUserName;
	
	/**
	 * 获赞数目
	 */
	private Integer praiseNum;
	
	/**
	 * 评论列表
	 */
	private List<Comment> comments;
	
	/**
	 * 点赞记录列表
	 */
	private List<PraiseRecord> praiseRecords;

	public Integer getSpeechId() {
		return speechId;
	}

	public void setSpeechId(Integer speechId) {
		this.speechId = speechId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
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

	public Integer getCreateUser() {
		return createUser;
	}

	public void setCreateUser(Integer createUser) {
		this.createUser = createUser;
	}

	public Integer getPraiseNum() {
		return praiseNum;
	}

	public void setPraiseNum(Integer praiseNum) {
		this.praiseNum = praiseNum;
	}

	public String getCreateUserName() {
		return createUserName;
	}

	public void setCreateUserName(String createUserName) {
		this.createUserName = createUserName;
	}

	public List<Comment> getComments() {
		return comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}

	public List<PraiseRecord> getPraiseRecords() {
		return praiseRecords;
	}

	public void setPraiseRecords(List<PraiseRecord> praiseRecords) {
		this.praiseRecords = praiseRecords;
	}
	
	

}
