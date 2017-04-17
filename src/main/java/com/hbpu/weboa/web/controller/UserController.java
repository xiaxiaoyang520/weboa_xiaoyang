/**   
 * Copyright © 2017 北京易酒批电子商务有限公司. All rights reserved.
 */
package com.hbpu.weboa.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.hbpu.weboa.api.user.converter.UserConverter;
import com.hbpu.weboa.api.user.model.UserRO;
import com.hbpu.weboa.api.user.model.UserVO;
import com.hbpu.weboa.service.domain.Post;
import com.hbpu.weboa.service.domain.User;
import com.hbpu.weboa.service.service.PostService;
import com.hbpu.weboa.service.service.UserService;
import com.hbpu.weboa.service.utils.AssertUtils;
import com.hbpu.weboa.service.utils.PageList;
import com.hbpu.weboa.service.utils.PagerCondition;
import com.hbpu.weboa.web.pagemodel.BaseResult;
import com.hbpu.weboa.web.pagemodel.PagesResult;
import com.hbpu.weboa.web.pagemodel.ROResult;

/**  
 * 用户控制器
 * @author xiayang
 * @date 2017年2月26日 下午8:21:37  
 */
@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private PostService postService;
	
	@RequestMapping(value="/templates/user/findUserList/{currentPage}",method=RequestMethod.POST)
	public BaseResult findUserList(@PathVariable("currentPage") Integer currentPage,
			@RequestBody User user){
		PagerCondition pagerCondition = new PagerCondition(currentPage, 10);
		PageList<User> userPage = userService.findUserList(user, pagerCondition);
		PageList<UserVO> voPageList = new PageList<UserVO>();
		voPageList.setDataList(UserConverter.convertToVOList(userPage.getDataList()));
		voPageList.setPager(userPage.getPager());
		return new PagesResult<UserVO>(voPageList);
	}
	
	@RequestMapping(value="/templates/user/addUser",method=RequestMethod.POST)
	public BaseResult addUser(@RequestBody User user){
		String userTel = user.getUserTel();
		AssertUtils.isTrue(userService.checkUserTel(userTel), "你输入的手机号已存在！");
		userService.addUser(user);
		return BaseResult.getSuccessResult();
	}
	
	@RequestMapping(value="/templates/user/queryUserById/{userId}",method=RequestMethod.POST)
	public BaseResult queryUserById(@PathVariable("userId") Integer userId){
		User user = userService.getUserById(userId);
		Post post = postService.queryPostById(user.getPostId());
		UserRO ro = UserConverter.convertToRO(user);
		ro.setPostName(post.getPostName());
		return new ROResult<UserRO>(ro);
	}
	
	@RequestMapping(value="/templates/user/updateUser",method=RequestMethod.POST)
	public BaseResult updateUser(@RequestBody User user){
		userService.updateUser(user);
		return BaseResult.getSuccessResult();
	}
	
}
