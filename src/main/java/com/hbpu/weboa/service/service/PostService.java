package com.hbpu.weboa.service.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hbpu.weboa.service.bl.PostBL;
import com.hbpu.weboa.service.domain.Post;
import com.hbpu.weboa.service.utils.AssertUtils;

/**
 * 岗位服务接口实现类
 * @author 晓阳
 * 2017年1月15日下午3:27:31
 */
@Service
public class PostService{
	
	@Autowired
	private PostBL postBL;

	public List<Post> findPostList(Post post) {
		AssertUtils.notNull(post, "岗位查询对象为空");
		return postBL.findPostList(post);
	}

	public Integer addPost(Post post) {
		AssertUtils.notNull(post, "岗位添加对象为空");
		return postBL.addPost(post);
	}

	public void updatePost(Post post) {
		AssertUtils.notNull(post, "岗位修改对象为空");
		postBL.updatePost(post);
	}

	public void deletePost(Integer postId) {
		AssertUtils.notNull(postId, "岗位id为空");
		postBL.deletePost(postId);
	}
	
	public Post queryPostById(Integer postId){
		AssertUtils.notNull(postId, "岗位id为空");
		return postBL.queryPostById(postId);
	}

}
