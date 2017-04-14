/**
 *部门信息列表
 */
MetronicApp.controller("deptController",
	['$rootScope','$scope','$http','$location','$modal','pagedataLoading','ejpAlert',
	function($rootScope, $scope, $http, $location, $modal, pagedataLoading,ejpAlert) {
		$scope.$on('$viewContentLoaded', function() {
			Metronic.initAjax();

			// set default layout mode
			$rootScope.settings.layout.pageBodySolid = false;
			$rootScope.settings.layout.pageSidebarClosed = false;

			$scope.vo = {} ;
			

			var vm = $scope.vm = {};
			vm.items = [] ;
			
			$scope.getDeptList = function(){
				//显示加载中……
				pagedataLoading.loading();
				$http.post("dept/findDeptList", $scope.vo).success(function(data){
					if(data.result==="success"){
						$scope.vm.items = data.list;
					}
					//隐藏加载中……
					pagedataLoading.unloading();
				})
			}
			$scope.getDeptList();

			/* ***********************查询功能********************************** */
			//查询按钮
			$scope.searchClick = function() {
				$scope.getDeptList();
			};
			//清空按钮
			$scope.resetClick = function() {
				$scope.vo = {};
			};

		});
}]);

//新增部门 信息
MetronicApp.controller("addDeptController",
	    ['$rootScope', '$scope', '$http', '$location', '$modal', 'pagedataLoading', 'ejpAlert',
	        function ($rootScope, $scope, $http, $location, $modal, pagedataLoading, ejpAlert) {
	            $scope.$on('$viewContentLoaded', function () {
	                Metronic.initAjax();

	                // set default layout mode
	                $rootScope.settings.layout.pageBodySolid = false;
	                $rootScope.settings.layout.pageSidebarClosed = false;
	                
	                $scope.vo = {};
	                $http.post("common/findAllUserList").success(function (data) {
                        if (data.result === "success") {
                            $scope.userList = data.list;
                        }
	                });
	                //保存
	                $scope.deptSubmit = function () {
	                    $http.post("dept/addDept", $scope.vo).success(function (data) {
	                        if (data.result === "success") {
	                            ejpAlert.show("新增成功！");
	                            $location.path("#/dept_list.html");
	                        }
	                    })
	                }
	            });
	        }]);

//部门详细信息
MetronicApp.controller("detailDeptController",
		['$rootScope','$scope','$http','$location','$modal','pagedataLoading','ejpAlert','$stateParams',
		function($rootScope, $scope, $http, $location, $modal, pagedataLoading,ejpAlert,$stateParams) {
			$scope.$on('$viewContentLoaded', function() {
				Metronic.initAjax();

				// set default layout mode
				$rootScope.settings.layout.pageBodySolid = false;
				$rootScope.settings.layout.pageSidebarClosed = false;

			   $scope.id =	$stateParams.id;

				//获得部门详情
				$scope.deptDetail = function(){
					// 正在加载
					Metronic.blockUI({
						message:'加载中，请稍后...'
					});
					$http.post("dept/queryDeptById/"+$stateParams.id).success(function(data){
						if(data.result==="success"){
							$scope.vo = data.data ;
						}
						// 取消加载
						Metronic.unblockUI();
					})
				}
				$scope.deptDetail() ;
				
			});
	}]);
//编辑部门信息
MetronicApp.controller("editDeptController",
		['$rootScope','$scope','$http','$location','$modal','pagedataLoading','ejpAlert','$stateParams',
		function($rootScope, $scope, $http, $location, $modal, pagedataLoading,ejpAlert,$stateParams) {
			$scope.$on('$viewContentLoaded', function() {
				Metronic.initAjax();

				// set default layout mode
				$rootScope.settings.layout.pageBodySolid = false;
				$rootScope.settings.layout.pageSidebarClosed = false;

			   $scope.id =	$stateParams.id;

               $scope.vo = {} ;

				//获得部门详情
				$scope.getDeptDetail = function(){
					// 正在加载
					Metronic.blockUI({
						message:'加载中，请稍后...'
					});
					$http.post("dept/queryDeptById/"+$stateParams.id).success(function(data){
						if(data.result==="success"){
							$scope.vo = data.data ;
						}
						// 取消加载
						Metronic.unblockUI();
					})
				}
				$scope.getDeptDetail();
				
				//跟新部门信息
				$scope.deptSubmit = function(){
					$http.post("dept/updateDept", $scope.vo).success(function (data) {
                        if (data.result === "success") {
                            ejpAlert.show("修改成功！");
                            $location.path("#/dept_list.html");
                        }
                    })
				}
				
			});
	}]);
