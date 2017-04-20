/**
 *授权管理
 */
MetronicApp.controller("authController",
	['$rootScope','$scope','$http','$location','$modal','pagedataLoading','ejpAlert',
	function($rootScope, $scope, $http, $location, $modal, pagedataLoading,ejpAlert) {
		$scope.$on('$viewContentLoaded', function() {
			Metronic.initAjax();

			// set default layout mode
			$rootScope.settings.layout.pageBodySolid = false;
			$rootScope.settings.layout.pageSidebarClosed = false;

			$scope.vo = {} ;
			

			var vm = $scope.vm = {};
			vm.pages = {
				itemsPerPage : 10,
				index :  1,
				totalResult : 0,
				totalPage : 0
			};
			vm.items = [] ;
			
			$scope.getUserList = function(){
				//显示加载中……
				pagedataLoading.loading();
				$http.post("user/findUserList/"+$scope.vm.pages.index+".action", $scope.vo).success(function(data){
					if(data.result==="success"){
						$scope.vm.items = data.list;
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

		});
}]);

