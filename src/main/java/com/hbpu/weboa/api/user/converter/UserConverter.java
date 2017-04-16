/**   
 * Copyright © 2017 北京易酒批电子商务有限公司. All rights reserved.
 */
package com.hbpu.weboa.api.user.converter;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.hbpu.weboa.api.user.model.UserRO;
import com.hbpu.weboa.api.user.model.UserVO;
import com.hbpu.weboa.service.domain.User;

/**  
 * 用户模型转换类
 * @author xiayang
 * @date 2017年2月12日 下午1:01:03  
 */
public class UserConverter {
	
	public static UserVO convertToVO(User user){
		UserVO userVO = new UserVO();
		userVO.setUserId(user.getUserId());
		userVO.setUserName(user.getUserName());
		userVO.setPostId(user.getPostId());
		userVO.setUserSex(user.getUserSex());
		userVO.setUserTel(user.getUserTel());
		userVO.setUserPower(user.getUserPower());
		userVO.setState(user.getState());
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy");
		Integer beginYear = Integer.valueOf(sdf.format(user.getUserBirth()));
		Integer endYear = Integer.valueOf(sdf.format(new Date()));
		Integer userAge = endYear - beginYear;
		userVO.setUserAge(userAge);
		return userVO;
	}
	
	public static List<UserVO> convertToVOList(List<User> list){
		List<UserVO> vos = new ArrayList<UserVO>();
		for (User user : list) {
			vos.add(convertToVO(user));
		}
		return vos;
	}
	
	public static UserRO convertToRO(User user){
		UserRO userRO = new UserRO();
		userRO.setUserId(user.getUserId());
		userRO.setUserName(user.getUserName());
		userRO.setPostId(user.getPostId());
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy");
		Integer beginYear = Integer.valueOf(sdf.format(user.getUserBirth()));
		Integer endYear = Integer.valueOf(sdf.format(new Date()));
		Integer userAge = endYear - beginYear;
		userRO.setUserAge(userAge);
		userRO.setUserSex(user.getUserSex());
		userRO.setUserTel(user.getUserTel());
		userRO.setUserPower(user.getUserPower());
		userRO.setUserAddr(user.getUserAddr());
		userRO.setState(user.getState());
		userRO.setIdCardNO(user.getIdCardNO());
		userRO.setUserEmail(user.getUserEmail());
		return userRO;
	}
}
