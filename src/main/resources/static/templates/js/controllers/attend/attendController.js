/**
 * 考勤
 */
MetronicApp.controller("attendController",
	['$rootScope','$scope','$http','$location','$modal','pagedataLoading','ejpAlert','getUserInfo',
	function($rootScope, $scope, $http, $location, $modal, pagedataLoading,ejpAlert,getUserInfo) {
		$scope.$on('$viewContentLoaded', function() {
			Metronic.initAjax();

			// set default layout mode
			$rootScope.settings.layout.pageBodySolid = false;
			$rootScope.settings.layout.pageSidebarClosed = false;
			
			$scope.userInfo = getUserInfo.userInfo();

			var vm = $scope.vm = {};
			vm.pages = {
				itemsPerPage : 5,
				index :  1,
				totalResult : 0,
				totalPage : 0
			};
			vm.items = [] ;
			$scope.vo = {};
			$scope.getAttendList = function(){
				//显示加载中……
				pagedataLoading.loading();
				$http.post("attend/findAttendList/"+$scope.vm.pages.index,$scope.vo).success(function(data){
					if(data.result==="success"){
						$scope.vm.items = data.datas.dataList;
						$scope.vm.pages.totalResult = data.datas.pager.recordCount;
						$scope.vm.pages.totalPage = data.datas.pager.totalPage;
					}
					//隐藏加载中……
					pagedataLoading.unloading();
				})
			}
			$scope.getAttendList();

		});
}]);





