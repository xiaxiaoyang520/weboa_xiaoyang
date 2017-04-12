/**   
 * Copyright © 2017 北京易酒批电子商务有限公司. All rights reserved.
 */
package com.hbpu.weboa.api.user.model;

import java.io.Serializable;

/**  
 * UserVO模型
 * @author xiayang
 * @date 2017年2月12日 下午12:53:51  
 */
public class UserVO implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	/**
	 * 用户编号
	 */
	private Integer userId;
	
	/**
	 * 用户姓名
	 */
	private String userName;
	
	/**
	 *用户性别1男，2女 
	 */
	private Integer userSex;
	
	/**
	 * 出生日期
	 */
	private Integer userAge;
	
	/**
	 * 用户电话
	 */
	private String userTel;
	
	/**
	 * 用户权限1后台，2前台
	 */
	private Integer userPower;
	
	/**
	 * 职位id
	 */
	private Integer postId;

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public Integer getUserSex() {
		return userSex;
	}

	public void setUserSex(Integer userSex) {
		this.userSex = userSex;
	}

	public String getUserTel() {
		return userTel;
	}

	public void setUserTel(String userTel) {
		this.userTel = userTel;
	}

	public Integer getUserPower() {
		return userPower;
	}

	public void setUserPower(Integer userPower) {
		this.userPower = userPower;
	}

	public Integer getPostId() {
		return postId;
	}

	public void setPostId(Integer postId) {
		this.postId = postId;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Integer getUserAge() {
		return userAge;
	}

	public void setUserAge(Integer userAge) {
		this.userAge = userAge;
	}
	
	
	
}

