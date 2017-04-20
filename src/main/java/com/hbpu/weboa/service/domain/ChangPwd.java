/**   
 * Copyright © 2017 北京易酒批电子商务有限公司. All rights reserved.
 */
package com.hbpu.weboa.service.domain;

import java.io.Serializable;

/**  
 * 密码修改模型
 * @author xiayang
 * @date 2017年4月20日 下午4:17:39  
 */
public class ChangPwd implements Serializable{

	
	private static final long serialVersionUID = 1L;
	
	private Integer userId;
	
	private String oldPwd;
	
	private String newPwd;

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getOldPwd() {
		return oldPwd;
	}

	public void setOldPwd(String oldPwd) {
		this.oldPwd = oldPwd;
	}

	public String getNewPwd() {
		return newPwd;
	}

	public void setNewPwd(String newPwd) {
		this.newPwd = newPwd;
	}

}
