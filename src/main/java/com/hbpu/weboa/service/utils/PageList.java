package com.hbpu.weboa.service.utils;

import java.io.Serializable;
import java.util.List;

/**
 * TODO
 * @author 晓阳
 * 2017年1月14日下午8:32:13
 */
public class PageList<T extends Serializable> implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -6177180431483012580L;

	/**
	 * @Fields 返回的数据集合
	 */
	private List<T> dataList;

	/**
	 * @Fields 返回的分页对象信息
	 */
	private Pager pager;

	public List<T> getDataList() {
		return dataList;
	}

	public Pager getPager() {
		return pager;
	}

	public void setDataList(List<T> dataList) {
		this.dataList = dataList;
	}

	public void setPager(Pager pager) {
		this.pager = pager;
	}

}

