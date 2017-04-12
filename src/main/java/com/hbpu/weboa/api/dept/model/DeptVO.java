/**   
 * Copyright © 2017 北京易酒批电子商务有限公司. All rights reserved.
 */
package com.hbpu.weboa.api.dept.model;

import java.io.Serializable;

/**  
 * 部门VO模型
 * @author xiayang
 * @date 2017年3月19日 下午6:48:08  
 */
public class DeptVO implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	/**
	 * 部门id
	 */
	private Integer deptId;
	
	/**
	 * 部门名称
	 */
	private String deptName;
	
	/**
	 * 部门描述
	 */
	private String deptRemark;
	
	/**
	 * 部门负责人id
	 */
	private Integer deptHeader;
	
	/**
	 * 部门负责人名称
	 */
	private String deptHeaderName;

	public Integer getDeptId() {
		return deptId;
	}

	public void setDeptId(Integer deptId) {
		this.deptId = deptId;
	}

	public String getDeptName() {
		return deptName;
	}

	public void setDeptName(String deptName) {
		this.deptName = deptName;
	}

	public String getDeptRemark() {
		return deptRemark;
	}

	public void setDeptRemark(String deptRemark) {
		this.deptRemark = deptRemark;
	}

	public Integer getDeptHeader() {
		return deptHeader;
	}

	public void setDeptHeader(Integer deptHeader) {
		this.deptHeader = deptHeader;
	}

	public String getDeptHeaderName() {
		return deptHeaderName;
	}

	public void setDeptHeaderName(String deptHeaderName) {
		this.deptHeaderName = deptHeaderName;
	}
	
	
	
}
