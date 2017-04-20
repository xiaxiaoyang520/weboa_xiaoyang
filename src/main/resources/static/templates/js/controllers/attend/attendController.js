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
			
			/* ***********************查询功能********************************** */
			//查询按钮
			$scope.searchClick = function() {

				$scope.vm.pages = {
					itemsPerPage : 10,
					index : 1,
					totalResult : 0,
					totalPage : 0
				};
				$scope.getAttendList();
			};
			//清空按钮
			$scope.resetClick = function() {
				$scope.vo = {};
			};
			
			$scope.addRemark=function(attendId){
				var modalInstance = $modal.open({
					templateUrl : 'views/modals/addAttendRemark.html',
					controller : 'ModalAddAttendRemarkCtrl',
					size : 'lg',
					resolve : {
						requestResults : function() {
							return {
								attendId:attendId,
							}
						}
					}
				});
				// 成功的回调方法 （可带参数）
				modalInstance.result.then(function() {
					 $scope.getAttendList();
				}, function() {
					//
				});
			}

		});
}]).controller("ModalAddAttendRemarkCtrl", ['$modalInstance', '$rootScope', '$scope','pagedataLoading',
           'settings', '$http', '$location','$stateParams','$log','dataHelper','getUserInfo','ejpAlert','requestResults',
           function($modalInstance,$rootScope, $scope,pagedataLoading,settings, $http, $location,
           $stateParams,$log,dataHelper,getUserInfo,ejpAlert,requestResults) {
           Metronic.initAjax();
                            	
           $scope.vo = {};
           $scope.vo.attendId = requestResults.attendId;
            $scope.addRemark = function() {
                  $http.post('attend/addAttendRemark', $scope.vo).success(function(data){
                    if(data.result==='success'){
                       ejpAlert.show("备注已添加!");
                       $modalInstance.close();
                    	}
                   });	                                                				
                  };
                  $scope.cancel = function() {
                     $modalInstance.dismiss('cancel');
                  };
}]);





