package com.hbpu.weboa.service.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.hbpu.weboa.service.domain.Post;

/**
 * POSTmapper接口
 * @author 晓阳
 * 2017年1月15日下午3:28:58
 */
@Mapper
public interface PostPOMapper {

	/**
	 * 条件查询岗位列表信息
	 * @param paramMap
	 * @return
	 */
	List<Post> findPostList(Map<String, Object> paramMap);
	
	/**
	 * 添加岗位信息
	 * @param post
	 * @return
	 */
	Integer addPost(Post post);
	
	/**
	 * 修改岗位信息
	 * @param post
	 */
	void updatePost(Post post);
	
	/**
	 * 删除岗位信息
	 * @param postId
	 */
	void deletePost(Integer postId);
	
	/** 
	 * 主键查询职位信息
	 * @param postId
	 * @return Post
	 */
	Post queryPostById(Integer postId);
}
