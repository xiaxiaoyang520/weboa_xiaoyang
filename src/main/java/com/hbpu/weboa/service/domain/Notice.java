package com.hbpu.weboa.service.domain;

import java.io.Serializable;
import java.util.Date;

/**
 * 通知和公告模型
 * @author 晓阳
 * 2017年4月16日下午3:01:47
 */
public class Notice implements Serializable{

	private static final long serialVersionUID = 1L;

	/**
	 * 通知和公告id
	 */
	private Integer noticeId;
	
	/**
	 * 标题
	 */
	private String noticeTitle;
	
	/**
	 * 内容
	 */
	private String noticeContext;
	
	/**
	 * 类型1通知2公告
	 */
	private Integer noticeType;
	
	/**
	 * 发布时间
	 */
	private Date createTime;
	
	/**
	 * 发布人
	 */
	private Integer createUser;
	
	/**
	 * 发布人姓名
	 */
	private String createUserName;
	
	/**
	 * 创建部门
	 */
	private String createDept;

	public Integer getNoticeId() {
		return noticeId;
	}

	public void setNoticeId(Integer noticeId) {
		this.noticeId = noticeId;
	}

	public String getNoticeTitle() {
		return noticeTitle;
	}

	public void setNoticeTitle(String noticeTitle) {
		this.noticeTitle = noticeTitle;
	}

	public String getNoticeContext() {
		return noticeContext;
	}

	public void setNoticeContext(String noticeContext) {
		this.noticeContext = noticeContext;
	}

	public Integer getNoticeType() {
		return noticeType;
	}

	public void setNoticeType(Integer noticeType) {
		this.noticeType = noticeType;
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

	public String getCreateUserName() {
		return createUserName;
	}

	public void setCreateUserName(String createUserName) {
		this.createUserName = createUserName;
	}

	public String getCreateDept() {
		return createDept;
	}

	public void setCreateDept(String createDept) {
		this.createDept = createDept;
	}
	
}
