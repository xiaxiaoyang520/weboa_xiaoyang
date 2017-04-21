package com.hbpu.weboa.web.pagemodel;

import java.util.List;

import com.hbpu.weboa.web.consts.WebConstants;

public class ListResult<T> extends BaseResult {

	private List<T> list;	

	public List<T> getList() {
		return list;
	}

	private void setList(List<T> list) {
		this.list = list;
	}

	public ListResult() {
		super();
	}

	public ListResult(String message, String result) {
		super(message, result);
	}

	public ListResult(List<T> list) {
		super(WebConstants.RESULT_SUCCESS);
		this.setList(list);
	}
}
