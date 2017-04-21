package com.hbpu.weboa.service.bl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.hbpu.weboa.service.dao.UserPOMapper;
import com.hbpu.weboa.service.domain.ChangPwd;
import com.hbpu.weboa.service.domain.User;
import com.hbpu.weboa.service.utils.AssertUtils;
import com.hbpu.weboa.service.utils.PageList;
import com.hbpu.weboa.service.utils.Pager;
import com.hbpu.weboa.service.utils.PagerCondition;
import com.hbpu.weboa.service.utils.ValidateHelp;

/**
 * 用户 BL类
 * 
 * @author 晓阳 2017年1月14日下午9:03:53
 */
@Service
@Transactional
@Repository
public class UserBL {

	@Autowired
	private UserPOMapper userPOMapper;

	/**
	 * 通过条件分页查询用户列表信息
	 * 
	 * @param userDTO
	 * @return
	 */
	public PageList<User> findUserList(User user, PagerCondition pagerCondition) {
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("userName", user.getUserName());
		paramMap.put("postId", user.getPostId());
		paramMap.put("userSex", user.getUserSex());
		paramMap.put("userTel", user.getUserTel());
		paramMap.put("state", user.getState());
		paramMap.put("userPower", user.getUserPower());
		paramMap.put("offset", pagerCondition.startRow());
		paramMap.put("limitnum", pagerCondition.getPageSize());
		List<User> users = userPOMapper.findUserList(paramMap);
		PageList<User> pageList = new PageList<User>();
		pageList.setDataList(users);
		int recordCount = userPOMapper.getUserListNum(paramMap);
		Pager myPager = new Pager(pagerCondition.getCurrentPage(), pagerCondition.getPageSize(), recordCount);
		pageList.setPager(myPager);
		return pageList;
	}
	
	public List<User> findAllUserList(){
		return userPOMapper.findAllUserList();
	}

	/**
	 * 用户登录
	 * 
	 * @param userDTO
	 * @return
	 */
	public User userLogin(String userTel, String userPassword) {
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("userTel", userTel);
		paramMap.put("userPassword", userPassword);
		return userPOMapper.userLogin(paramMap);
	}

	/**
	 * 通过主键查询用户详细信息
	 * 
	 * @param userId
	 * @return
	 */
	public User getUserById(Integer userId) {
		return userPOMapper.selectByKey(userId);
	}

	/**
	 * 新增用户信息
	 * 
	 * @param userDTO
	 * @return
	 */
	public Integer addUser(User user) {
		String userTel = user.getUserTel();
		String userPassword = userTel.substring(userTel.length()-6, userTel.length());
		user.setUserPassword(userPassword);
		user.setUserPower(1);
		user.setState(1);
		String idCardNO = user.getIdCardNO();
		if (idCardNO != null) {
			AssertUtils.isTrue(ValidateHelp.checkIDCard(idCardNO), "身份证号不合法");
		}
		String userEmail = user.getUserEmail();
		if (userEmail != null) {
			AssertUtils.isTrue(ValidateHelp.checkEmail(userEmail), "邮箱输入不合法");
		}
		userPOMapper.addUser(user);
		return user.getUserId();
	}

	/**
	 * 修改用户信息
	 * 
	 * @param userDTO
	 * @return
	 */
	public void updateUser(User user) {
		String idCardNO = user.getIdCardNO();
		if (!StringUtils.isEmpty(idCardNO)) {
			AssertUtils.isTrue(ValidateHelp.checkIDCard(idCardNO), "身份证号不合法");
		}
		String userEmail = user.getUserEmail();
		if (!StringUtils.isEmpty(idCardNO)) {
			AssertUtils.isTrue(ValidateHelp.checkEmail(userEmail), "邮箱输入不合法");
		}
		userPOMapper.updateUser(user);
	}

	/**
	 * 删除用户信息
	 * 
	 * @param userId
	 * @return
	 */
	public void deleteUser(Integer userId) {
		userPOMapper.deleteUser(userId);
	}

	/**
	 * 检查用户手机号是否重复
	 * @param userTel
	 * @return
	 */
	public boolean checkUserTel(String userTel) {
		boolean result = false;
		Integer userId = userPOMapper.checkUserTel(userTel);
		if (userId == null) {
			result = true;
		}
		return result;
	}
	
	public User queryUserByName(String userName){
		return userPOMapper.queryUserByName(userName);
	}
	
	public void changePwd(ChangPwd changPwd){
		String oldPwd = changPwd.getOldPwd();
		Integer userId = changPwd.getUserId();
		User user = userPOMapper.checkPwd(userId, oldPwd);
		AssertUtils.notNull(user, "旧密码验证有误，无法修改");
		User updateUser = new User();
		updateUser.setUserPassword(changPwd.getNewPwd());
		updateUser.setUserId(userId);
		userPOMapper.updateUser(updateUser);
	}
}
