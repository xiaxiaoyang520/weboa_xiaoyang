/*
 * Copyright © 2016 北京易酒批电子商务有限公司. All rights reserved.
 */

package com.hbpu.weboa.web.privilege;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.hbpu.weboa.api.privilege.PrivilegeIndexVO;
import com.hbpu.weboa.service.utils.PageList;
import com.hbpu.weboa.web.pagemodel.BaseResult;
import com.hbpu.weboa.web.pagemodel.PagesResult;


/*********************************************
 * 用户权限控制类 ClassName: PrivilegeController <br>
 * @author xiayang
 * @Date 2017年2月25日
 *********************************************/
@RestController
public class PrivilegeController {

    @RequestMapping(value = "/templates/findUserPrivilegeList", method = RequestMethod.POST)
    public BaseResult findPrivilegeIndexList() {
        PageList<PrivilegeIndexVO> poList = new PageList<PrivilegeIndexVO>();
        List<PrivilegeIndexVO> dataList = new ArrayList<PrivilegeIndexVO>();
        
        PrivilegeIndexVO indexVO = new PrivilegeIndexVO();
        indexVO.setIcon("icon-home");
        indexVO.setPrivilegeCode("index");
        indexVO.setPrivilegeName("首页");
        indexVO.setPrivilegeType("Menu");
        indexVO.setSequence(null);
        indexVO.setSonIndex(null);
        indexVO.setTitle("首页");
        indexVO.setUrl("#/dashboard.html");
        
        PrivilegeIndexVO userVO = new PrivilegeIndexVO();
        userVO.setIcon("icon-user");
        userVO.setPrivilegeCode("user");
        userVO.setPrivilegeName("用户管理");
        userVO.setPrivilegeType("Menu");
        userVO.setSequence(null);
        userVO.setSonIndex(null);
        userVO.setTitle("用户管理");
        userVO.setUrl("#/user_list.html");

        PrivilegeIndexVO postVO = new PrivilegeIndexVO();
        postVO.setIcon("fa fa-inbox");
        postVO.setPrivilegeCode("post");
        postVO.setPrivilegeName("职位管理");
        postVO.setPrivilegeType("Menu");
        postVO.setSequence(null);
        userVO.setSonIndex(null);
        postVO.setTitle("职位管理");
        postVO.setUrl("#/post_list.html");

        PrivilegeIndexVO deptVO = new PrivilegeIndexVO();
        deptVO.setIcon("fa fa-users");
        deptVO.setPrivilegeCode("dept");
        deptVO.setPrivilegeName("部门管理");
        deptVO.setPrivilegeType("Menu");
        deptVO.setSequence(null);
        deptVO.setSonIndex(null);
        deptVO.setTitle("部门管理");
        deptVO.setUrl("#/dept_list.html");

        PrivilegeIndexVO speechVO= new PrivilegeIndexVO();
        speechVO.setIcon("fa fa-file-o");
        speechVO.setPrivilegeCode("speech");
        speechVO.setPrivilegeName("言论管理");
        speechVO.setPrivilegeType("Menu");
        speechVO.setSequence(null);
        speechVO.setSonIndex(null);
        speechVO.setTitle("言论管理");
        speechVO.setUrl("#/speech_list.html");

        
        PrivilegeIndexVO permitVO = new PrivilegeIndexVO();
        permitVO.setIcon("fa fa-edit");
        permitVO.setPrivilegeCode("permit");
        permitVO.setPrivilegeName("审核管理");
        permitVO.setPrivilegeType("Menu");
        permitVO.setSequence(null);
        permitVO.setSonIndex(null);
        permitVO.setTitle("审核管理");
        permitVO.setUrl("#/permit_list.html");
        
        PrivilegeIndexVO attendVO = new PrivilegeIndexVO();
        attendVO.setIcon("icon-bell");
        attendVO.setPrivilegeCode("attend");
        attendVO.setPrivilegeName("考勤管理");
        attendVO.setPrivilegeType("Menu");
        attendVO.setSequence(null);
        attendVO.setSonIndex(null);
        attendVO.setTitle("考勤管理");
        attendVO.setUrl("#/attend_list.html");
        
        PrivilegeIndexVO privilegeVO = new PrivilegeIndexVO();
        privilegeVO.setIcon("fa fa-ioxhost");
        privilegeVO.setPrivilegeCode("privilege");
        privilegeVO.setPrivilegeName("授权管理");
        privilegeVO.setPrivilegeType("Menu");
        privilegeVO.setSequence(null);
        privilegeVO.setSonIndex(null);
        privilegeVO.setTitle("授权管理");
        privilegeVO.setUrl("#/attend_list.html");
        
        PrivilegeIndexVO noticeVO = new PrivilegeIndexVO();
        noticeVO.setIcon("fa fa-bullhorn");
        noticeVO.setPrivilegeCode("notice");
        noticeVO.setPrivilegeName("通知和公告");
        noticeVO.setPrivilegeType("Menu");
        noticeVO.setSequence(null);
        noticeVO.setSonIndex(null);
        noticeVO.setTitle("通知和公告");
        noticeVO.setUrl("#/notice_list.html");
        
        dataList.add(indexVO);
        dataList.add(userVO);
        dataList.add(postVO);
        dataList.add(deptVO);
        dataList.add(attendVO);
        dataList.add(permitVO);
        dataList.add(speechVO);
        dataList.add(privilegeVO);
        dataList.add(noticeVO);
        poList.setDataList(dataList);

        return new PagesResult<PrivilegeIndexVO>(poList);
    }

}
