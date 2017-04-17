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
	 * 提交用户名称
	 */
	private String submitUserName;
	
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
	 * 处理用户名称
	 */
	private String handleUserName;
	
	/**
	 * 处理时间
	 */
	private Date handleTime;
	
	/**
	 * 处理备注
	 */
	private String handleRemark;
	
	/**
	 * 按提交时间搜索的开始时间
	 */
	private Date submitBeginTime;
	
	/**
	 * 按提交时间搜索的结束时间
	 */
	private Date submitEndTime;
	
	/**
	 * 按处理时间搜索的开始时间
	 */
	private Date handleBeginTime;
	
	/**
	 * 按处理时间搜索的结束时间
	 */
	private Date handleEndTime;

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

	public String getSubmitUserName() {
		return submitUserName;
	}

	public void setSubmitUserName(String submitUserName) {
		this.submitUserName = submitUserName;
	}

	public String getHandleUserName() {
		return handleUserName;
	}

	public void setHandleUserName(String handleUserName) {
		this.handleUserName = handleUserName;
	}

	public Date getSubmitBeginTime() {
		return submitBeginTime;
	}

	public void setSubmitBeginTime(Date submitBeginTime) {
		this.submitBeginTime = submitBeginTime;
	}

	public Date getSubmitEndTime() {
		return submitEndTime;
	}

	public void setSubmitEndTime(Date submitEndTime) {
		this.submitEndTime = submitEndTime;
	}

	public Date getHandleBeginTime() {
		return handleBeginTime;
	}

	public void setHandleBeginTime(Date handleBeginTime) {
		this.handleBeginTime = handleBeginTime;
	}

	public Date getHandleEndTime() {
		return handleEndTime;
	}

	public void setHandleEndTime(Date handleEndTime) {
		this.handleEndTime = handleEndTime;
	}

	
	
}
