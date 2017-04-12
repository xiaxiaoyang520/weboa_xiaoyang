package com.hbpu.weboa.service.domain;

import java.io.Serializable;
import java.util.Date;

/**
 * 审核模型类
 * @author 晓阳
 * 2017年1月14日下午8:14:39
 */
public class Permit implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	/**
	 * 审核id
	 */
	private Integer permitId;
	
	/**
	 * 审核标题
	 */
	private String permitTitle;
	
	/**
	 * 审核内容
	 */
	private String permitContext;
	
	/**
	 * 提交用户id
	 */
	private Integer submitUser;
	
	/**
	 * 提交时间
	 */
	private Date submitTime;
	
	/**
	 * 审核状态
	 */
	private Integer permitState;
	
	/**
	 * 处理用户id
	 */
	private Integer handleUser;
	
	/**
	 * 处理时间
	 */
	private Date handleTime;
	
	/**
	 * 处理备注
	 */
	private String handleRemark;

	public Integer getPermitId() {
		return permitId;
	}

	public void setPermitId(Integer permitId) {
		this.permitId = permitId;
	}

	public String getPermitTitle() {
		return permitTitle;
	}

	public void setPermitTitle(String permitTitle) {
		this.permitTitle = permitTitle;
	}

	public String getPermitContext() {
		return permitContext;
	}

	public void setPermitContext(String permitContext) {
		this.permitContext = permitContext;
	}

	public Integer getSubmitUser() {
		return submitUser;
	}

	public void setSubmitUser(Integer submitUser) {
		this.submitUser = submitUser;
	}

	public Date getSubmitTime() {
		return submitTime;
	}

	public void setSubmitTime(Date submitTime) {
		this.submitTime = submitTime;
	}

	public Integer getPermitState() {
		return permitState;
	}

	public void setPermitState(Integer permitState) {
		this.permitState = permitState;
	}

	public Integer getHandleUser() {
		return handleUser;
	}

	public void setHandleUser(Integer handleUser) {
		this.handleUser = handleUser;
	}

	public Date getHandleTime() {
		return handleTime;
	}

	public void setHandleTime(Date handleTime) {
		this.handleTime = handleTime;
	}

	public String getHandleRemark() {
		return handleRemark;
	}

	public void setHandleRemark(String handleRemark) {
		this.handleRemark = handleRemark;
	}

	
}
