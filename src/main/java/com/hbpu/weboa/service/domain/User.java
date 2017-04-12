package com.hbpu.weboa.service.domain;

import java.io.Serializable;
import java.util.Date;

/**
 * 用户模型类
 * @author 晓阳
 * 2017年1月14日下午7:32:18
 */
public class User implements Serializable{

	private static final long serialVersionUID = 1L;
	
	/**
	 * 用户id
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
	private Date userBirth;
	
	/**
	 * 用户住址
	 */
	private String userAddr;
	
	/**
	 * 用户电话
	 */
	private String userTel;
	
	/**
	 * 用户登录密码
	 */
	private String userPassword;
	
	/**
	 * 用户权限1后台，2前台
	 */
	private Integer userPower;
	
	/**
	 * 职位id
	 */
	private Integer postId;

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

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

	public Date getUserBirth() {
		return userBirth;
	}

	public void setUserBirth(Date userBirth) {
		this.userBirth = userBirth;
	}

	public String getUserAddr() {
		return userAddr;
	}

	public void setUserAddr(String userAddr) {
		this.userAddr = userAddr;
	}

	public String getUserTel() {
		return userTel;
	}

	public void setUserTel(String userTel) {
		this.userTel = userTel;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
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

	
}
