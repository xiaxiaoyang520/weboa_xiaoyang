package com.hbpu.weboa.web.pagemodel;

import java.io.Serializable;

import com.hbpu.weboa.service.utils.PageList;
import com.hbpu.weboa.web.consts.WebConstants;


public class PagesResult<T extends Serializable> extends BaseResult {

	private PageList<T> datas;

	public PageList<T> getDatas() {
		return datas;
	}

	public void setDatas(PageList<T> datas) {
		this.datas = datas;
	}

	public PagesResult() {
		super();
	}

	public PagesResult(String message, String result) {
		super(message, result);
	}

	public PagesResult(PageList<T> list) {
		super(WebConstants.RESULT_SUCCESS);
		this.setDatas(list);
	}
}
