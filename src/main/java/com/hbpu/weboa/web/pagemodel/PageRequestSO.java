package com.hbpu.weboa.web.pagemodel;


import com.hbpu.weboa.service.utils.PagerCondition;

public class PageRequestSO<T> {

	private T so;
	private PagerCondition pager;

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

}
