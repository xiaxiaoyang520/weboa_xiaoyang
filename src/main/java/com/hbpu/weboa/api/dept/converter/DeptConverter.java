/**   
 * Copyright © 2017 北京易酒批电子商务有限公司. All rights reserved.
 */
package com.hbpu.weboa.api.dept.converter;

import java.util.ArrayList;
import java.util.List;

import com.hbpu.weboa.api.dept.model.DeptVO;
import com.hbpu.weboa.service.domain.Dept;

/**  
 * 部门模型转换 
 * @author xiayang
 * @date 2017年3月19日 下午6:49:57  
 */
public class DeptConverter {
	
	public static DeptVO convertToVO(Dept dept){
		DeptVO vo = new DeptVO();
		vo.setDeptId(dept.getDeptId());
		vo.setDeptName(dept.getDeptName());
		vo.setDeptRemark(dept.getDeptRemark());
		vo.setDeptHeader(dept.getDeptHeader());
		return vo;
	}
	
	
	public static List<DeptVO> convertToVOList(List<Dept> depts){
		List<DeptVO> vos = new ArrayList<DeptVO>();
		for (Dept dept : depts) {
			vos.add(convertToVO(dept));
		}
		return vos;
	}
}

