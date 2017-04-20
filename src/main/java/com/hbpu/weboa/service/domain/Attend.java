/**   
 * Copyright © 2017 北京易酒批电子商务有限公司. All rights reserved.
 */
package com.hbpu.weboa.service.domain;

import java.io.Serializable;
import java.util.Date;

/**  
 * 考勤模型类
 * @author xiayang
 * @date 2017年1月23日 下午4:29:33  
 */
public class Attend implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	/**
	 * 考勤id
	 */
	private Integer attendId;
	
	/**
	 * 用户id
	 */
	private Integer attendUser;
	
	/**
	 * 用户姓名
	 */
	private String attendUserName;
	
	/**
	 * 考勤日期
	 */
	private Date attendDate;
	
	/**
	 * 考勤状态
	 */
	private Integer attendState;
	
	/**
	 * 上班时间
	 */
	private Date startTime;
	
	/**
	 * 下班时间
	 */
	private Date endTime;
	
	/**
	 * 搜索起始日期
	 */
	private Date attendStartDate;
	
	/**
	 * 搜索结束时间
	 */
	private Date attendEndDate;
	
	/**
	 * 备注
	 */
	private String attendRemark;

	public Integer getAttendId() {
		return attendId;
	}

	public void setAttendId(Integer attendId) {
		this.attendId = attendId;
	}

	public Integer getAttendUser() {
		return attendUser;
	}

	public void setAttendUser(Integer attendUser) {
		this.attendUser = attendUser;
	}

	public Date getAttendDate() {
		return attendDate;
	}

	public void setAttendDate(Date attendDate) {
		this.attendDate = attendDate;
	}

	public Date getStartTime() {
		return startTime;
	}

	public void setStartTime(Date startTime) {
		this.startTime = startTime;
	}

	public Date getEndTime() {
		return endTime;
	}

	public void setEndTime(Date endTime) {
		this.endTime = endTime;
	}

	public String getAttendRemark() {
		return attendRemark;
	}

	public void setAttendRemark(String attendRemark) {
		this.attendRemark = attendRemark;
	}

	public String getAttendUserName() {
		return attendUserName;
	}

	public void setAttendUserName(String attendUserName) {
		this.attendUserName = attendUserName;
	}

	public Date getAttendStartDate() {
		return attendStartDate;
	}

	public void setAttendStartDate(Date attendStartDate) {
		this.attendStartDate = attendStartDate;
	}

	public Date getAttendEndDate() {
		return attendEndDate;
	}

	public void setAttendEndDate(Date attendEndDate) {
		this.attendEndDate = attendEndDate;
	}

	public Integer getAttendState() {
		return attendState;
	}

	public void setAttendState(Integer attendState) {
		this.attendState = attendState;
	}
	
	
}
