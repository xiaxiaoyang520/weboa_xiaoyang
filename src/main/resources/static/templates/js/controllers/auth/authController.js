/**
 *授权管理
 */
MetronicApp.controller("authController",
	['$rootScope','$scope','$http','$location','$modal','pagedataLoading','ejpAlert','getUserInfo',
	function($rootScope, $scope, $http, $location, $modal, pagedataLoading,ejpAlert,getUserInfo) {
		$scope.$on('$viewContentLoaded', function() {
			Metronic.initAjax();

			// set default layout mode
			$rootScope.settings.layout.pageBodySolid = false;
			$rootScope.settings.layout.pageSidebarClosed = false;

			$scope.vo = {} ;
			
			$scope.stateList = [{code:1,name:'启用'},{code:2,name:'停用'}];
			
			$scope.userPowerList = [{code:1,name:'员工'},{code:2,name:'部门主管'},{code:3,name:'管理员'}];

			var vm = $scope.vm = {};
			vm.pages = {
				itemsPerPage : 10,
				index :  1,
				totalResult : 0,
				totalPage : 0
			};
			vm.items = [] ;
			
			$scope.userInfo = getUserInfo.userInfo();
			
			$scope.getUserList = function(){
				//显示加载中……
				pagedataLoading.loading();
				$http.post("user/findUserList/"+$scope.vm.pages.index+".action", $scope.vo).success(function(data){
					if(data.result==="success"){
						$scope.vm.items = data.datas.dataList;
					}
					//隐藏加载中……
					pagedataLoading.unloading();
				})
			}
			$scope.getUserList();

			/* ***********************查询功能********************************** */
			//查询按钮
			$scope.searchClick = function() {
				$scope.getUserList();
			};
			//清空按钮
			$scope.resetClick = function() {
				$scope.vo = {};
			};
			
			//设为部门主管
			$scope.grantDept = function(userId){
				$http.post("user/grantDept/"+userId).success(function(data){
					if(data.result==="success"){
						ejpAlert.show("权限设置成功");
						$scope.getUserList();
					}
				})
			}
			
			$scope.grantEmploy = function(userId){
				$http.post("user/grantEmploy/"+userId).success(function(data){
					if(data.result==="success"){
						ejpAlert.show("权限设置成功");
						$scope.getUserList();
					}
				})
			}
			
			$scope.grantManager = function(userId){
				$http.post("user/grantManager/"+userId).success(function(data){
					if(data.result==="success"){
						ejpAlert.show("权限设置成功");
						$scope.getUserList();
					}
				})
			}

		});
}]);

