/**   
 * Copyright © 2017 北京易酒批电子商务有限公司. All rights reserved.
 */
package com.hbpu.weboa.service.utils;

import java.util.Calendar;
import java.util.Date;

/**  
 * 日期帮助类
 * @author xiayang
 * @date 2017年2月11日 下午4:49:47  
 */
public class DateHelper {
	
	/** 
	 * 将一个日期默认拼接00:00:00
	 * @param date
	 * @return
	 * @return Date
	 */
	public static Date formatBeginTime(Date date) {

		if (date == null) {
			return null;
		}
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		calendar.set(Calendar.HOUR_OF_DAY, 0);
		calendar.set(Calendar.MINUTE, 0);
		calendar.set(Calendar.SECOND, 0);
		return calendar.getTime();
	}
	
	/** 
	 * 将一个日期默认拼接23:59:59
	 * @param date
	 * @return
	 * @return Date
	 */
	public static Date formatEndTime(Date date) {

		if (date == null) {
			return null;
		}
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		calendar.set(Calendar.HOUR_OF_DAY, 23);
		calendar.set(Calendar.MINUTE, 59);
		calendar.set(Calendar.SECOND, 59);
		return calendar.getTime();
	}
}
