package com.hbpu.weboa.service.domain;

import java.io.Serializable;

/**
 * 职位模型类
 * @author 晓阳
 * 2017年1月14日下午7:47:49
 */
public class Post implements Serializable{

	/**
	 * 
	 */
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

	
}
