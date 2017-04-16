/**   
 * Copyright © 2017 北京易酒批电子商务有限公司. All rights reserved.
 */
package com.hbpu.weboa.service.bl;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hbpu.weboa.service.dao.PermitPOMapper;
import com.hbpu.weboa.service.domain.Permit;
import com.hbpu.weboa.service.utils.PageList;
import com.hbpu.weboa.service.utils.Pager;
import com.hbpu.weboa.service.utils.PagerCondition;

/**  
 * 审核BL
 * @author xiayang
 * @date 2017年1月23日 下午6:39:08  
 */
@Service
@Transactional
@Repository
public class PermitBL {
	
	@Autowired
	private PermitPOMapper permitPOMapper;
	
	public PageList<Permit> findPermitList(Permit permit, PagerCondition pagerCondition){
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("permitTitle", permit.getPermitTitle());
		paramMap.put("submitUser", permit.getSubmitUser());
		paramMap.put("handleUser", permit.getHandleUser());
		paramMap.put("permitState", permit.getPermitState());
		paramMap.put("offset", pagerCondition.startRow());
		paramMap.put("limitnum", pagerCondition.getPageSize());
		List<Permit> permits = permitPOMapper.findPermitList(paramMap);
		PageList<Permit> pageList = new PageList<Permit>();
		pageList.setDataList(permits);
		int recordCount = permitPOMapper.getPermitListNum(paramMap);
		Pager myPager = new Pager(pagerCondition.getCurrentPage(), pagerCondition.getPageSize(), recordCount);
		pageList.setPager(myPager);
		return pageList;
	}
	
	public Integer addPermit(Permit permit){
		permit.setSubmitTime(new Date());
		permit.setPermitState(0);
		permitPOMapper.addPermit(permit);
		return permit.getPermitId();
	}
	
	public void updatePermit(Permit permit){
		permit.setHandleTime(new Date());
		permitPOMapper.updatePermit(permit);
	}
	
	public Permit queryPermitById(Integer permitId) {
		return permitPOMapper.queryPermitById(permitId);
	}
}
