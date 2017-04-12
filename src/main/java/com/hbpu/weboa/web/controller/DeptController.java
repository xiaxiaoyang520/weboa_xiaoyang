/**   
 * Copyright © 2017 北京易酒批电子商务有限公司. All rights reserved.
 */
package com.hbpu.weboa.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.hbpu.weboa.api.dept.converter.DeptConverter;
import com.hbpu.weboa.api.dept.model.DeptVO;
import com.hbpu.weboa.service.domain.Dept;
import com.hbpu.weboa.service.domain.User;
import com.hbpu.weboa.service.service.DeptService;
import com.hbpu.weboa.service.service.UserService;
import com.hbpu.weboa.web.pagemodel.BaseResult;
import com.hbpu.weboa.web.pagemodel.ListResult;
import com.hbpu.weboa.web.pagemodel.ROResult;

/**  
 * 部门控制器
 * @author xiayang
 * @date 2017年3月19日 下午6:44:50  
 */
@RestController
public class DeptController {
	
	@Autowired
	private DeptService deptService;
	
	@Autowired
	private UserService userService;
	
	@RequestMapping(value="/templates/dept/findDeptList",method=RequestMethod.POST)
	public BaseResult findDeptList(@RequestBody Dept dept){
		List<Dept> depts = deptService.findDeptList(dept);
		List<DeptVO> vos = DeptConverter.convertToVOList(depts);
		return new ListResult<DeptVO>(vos);
	}
	
	@RequestMapping(value="/templates/dept/addDept",method=RequestMethod.POST)
	public BaseResult addDept(@RequestBody Dept dept){
		deptService.addDept(dept);
		return BaseResult.getSuccessResult();
	}
	
	@RequestMapping(value="/templates/dept/queryDeptById/{deptId}",method=RequestMethod.POST)
	public BaseResult queryDeptById(@PathVariable("deptId") Integer deptId){
		Dept dept = deptService.queryDeptById(deptId);
		User user = userService.getUserById(dept.getDeptHeader());
		DeptVO vo = DeptConverter.convertToVO(dept);
		vo.setDeptHeaderName(user.getUserName());
		return new ROResult<DeptVO>(vo);
	}
	
	@RequestMapping(value="/templates/dept/updateDept",method=RequestMethod.POST)
	public BaseResult updateDept(@RequestBody Dept dept){
		deptService.updateDept(dept);
		return BaseResult.getSuccessResult();
	}
}
