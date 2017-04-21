package com.hbpu.weboa.web.pagemodel;

import java.io.StringWriter;

import com.hbpu.weboa.web.consts.WebConstants;

public class BaseResult {
	private String message;
	private String detailMessage;
	private String result;
	public BaseResult() {
	}

	public BaseResult(String result) {
		this.result = result;
	}

	public BaseResult(String message, String result) {
		this.message = message;
		this.result = result;
	}

	public BaseResult(Exception exception) {
		this.result = WebConstants.RESULT_FAILED;
		this.message = exception.getMessage();
		
		Throwable cause = exception.getCause();
		//循环3层获取到异常提示信息
		int i = 0;
		while (null != cause && i < 3) {
			this.message = cause.getMessage();
			cause = cause.getCause();
			i++;
		}

		StringWriter sw = new StringWriter();
		exception.printStackTrace(new java.io.PrintWriter(sw));
		this.detailMessage = sw.toString();
	}

	public BaseResult(String message, Exception exception) {
		this(exception);
		this.message = message;
	}

	/**
	 * 获取业务人员查看的信息
	 * 
	 * @return: String
	 */
	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	/**
	 * 获取开发人员查看的信息
	 * 
	 * @return: String
	 */
	public String getDetailMessage() {
		return detailMessage;
	}

	public void setDetailMessage(String detailMessage) {
		this.detailMessage = detailMessage;
	}

	/**
	 * 获取响应结果
	 * 
	 * @return: String
	 */
	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}

	public static BaseResult getSuccessResult() {
		return new BaseResult("success", WebConstants.RESULT_SUCCESS);
	}
}
