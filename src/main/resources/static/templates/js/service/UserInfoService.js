/**
 * 获取已登录用户信息服务
 */
MetronicApp.service('UserInfoService', ["$cacheFactory",function($cacheFactory){
	
    var factory = {
    	userInfo:function(){
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

