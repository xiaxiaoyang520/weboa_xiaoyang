/**
 * 获取已登录用户信息服务
 */
MetronicApp.service('UserInfoService', ["$cacheFactory",function($cacheFactory){
	
//	var userInfoCache = $cacheFactory('myData');
	
    var factory = {
    	userInfo:function(){
//    		var userInfo = userInfoCache.get("_user_info_");
    		if(null === userInfo || angular.isUndefined(userInfo)){
	    		// FIXED 采用jquery ajax 同步机制
	    		var responseText = $.ajax({
	    			  url: "common/queryLoginUserInfo",
	    			  async: false
	    		}).responseText;
	    		
	    		userInfo = angular.fromJson(responseText).data;	    		
    		}
    	}
    return factory;
//    	},
//    	/**更新缓存中的用户信息*/
//    	updateUserInfo : function(userInfo){
//    		if(userInfo){
//	    		userInfo.isOPAdmin = userInfo.userRole === 'OPAdmin' || userInfo.userRole === 'Developer';
//	    		userInfo.isCityAdmin = userInfo.userRole === 'CityAdmin' || userInfo.userRole === 'CityManager';
//	    		
//	    		userInfo.identity = {
//					userId : userInfo.userId,
//					userRole : userInfo.userRole,
//					userType : userInfo.userType,
//					userName : userInfo.userName,
//					orgId : userInfo.orgId
//	    		};
//    		}
//    		userInfoCache.put("_user_info_",userInfo);
//    		
//    		return userInfo;
//    	}
//    };
//    return factory;
}]);
/**
 * 获取已登录用户信息服务
 * @deprecated 
 * @see UserInfoService
 */
MetronicApp.service('getUserInfo',["UserInfoService",function(UserInfoService){
    return {
    	userInfo:UserInfoService.userInfo
    }
}]);

