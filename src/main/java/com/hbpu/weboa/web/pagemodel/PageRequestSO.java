/*
 * Copyright © 2016 北京易酒批电子商务有限公司. All rights reserved.
 */

package com.hbpu.weboa.web.pagemodel;


import com.hbpu.weboa.service.utils.PagerCondition;

public class PageRequestSO<T> {

	// region 属性定义
	private T so;
	private PagerCondition pager;
	// endregion

	// region get&set方法

	public PagerCondition getPager() {
		return pager;
	}

	public T getSo() {
		return so;
	}

	public void setSo(T so) {
		this.so = so;
	}

	public void setPager(PagerCondition pager) {
		this.pager = pager;
	}
	// endregion

}
