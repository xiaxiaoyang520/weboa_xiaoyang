/**   
 * Copyright © 2017 北京易酒批电子商务有限公司. All rights reserved.
 */
package com.hbpu.weboa.service.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hbpu.weboa.service.bl.PermitBL;
import com.hbpu.weboa.service.domain.Permit;
import com.hbpu.weboa.service.utils.AssertUtils;
import com.hbpu.weboa.service.utils.PageList;
import com.hbpu.weboa.service.utils.PagerCondition;

/**  
 * 审核服务接口实现类
 * @author xiayang
 * @date 2017年1月23日 下午6:50:24  
 */
@Service
public class PermitService{
	
	@Autowired
	private PermitBL permitBL;

	public PageList<Permit> findPermitList(Permit permit, PagerCondition pagerCondition) {
		AssertUtils.notNull(permit, "审核信息查询条件对象为空");
		AssertUtils.notNull(pagerCondition, "分页对象为空");
		return permitBL.findPermitList(permit, pagerCondition);
	}

	public Integer addPermit(Permit permit) {
		AssertUtils.notNull(permit, "添加审核信息对象为空");
		return permitBL.addPermit(permit);
	}

	public void updatePermit(Permit permit) {
		AssertUtils.notNull(permit, "修改审核信息对象为空");
		permitBL.updatePermit(permit);
	}
}
