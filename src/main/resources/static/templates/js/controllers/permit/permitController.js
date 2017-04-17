/**
 * 审核
 */
MetronicApp.controller("permitController",
	['$rootScope','$scope','$http','$location','$modal','pagedataLoading','ejpAlert','getUserInfo',
	function($rootScope, $scope, $http, $location, $modal, pagedataLoading,ejpAlert,getUserInfo) {
		$scope.$on('$viewContentLoaded', function() {
			Metronic.initAjax();

			// set default layout mode
			$rootScope.settings.layout.pageBodySolid = false;
			$rootScope.settings.layout.pageSidebarClosed = false;
			
			$scope.userInfo = getUserInfo.userInfo();
			
			$scope.permitStateList = [{code:1,name:'待审核'},{code:2,name:'已通过'},{code:3,name:'未通过'}];

			var vm = $scope.vm = {};
			vm.pages = {
				itemsPerPage : 5,
				index :  1,
				totalResult : 0,
				totalPage : 0
			};
			vm.items = [] ;
			$scope.vo = {};
			$scope.getPermitList = function(){
				//显示加载中……
				pagedataLoading.loading();
				$http.post("permit/findPermitList/"+$scope.vm.pages.index,$scope.vo).success(function(data){
					if(data.result==="success"){
						$scope.vm.items = data.datas.dataList;
						$scope.vm.pages.totalResult = data.datas.pager.recordCount;
						$scope.vm.pages.totalPage = data.datas.pager.totalPage;
					}
					//隐藏加载中……
					pagedataLoading.unloading();
				})
			}
			$scope.getPermitList();
			
			/* ***********************查询功能********************************** */
			//查询按钮
			$scope.searchClick = function() {

				$scope.vm.pages = {
					itemsPerPage : 5,
					index : 1,
					totalResult : 0,
					totalPage : 0
				};
				$scope.getPermitList();
			};
			//清空按钮
			$scope.resetClick = function() {
				$scope.vo = {};
			};
			
			$scope.check=function(item){
				var modalInstance = $modal.open({
					templateUrl : 'views/modals/checkPermit.html',
					controller : 'CheckPermitInstanceCtrl',
					size : 'lg',
					resolve : {
						requestResults : function() {
							return {
								permitId:item.permitId,
								permitTitle:item.permitTitle,
								permitContext:item.permitContext
							}
						}
					}
				});
				// 成功的回调方法 （可带参数）
				modalInstance.result.then(function() {
					 $scope.getPermitList();
				}, function() {
					//
				});
			}

		});
}]).controller("CheckPermitInstanceCtrl", ['$modalInstance', '$rootScope', '$scope','pagedataLoading',
   		'settings', '$http', '$location','$stateParams','$log','dataHelper','getUserInfo','ejpAlert','requestResults',
 		function($modalInstance,$rootScope, $scope,pagedataLoading,settings, $http, $location,
 				$stateParams,$log,dataHelper,getUserInfo,ejpAlert,requestResults) {

 				Metronic.initAjax();

 				$scope.vo ={};
 				$scope.vo.permitId = requestResults.permitId;
 				$scope.vo.permitTitle = requestResults.permitTitle;
 				$scope.vo.permitContext = requestResults.permitContext;
 				$scope.vo.handleUser = getUserInfo.userInfo().userId;
				
				//修改后提交
				$scope.approve = function() {
							$http.post('permit/approve', $scope.vo).success(function(data){
    			        		if(data.result==='success'){
    			        			ejpAlert.show("审核已通过!");
    								$modalInstance.close();
    			        		}
    			        	});
				};
				
				$scope.disApprove = function() {
					$http.post('permit/disApprove', $scope.vo).success(function(data){
		        		if(data.result==='success'){
		        			ejpAlert.show("审核已拒绝!");
							$modalInstance.close();
		        		}
		        	});
		};
 			
				// 取消按钮
				$scope.cancel = function() {
					// 跳转到列表页面
					$modalInstance.dismiss('cancel');
				};
                                         				
}]);

//提交申请
MetronicApp.controller("addPermitController",
	    ['$rootScope', '$scope', '$http', '$location', '$modal', 'pagedataLoading', 'ejpAlert','getUserInfo',
	        function ($rootScope, $scope, $http, $location, $modal, pagedataLoading, ejpAlert,getUserInfo) {
	            $scope.$on('$viewContentLoaded', function () {
	                Metronic.initAjax();

	                // set default layout mode
	                $rootScope.settings.layout.pageBodySolid = false;
	                $rootScope.settings.layout.pageSidebarClosed = false;
	                $scope.vo = {};
	                
	                
	                //保存
	                var userInfo = $scope.userInfo = getUserInfo.userInfo();
	                $scope.permitSubmit = function () {
	                	$scope.vo.submitUser = userInfo.userId;
	                    $http.post("permit/addPermit", $scope.vo).success(function (data) {
	                        if (data.result === "success") {
	                            ejpAlert.show("提交成功,请耐心等待后台的审核！");
	                            $location.path("/permit_list.html");
	                        }
	                    })
	                }
	            });
	        }]);

//审核详细信息
MetronicApp.controller("detailPermitController",
		['$rootScope','$scope','$http','$location','$modal','pagedataLoading','ejpAlert','$stateParams',
		function($rootScope, $scope, $http, $location, $modal, pagedataLoading,ejpAlert,$stateParams) {
			$scope.$on('$viewContentLoaded', function() {
				Metronic.initAjax();

				// set default layout mode
				$rootScope.settings.layout.pageBodySolid = false;
				$rootScope.settings.layout.pageSidebarClosed = false;

			   $scope.id =	$stateParams.id;

				//获得审核详情
				$scope.permitDetail = function(){
					// 正在加载
					Metronic.blockUI({
						message:'加载中，请稍后...'
					});
					$http.post("permit/queryPermitById/"+$stateParams.id).success(function(data){
						if(data.result==="success"){
							$scope.permit = data.data ;
						}
						// 取消加载
						Metronic.unblockUI();
					})
				}
				$scope.permitDetail() ;
				
			});
	}]);


