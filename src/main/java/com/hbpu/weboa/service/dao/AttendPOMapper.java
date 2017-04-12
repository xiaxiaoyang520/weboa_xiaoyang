package com.hbpu.weboa.service.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.hbpu.weboa.service.domain.Attend;

/**
 * Attend映射接口
 * @author 晓阳
 * 2017年1月14日下午9:25:14
 */
@Mapper
public interface AttendPOMapper {

	/**
	 * 通过条件分页查询考勤列表信息
	 * @param paramMap
	 * @return
	 */
	List<Attend> findAttendList(Map<String, Object> paramMap);
	
	/**
	 * 通过条件分页查询考勤列表信息数量
	 * @param paramMap
	 * @return
	 */
	Integer getAttendListNum(Map<String, Object> paramMap);
	
	
	/**
	 * 插入用户考勤信息
	 * @param Attend
	 * @return
	 */
	Integer addAttend(Attend attend);
	
	/** 
	 * 给考勤信息添加备注信息
	 * @param userId
	 * @param attendRemark
	 * @return void
	 */
	void addRemark(Map<String, Object> paramMap);
	
}
