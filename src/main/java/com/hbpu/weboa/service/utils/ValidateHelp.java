/**   
 * Copyright © 2017 北京易酒批电子商务有限公司. All rights reserved.
 */
package com.hbpu.weboa.service.utils;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**  
 * 校验工具类
 * @author xiayang
 * @date 2017年3月19日 下午2:33:12  
 */
public class ValidateHelp {
	/**
	 * 
	 * @Description: 营业执照验证
	 * @param @param
	 *            businessLicense
	 * @param @return
	 * @return boolean
	 * @throws @author
	 *             penglei
	 * @date 2015年12月15日
	 */
	public static boolean checkBusinessLicense(String businessLicense) {
		String check = "\\d{15}";
		Pattern regex = Pattern.compile(check);
		Matcher matcher = regex.matcher(businessLicense);
		return matcher.matches();
	}

	/**
	 * 
	 * @Description: 正则表达式验证邮箱唯一
	 * @param @param
	 *            email
	 * @param @return
	 * @return boolean
	 * @throws @author
	 *             penglei
	 * @date 2015年11月26日
	 */
	public static boolean checkEmail(String email) {
		String check = "^([a-z0-9A-Z]+[-|_|\\.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-zA-Z]{2,}$";
		Pattern regex = Pattern.compile(check);
		Matcher matcher = regex.matcher(email);
		return matcher.matches();
	}

	/**
	 * 
	 * @Description: 身份证验证
	 * @param @param
	 *            businessLicense
	 * @param @return
	 * @return boolean
	 * @throws @author
	 *             penglei
	 * @date 2015年12月15日
	 */
	public static boolean checkIDCard(String iDCard) {
		String check = "^(\\d{15}$|^\\\\d{18}$|^\\d{17}(\\d|X|x))$";
		Pattern regex = Pattern.compile(check);
		Matcher matcher = regex.matcher(iDCard);
		return matcher.matches();
	}

	/**
	 * @Description: 验证是否是非空字段,如果是空返回true,否则返回false
	 * @param @param
	 *            str
	 * @param @return
	 * @return Boolean
	 * @throws @author
	 *             penglei
	 * @date 2015年10月21日
	 */
	public static Boolean isEmptyorNull(String str) {
		if (null == str || "".equals(str.trim())) {
			return true;
		}
		return false;
	}

	/**
	 * @Description: 验证是否是正确手机号
	 * @param @param
	 *            mobieNo
	 * @param @return
	 * @return Boolean
	 * @throws @author
	 *             penglei
	 * @date 2015年10月21日
	 */
	public static Boolean isMobileNo(String mobieNo) {
		// 手机号验证
		// 移动：134、135、136、137、138、139、150、151、157(TD)、158、159、187、188
		// 联通：130、131、132、152、155、156、185、186
		// 电信：133、153、180、189、（1349卫通）
		Pattern p = Pattern.compile("^((13[0-9])|(147)|(15[0-9])|(17[0-9])|(18[0-9]))\\d{8}$");
		Matcher m = p.matcher(mobieNo);
		return m.matches();
	}

	private ValidateHelp() {
	}
}
