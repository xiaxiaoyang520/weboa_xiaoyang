/**   
 * Copyright © 2017 北京易酒批电子商务有限公司. All rights reserved.
 */
package com.hbpu.weboa.api.post.model;

import java.io.Serializable;

/**  
 * 职位VO模型
 * @author xiayang
 * @date 2017年3月19日 下午5:00:10  
 */
public class PostVO implements Serializable{

	private static final long serialVersionUID = 1L;
	
	/**
	 * 职位id
	 */
	private Integer postId;
	
	/**
	 * 职位名称
	 */
	private String postName;
	
	/**
	 * 职位描述
	 */
	private String postRemark;
	
	/**
	 * 部门id
	 */
	private Integer deptId;
	
	/**
	 * 部门名称
	 */
	private String deptName;

	public Integer getPostId() {
		return postId;
	}

	public void setPostId(Integer postId) {
		this.postId = postId;
	}

	public String getPostName() {
		return postName;
	}

	public void setPostName(String postName) {
		this.postName = postName;
	}

	public String getPostRemark() {
		return postRemark;
	}

	public void setPostRemark(String postRemark) {
		this.postRemark = postRemark;
	}

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
	
	
}
