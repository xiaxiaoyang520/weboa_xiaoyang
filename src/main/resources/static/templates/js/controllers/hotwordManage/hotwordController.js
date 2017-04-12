/**
 * 搜索热词列表
 */
MetronicApp.controller("hotwordController",
	['$rootScope','$scope','$http','pagedataLoading','ejpAlert','getUserInfo',
	function($rootScope, $scope, $http, pagedataLoading,ejpAlert,getUserInfo) {
		$scope.$on('$viewContentLoaded', function() {
			Metronic.initAjax();

			// set default layout mode
			$rootScope.settings.layout.pageBodySolid = false;
			$rootScope.settings.layout.pageSidebarClosed = false;

			$scope.vo = {} ;
			var vm = $scope.vm = {};
			vm.pages = {
				itemsPerPage : 20,
				index :  1,
				totalResult : 0,
				totalPage : 0
			};
			vm.items = [] ;
			$scope.index = $scope.vm.pages.index;
			$scope.searchWord = $scope.vo.searchWord;
			$scope.beginDate = $scope.vo.beginDate;
			$scope.endDate = $scope.vo.endDate;
			$scope.province = $scope.vo.province;
			$scope.city = $scope.vo.city;
			$scope.county = $scope.vo.county;

			//获取用户角色
			$scope.identity = getUserInfo.userInfo();
			console.info($scope.identity);

			//初始化省市区三级联动
			initCitySelector('city-select', 'common/getProvinceCityArea.action');

			$scope.getHotWordList = function(){
				//显示加载中……
				pagedataLoading.loading();
				$http.post("hotword/findHotWordList/"+vm.pages.index,$scope.vo).success(function(data){
					if(data.result==="success"){
						$scope.vm.items = data.datas.dataList ;
						$scope.vm.pages.totalResult = data.datas.pager.recordCount;
						$scope.vm.pages.totalPage = data.datas.pager.totalPage;
					}
					//隐藏加载中……
					pagedataLoading.unloading();
				})
			}
			$scope.getHotWordList();

			/* ***********************查询功能********************************** */
			//查询按钮
			$scope.searchClick = function() {
				if($scope.vo){
					if ( !$scope.vo.city && $scope.vo.province) {
						ejpAlert.show("活动城市必须选择省和市！");
						return ;
					}
				}


				$scope.vm.pages = {
					itemsPerPage : 20,
					index : 1,
					totalResult : 0,
					totalPage : 0
				};
				$scope.getHotWordList();
			};
			//清空按钮
			$scope.resetClick = function() {
				$scope.vo = {};
			};
		});
}]);
