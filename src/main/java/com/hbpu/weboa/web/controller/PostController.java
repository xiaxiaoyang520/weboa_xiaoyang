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

import com.hbpu.weboa.api.post.converter.PostConverter;
import com.hbpu.weboa.api.post.model.PostVO;
import com.hbpu.weboa.service.domain.Dept;
import com.hbpu.weboa.service.domain.Post;
import com.hbpu.weboa.service.service.DeptService;
import com.hbpu.weboa.service.service.PostService;
import com.hbpu.weboa.web.pagemodel.BaseResult;
import com.hbpu.weboa.web.pagemodel.ListResult;
import com.hbpu.weboa.web.pagemodel.ROResult;

/**  
 * 职位管理控制器
 * @author xiayang
 * @date 2017年3月19日 下午1:45:01  
 */
@RestController
public class PostController {
	
	@Autowired
	private PostService postService;
	
	@Autowired
	private DeptService deptService;
	
	@RequestMapping(value="/templates/post/findPostList",method=RequestMethod.POST)
	public BaseResult findPostList(@RequestBody Post post){
		List<Post> posts = postService.findPostList(post);
		List<PostVO> vos = PostConverter.convertToVOList(posts);
		return new ListResult<PostVO>(vos);
	}
	
	@RequestMapping(value="/templates/post/addPost",method=RequestMethod.POST)
	public BaseResult addPost(@RequestBody Post post){
		postService.addPost(post);
		return BaseResult.getSuccessResult();
	}
	
	@RequestMapping(value="/templates/post/queryPostById/{postId}",method=RequestMethod.POST)
	public BaseResult queryPostById(@PathVariable("postId") Integer postId){
		Post post = postService.queryPostById(postId);
		Dept dept = deptService.queryDeptById(post.getDeptId());
		PostVO vo = PostConverter.convertToVO(post);
		vo.setDeptName(dept.getDeptName());
		return new ROResult<PostVO>(vo);
	}
	
	@RequestMapping(value="/templates/post/updatePost",method=RequestMethod.POST)
	public BaseResult updatePost(@RequestBody Post post){
		postService.updatePost(post);
		return BaseResult.getSuccessResult();
	}
	
}
