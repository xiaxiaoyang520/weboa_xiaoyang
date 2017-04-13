/**   
 * Copyright © 2017 北京易酒批电子商务有限公司. All rights reserved.
 */
package com.hbpu.weboa.web.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.hbpu.weboa.service.domain.Dept;
import com.hbpu.weboa.service.domain.Post;
import com.hbpu.weboa.service.domain.User;
import com.hbpu.weboa.service.service.DeptService;
import com.hbpu.weboa.service.service.PostService;
import com.hbpu.weboa.service.service.UserService;
import com.hbpu.weboa.web.pagemodel.BaseResult;
import com.hbpu.weboa.web.pagemodel.ListResult;
import com.hbpu.weboa.web.pagemodel.ROResult;

/**  
 * 公共请求控制器
 * @author xiayang
 * @date 2017年3月19日 下午1:48:19  
 */
@RestController
public class CommonController {
	
	@Autowired
	private PostService postService;
	
	@Autowired
	private DeptService deptService;
	
	@Autowired
	private UserService userService;
	
	@RequestMapping(value="/templates/common/findPostList",method=RequestMethod.POST)
	public BaseResult findPostList(){
		Post post = new Post();
		List<Post> list = postService.findPostList(post);
		return new ListResult<Post>(list);
	}
	
	@RequestMapping(value="/templates/common/findDeptList",method=RequestMethod.POST)
	public BaseResult findDeptList(){
		Dept dept = new Dept();
		List<Dept> list = deptService.findDeptList(dept);
		return new ListResult<Dept>(list);
	}
	
	@RequestMapping(value="/templates/common/findAllUserList",method=RequestMethod.POST)
	public BaseResult findAllUserList(){
		List<User>  users = userService.findAllUserList();
		return new ListResult<User>(users);
	}
	@RequestMapping(value="/templates/common/queryUserInfo",method=RequestMethod.POST)
	public BaseResult queryUserInfo(HttpServletRequest request){
		User user = userService.queryUserInfo(request);
		return new ROResult<User>(user);
	}
}
