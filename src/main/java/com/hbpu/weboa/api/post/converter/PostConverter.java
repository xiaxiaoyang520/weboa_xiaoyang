/**   
 * Copyright © 2017 北京易酒批电子商务有限公司. All rights reserved.
 */
package com.hbpu.weboa.api.post.converter;

import java.util.ArrayList;
import java.util.List;

import com.hbpu.weboa.api.post.model.PostVO;
import com.hbpu.weboa.service.domain.Post;

/**  
 * 职位模型转换
 * @author xiayang
 * @date 2017年3月19日 下午5:02:17  
 */
public class PostConverter {
	
	public static PostVO convertToVO(Post post){
		PostVO postVO = new PostVO();
		postVO.setPostId(post.getPostId());
		postVO.setPostName(post.getPostName());
		postVO.setPostRemark(post.getPostRemark());
		postVO.setDeptId(post.getDeptId());
		return postVO;
	}
	
	public static List<PostVO> convertToVOList(List<Post> posts){
		List<PostVO> vos = new ArrayList<PostVO>();
		for (Post post : posts) {
			vos.add(convertToVO(post));
		}
		return vos;
	}
}
