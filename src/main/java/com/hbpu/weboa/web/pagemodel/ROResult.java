/*
 * Copyright © 2016 北京易酒批电子商务有限公司. All rights reserved.
 */

package com.hbpu.weboa.web.pagemodel;

import com.hbpu.weboa.web.consts.WebConstants;

public class ROResult<T> extends BaseResult {

	T data;

	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
	}

	public ROResult() {
		super();
	}

	public ROResult(T data) {
		super(WebConstants.RESULT_SUCCESS);
		this.setData(data);
	}
}
