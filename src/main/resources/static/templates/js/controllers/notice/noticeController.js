/**
 * 通知和公告
 */
MetronicApp.controller("noticeController",
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
			$scope.getNoticeList = function(){
				//显示加载中……
				pagedataLoading.loading();
				$http.post("notice/findNoticeList/"+$scope.vm.pages.index,$scope.vo).success(function(data){
					if(data.result==="success"){
						$scope.vm.items = data.datas.dataList;
						$scope.vm.pages.totalResult = data.datas.pager.recordCount;
						$scope.vm.pages.totalPage = data.datas.pager.totalPage;
					}
					//隐藏加载中……
					pagedataLoading.unloading();
				})
			}
			$scope.getNoticeList();

		});
}]);

//发布通知和公告
MetronicApp.controller("addNoticeController",
	    ['$rootScope', '$scope', '$http', '$location', '$modal', 'pagedataLoading', 'ejpAlert','getUserInfo',
	        function ($rootScope, $scope, $http, $location, $modal, pagedataLoading, ejpAlert,getUserInfo) {
	            $scope.$on('$viewContentLoaded', function () {
	                Metronic.initAjax();

	                // set default layout mode
	                $rootScope.settings.layout.pageBodySolid = false;
	                $rootScope.settings.layout.pageSidebarClosed = false;
	                $scope.vo = {};
	                
	                $scope.noticeTypeList = [{code:1,name:'通知'},{code:2,name:'公告'}];
	                
	                //保存
	                var userInfo = $scope.userInfo = getUserInfo.userInfo();
	                $scope.noticeSubmit = function () {
	                	$scope.vo.createUser = userInfo.userId;
	                    $http.post("notice/addNotice", $scope.vo).success(function (data) {
	                        if (data.result === "success") {
	                            ejpAlert.show("发布成功！");
	                            $location.path("/notice_list.html");
	                        }
	                    })
	                }
	            });
	        }]);

//通知和公告详细信息
MetronicApp.controller("detailNoticeController",
		['$rootScope','$scope','$http','$location','$modal','pagedataLoading','ejpAlert','$stateParams',
		function($rootScope, $scope, $http, $location, $modal, pagedataLoading,ejpAlert,$stateParams) {
			$scope.$on('$viewContentLoaded', function() {
				Metronic.initAjax();

				// set default layout mode
				$rootScope.settings.layout.pageBodySolid = false;
				$rootScope.settings.layout.pageSidebarClosed = false;

			   $scope.id =	$stateParams.id;

				//获得详情
				$scope.noticeDetail = function(){
					// 正在加载
					Metronic.blockUI({
						message:'加载中，请稍后...'
					});
					$http.post("notice/queryNoticeById/"+$stateParams.id).success(function(data){
						if(data.result==="success"){
							$scope.notice = data.data ;
						}
						// 取消加载
						Metronic.unblockUI();
					})
				}
				$scope.noticeDetail() ;
				
				$scope.hehe=function(){
					ejpAlert.show("不知道请再看一遍！");
				}
				
			});
	}]);
