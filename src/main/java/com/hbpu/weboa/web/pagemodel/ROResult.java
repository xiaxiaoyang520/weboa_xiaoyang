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
