package com.hbpu.weboa.service.bl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hbpu.weboa.service.dao.DeptPOMapper;
import com.hbpu.weboa.service.domain.Dept;

/**
 * 部门BL类
 * @author 晓阳
 * 2017年1月15日下午4:19:49
 */
@Service
@Transactional
@Repository
public class DeptBL {

	@Autowired
	private DeptPOMapper deptPOMapper;
	
	public List<Dept> findDeptList(Dept dept){
		return deptPOMapper.findDeptList(dept);
	}
	
	public Dept queryDeptById(Integer deptId){
		return deptPOMapper.queryDeptById(deptId);
	}
	
	public Integer addDept(Dept dept){
		deptPOMapper.addDept(dept);
		return dept.getDeptId();
	}
	
	public void update(Dept dept){
		deptPOMapper.updateDept(dept);
	}
}
