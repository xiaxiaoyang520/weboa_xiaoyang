package com.hbpu.weboa.service.utils;

import java.io.Serializable;

/**
 * 分页的查询条件
 * @author 晓阳
 * 2017年1月14日下午8:34:41
 */
public class PagerCondition implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/**
	 * @Fields 当前页
	 */
	private Integer currentPage = 1;

	/**
	 * @Fields 每页的数量
	 */
	private Integer pageSize = 20;

	public PagerCondition() {
		super();
	}

	public PagerCondition(Integer currentPage) {
		super();

		if (currentPage != null)
			this.currentPage = currentPage;

		this.pageSize = 20;
	}

	public PagerCondition(Integer currentPage, Integer pageSize) {
		super();

		if (currentPage != null)
			this.currentPage = currentPage;

		this.pageSize = pageSize;
	}

	public Integer getCurrentPage() {
		return currentPage;
	}

	public Integer getLimitnum() {
		return this.getPageSize();
	}

	public Integer getOffset() {
		return (this.getCurrentPage() - 1) * this.getPageSize();
	}

	public Integer getPageSize() {
		if (pageSize == null || pageSize <= 0)
			return 20;
		else
			return pageSize;
	}

	public Integer getPreviousPage() {
		if (this.currentPage > 0) {
			return this.currentPage - 1;
		} else {
			return 0;
		}
	}

	public void setCurrentPage(Integer currentPage) {
		this.currentPage = currentPage;
	}

	public void setPageSize(Integer pageSize) {
		this.pageSize = pageSize;
	}

	public Integer startRow() {
		int startRow = 0;
		if (currentPage != 1) {
			startRow = (currentPage - 1) * pageSize;
		}
		return startRow;
	}
}
