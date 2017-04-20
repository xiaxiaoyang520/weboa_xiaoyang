/**
*已登录用户的信息
*/
MetronicApp.controller('userMessageController',[
'$rootScope','$scope','$http','pagedataLoading','getUserInfo',		        
function($rootScope, $scope, $http, pagedataLoading,getUserInfo) {
	$scope.$on('$viewContentLoaded', function() {				
		Metronic.initAjax();
		// set default layout mode
		$rootScope.settings.layout.pageBodySolid = false;
		$rootScope.settings.layout.pageSidebarClosed = false;
		
		//返回提示信息
		$scope.userMessage={};
		$scope.identity = getUserInfo.userInfo();
		
		$scope.getUserMessage = function() {
			$http.post('user/queryUserById/'+$scope.identity.userId).success(
			function(data) {
				if(data.result=='success'){
					$scope.userMessage=data.data;												
				}
			});
		};
		// 获取APP配置
		$scope.getUserMessage();
	})
}]);