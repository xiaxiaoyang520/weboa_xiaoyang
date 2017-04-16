package com.hbpu.weboa.service.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hbpu.weboa.service.bl.DeptBL;
import com.hbpu.weboa.service.domain.Dept;
import com.hbpu.weboa.service.utils.AssertUtils;

/**
 * 部门服务接口实现类
 * @author 晓阳
 * 2017年1月15日下午4:03:44
 */
@Service
public class DeptService{
	
	@Autowired
	private DeptBL deptBL;

	public List<Dept> findDeptList(Dept dept) {
		AssertUtils.notNull(dept, "部门信息对象为空");
		return deptBL.findDeptList(dept);
	}
	
	public Dept queryDeptById(Integer deptId){
		return deptBL.queryDeptById(deptId);
	}

	public Integer addDept(Dept dept) {
		AssertUtils.notNull(dept, "添加部门信息对象为空");
		return deptBL.addDept(dept);
	}

	public void updateDept(Dept dept) {
		AssertUtils.notNull(dept, "更新部门信息对象为空");
		deptBL.update(dept);
	}
	
	public Dept queryDeptByDeptHeader(Integer deptHeader){
		AssertUtils.notNull(deptHeader, "部门主管为空");
		return deptBL.queryDeptByDeptHeader(deptHeader);
	}

}
