/*
 * Copyright © 2016 北京易酒批电子商务有限公司. All rights reserved.
 */

package com.hbpu.weboa.web.interceptor;

import java.lang.annotation.Documented;
import java.lang.annotation.Inherited;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

/**
 * 权限标识
 * 
 * @author ZhouXin
 *
 */
@Documented
@Inherited
@Retention(RetentionPolicy.RUNTIME)
public @interface AuthVerify
{
	/**
	 * 权限标识
	 * 
	 * @return
	 */
	String[] privilegeCode();
}
