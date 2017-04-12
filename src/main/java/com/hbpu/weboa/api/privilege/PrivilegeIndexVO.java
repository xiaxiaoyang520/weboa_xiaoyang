/**   
 * Copyright © 2017 北京易酒批电子商务有限公司. All rights reserved.
 */
package com.hbpu.weboa.api.privilege;

import java.io.Serializable;
import java.util.List;

/**  
 * 菜单生成模型
 * @author xiayang
 * @date 2017年3月18日 下午2:26:28  
 */
public class PrivilegeIndexVO implements Serializable{
	
	private static final long serialVersionUID = 1L;
	private String privilegeName;
	private String privilegeCode;
	private String sequence;
	private String icon;
	private String url;
	private String privilegeType;
	private String title;

	private List<PrivilegeIndexVO> sonIndex;

	public String getPrivilegeName() {
		return privilegeName;
	}

	public void setPrivilegeName(String privilegeName) {
		this.privilegeName = privilegeName;
	}

	public String getPrivilegeCode() {
		return privilegeCode;
	}

	public void setPrivilegeCode(String privilegeCode) {
		this.privilegeCode = privilegeCode;
	}

	public String getSequence() {
		return sequence;
	}

	public void setSequence(String sequence) {
		this.sequence = sequence;
	}

	public String getIcon() {
		return icon;
	}

	public void setIcon(String icon) {
		this.icon = icon;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getPrivilegeType() {
		return privilegeType;
	}

	public void setPrivilegeType(String privilegeType) {
		this.privilegeType = privilegeType;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public List<PrivilegeIndexVO> getSonIndex() {
		return sonIndex;
	}

	public void setSonIndex(List<PrivilegeIndexVO> sonIndex) {
		this.sonIndex = sonIndex;
	}

	
}
