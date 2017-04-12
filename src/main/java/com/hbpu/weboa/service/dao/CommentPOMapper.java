package com.hbpu.weboa.service.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.hbpu.weboa.service.domain.Comment;

/**
 * User映射接口
 * @author 晓阳
 * 2017年1月14日下午9:25:14
 */
@Mapper
public interface CommentPOMapper {

	/**
	 * 通过言论id查看评论列表信息
	 * @param paramMap
	 * @return
	 */
	List<Comment> findCommentList(@Param("speechId") Integer speechId);

	/** 
	 * 添加评论
	 * @param comment
	 * @return void
	 */
	Integer addComment(Comment comment);
	
}
