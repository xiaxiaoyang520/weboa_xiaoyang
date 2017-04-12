package com.hbpu.weboa.service.utils;

/**
 * 分页信息，主要用于查询返回的对象.
 * @author 晓阳
 * 2017年1月14日下午8:33:34
 */
public class Pager extends PagerCondition {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/**
	 * @Fields 总记录数
	 */
	private Integer recordCount;

	/**
	 * @Fields 总页数
	 */
	private Integer totalPage;

	public Pager() {
		super();
	}

	public Pager(Integer currentPage, Integer pageSize, Integer recordCount) {
		super(currentPage, pageSize);
		this.recordCount = recordCount;
		Integer totalPageSize = recordCount / pageSize;
		Integer remailder = recordCount % pageSize;
		// 如果总记录数与每页显示条数的余数大于0，总页数加1
		if (remailder > 0) {
			totalPageSize = totalPageSize + 1;
		}
		this.totalPage = totalPageSize;

	}

	/**
	 * 分页查询时使用
	 * 
	 * @param pageCondition
	 * @param currentPage
	 */
	public Pager(PagerCondition pageCondition, Integer recordCount) {
		this.setCurrentPage(pageCondition.getCurrentPage());
		this.setPageSize(pageCondition.getPageSize());
		this.setRecordCount(recordCount);
		this.setTotalPage((recordCount + this.getPageSize() - 1) / this.getPageSize());
	}

	public Integer getRecordCount() {
		return recordCount;
	}

	public Integer getTotalPage() {
		return totalPage;
	}

	public void setRecordCount(Integer recordCount) {
		this.recordCount = recordCount;
	}

	public void setTotalPage(Integer totalPage) {
		this.totalPage = totalPage;
	}
}
