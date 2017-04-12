package com.hbpu.weboa.service.domain;

import java.io.Serializable;

/**
 * 部门模型类
 * @author 晓阳
 * 2017年1月14日下午7:52:41
 */
public class Dept implements Serializable{

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
	
	

}
