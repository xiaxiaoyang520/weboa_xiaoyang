package com.hbpu.weboa.service.service;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hbpu.weboa.service.bl.UserBL;
import com.hbpu.weboa.service.domain.ChangPwd;
import com.hbpu.weboa.service.domain.User;
import com.hbpu.weboa.service.utils.AssertUtils;
import com.hbpu.weboa.service.utils.PageList;
import com.hbpu.weboa.service.utils.PagerCondition;
import com.hbpu.weboa.service.utils.ValidateHelp;

/**
 * 用户服务接口实现类
 * @author 晓阳
 * 2017年1月14日下午10:57:05
 */
@Service
public class UserService{
	
	@Autowired
	private UserBL userBL;

	public PageList<User> findUserList(User user, PagerCondition pagerCondition) {
		AssertUtils.notNull(user,"用户对象为空");
		return userBL.findUserList(user, pagerCondition);
	}
	
	public List<User> findAllUserList(){
		return userBL.findAllUserList();
	}

	public User userLogin(String userTel, String userPassword) {
		AssertUtils.notNull(userTel, "输入电话为空");
		AssertUtils.notNull(userPassword, "输入密码为空！");
		return userBL.userLogin(userTel, userPassword);
	}

	public User getUserById(Integer userId) {
		return userBL.getUserById(userId);
	}

	public Integer addUser(User user) {
		AssertUtils.isTrue(ValidateHelp.isMobileNo(user.getUserTel()), "传入的手机号格式不正确！");
		return userBL.addUser(user);
	}

	public void updateUser(User user) {
		AssertUtils.notNull(user, "修改用户模型不能为空");
		AssertUtils.notNull(user.getUserId(), "用户id不能为空");
		userBL.updateUser(user);
	}

	public void deleteUser(Integer userId) {
		userBL.deleteUser(userId);
	}

	public boolean checkUserTel(String userTel) {
		return userBL.checkUserTel(userTel);
	}
	
	public User queryLoginUserInfo(HttpServletRequest request){
		HttpSession session = request.getSession();
		User user = (User)session.getAttribute("user");
		if (user != null) {
			return user;
		}else {
			return null;
		}
	}
	
	public User queryUserByName(String userName) {
		return userBL.queryUserByName(userName);
	}
	
	public void changePwd(ChangPwd changPwd){
		AssertUtils.notNull(changPwd, "修改密码模型为空");
		AssertUtils.notNull(changPwd.getUserId(), "修改密码用户id为空");
		AssertUtils.hasText(changPwd.getOldPwd(), "修改密码旧密码为空");
		AssertUtils.hasText(changPwd.getNewPwd(), "修改密码新密码为空");
		userBL.changePwd(changPwd);
	}
	
}
