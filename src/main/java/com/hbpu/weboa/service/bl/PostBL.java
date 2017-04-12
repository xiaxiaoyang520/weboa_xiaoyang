package com.hbpu.weboa.service.bl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hbpu.weboa.service.dao.PostPOMapper;
import com.hbpu.weboa.service.domain.Post;

/**
 * 岗位BL类
 * @author 晓阳
 * 2017年1月15日下午3:32:32
 */
@Service
@Repository
@Transactional
public class PostBL {
	
	@Autowired
	private PostPOMapper postPOMapper;

	public List<Post> findPostList(Post post){
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("postId", post.getPostId());
		paramMap.put("deptId", post.getDeptId());
		paramMap.put("postName", post.getPostName());
		return postPOMapper.findPostList(paramMap);
	}
	
	public Integer addPost(Post post){
		postPOMapper.addPost(post);
		return post.getPostId();
	}
	
	public void updatePost(Post post){
		postPOMapper.updatePost(post);
	}
	
	public void deletePost(Integer postId){
		postPOMapper.deletePost(postId);
	}
	
	public Post queryPostById(Integer postId){
		return postPOMapper.queryPostById(postId);
	}
}
