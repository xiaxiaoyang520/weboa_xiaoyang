package com.hbpu.weboa.service.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.hbpu.weboa.service.domain.Dept;

/**
 * DeptMapper接口
 * @author 晓阳
 * 2017年1月15日下午4:05:04
 */
@Mapper
public interface DeptPOMapper {

	/**
	 * 通过条件查询部门列表
	 * @param dept
	 * @return
	 */
	List<Dept> findDeptList(Dept dept);
	
	/** 
	 * 通过主键查询部门信息
	 * @param deptId
	 * @return Dept
	 */
	Dept queryDeptById(Integer deptId);
	
	/**
	 * 添加部门信息
	 * @param dept
	 * @return
	 */
	Integer addDept(Dept dept);
	
	/**
	 * 修改部门信息
	 * @param dept
	 */
	void updateDept(Dept dept);
	
	/**
	 * 通过部门主管查询部门信息
	 * @param deptHeader
	 */
	Dept queryDeptByDeptHeader(Integer deptHeader);
	
}
