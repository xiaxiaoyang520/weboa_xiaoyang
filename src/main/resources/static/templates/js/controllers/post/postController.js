/**
 *职位信息列表
 */
MetronicApp.controller("postController",
	['$rootScope','$scope','$http','$location','$modal','pagedataLoading','ejpAlert','getUserInfo',
	function($rootScope, $scope, $http, $location, $modal, pagedataLoading,ejpAlert,getUserInfo) {
		$scope.$on('$viewContentLoaded', function() {
			Metronic.initAjax();

			// set default layout mode
			$rootScope.settings.layout.pageBodySolid = false;
			$rootScope.settings.layout.pageSidebarClosed = false;

			$scope.vo = {} ;
			

			var vm = $scope.vm = {};
			vm.items = [] ;
			
			$scope.userInfo = getUserInfo.userInfo();
			
			$scope.getPostList = function(){
				//显示加载中……
				pagedataLoading.loading();
				$http.post("post/findPostList", $scope.vo).success(function(data){
					if(data.result==="success"){
						$scope.vm.items = data.list;
					}
					//隐藏加载中……
					pagedataLoading.unloading();
				})
			}
			$scope.getPostList();

			/* ***********************查询功能********************************** */
			//查询按钮
			$scope.searchClick = function() {
				$scope.getPostList();
			};
			//清空按钮
			$scope.resetClick = function() {
				$scope.vo = {};
			};

		});
}]);

//新增职位 信息
MetronicApp.controller("addPostController",
	    ['$rootScope', '$scope', '$http', '$location', '$modal', 'pagedataLoading', 'ejpAlert',
	        function ($rootScope, $scope, $http, $location, $modal, pagedataLoading, ejpAlert) {
	            $scope.$on('$viewContentLoaded', function () {
	                Metronic.initAjax();

	                // set default layout mode
	                $rootScope.settings.layout.pageBodySolid = false;
	                $rootScope.settings.layout.pageSidebarClosed = false;
	                
	                $scope.vo = {};
	                
	                $scope.getDeptList = function(){
	    				$http.post("common/findDeptList").success(function(data){
	    					if(data.result === "success"){
	    						$scope.deptList = data.list;
	    					}
	    				})
	    			}
	    			$scope.getDeptList();

	                //保存
	                $scope.postSubmit = function () {
	                    $http.post("post/addPost", $scope.vo).success(function (data) {
	                        if (data.result === "success") {
	                            ejpAlert.show("新增成功！");
	                            $location.path("#/post_list.html");
	                        }
	                    })
	                }
	            });
	        }]);

//用户详细信息
MetronicApp.controller("detailPostController",
		['$rootScope','$scope','$http','$location','$modal','pagedataLoading','ejpAlert','$stateParams','getUserInfo',
		function($rootScope, $scope, $http, $location, $modal, pagedataLoading,ejpAlert,$stateParams,getUserInfo) {
			$scope.$on('$viewContentLoaded', function() {
				Metronic.initAjax();

				// set default layout mode
				$rootScope.settings.layout.pageBodySolid = false;
				$rootScope.settings.layout.pageSidebarClosed = false;

			   $scope.id =	$stateParams.id;
			   
			   $scope.userInfo = getUserInfo.userInfo();

				//获得职位详情
				$scope.postDetail = function(){
					// 正在加载
					Metronic.blockUI({
						message:'加载中，请稍后...'
					});
					$http.post("post/queryPostById/"+$stateParams.id).success(function(data){
						if(data.result==="success"){
							$scope.postRO = data.data ;
						}
						// 取消加载
						Metronic.unblockUI();
					})
				}
				$scope.postDetail() ;
				
			});
	}]);

MetronicApp.controller("editPostController",
		['$rootScope','$scope','$http','$location','$modal','pagedataLoading','ejpAlert','$stateParams',
		function($rootScope, $scope, $http, $location, $modal, pagedataLoading,ejpAlert,$stateParams) {
			$scope.$on('$viewContentLoaded', function() {
				Metronic.initAjax();

				// set default layout mode
				$rootScope.settings.layout.pageBodySolid = false;
				$rootScope.settings.layout.pageSidebarClosed = false;

			   $scope.id =	$stateParams.id;

               $scope.vo = {} ;

				//获得用户详情
				$scope.getPostDetail = function(){
					// 正在加载
					Metronic.blockUI({
						message:'加载中，请稍后...'
					});
					$http.post("post/queryPostById/"+$stateParams.id).success(function(data){
						if(data.result==="success"){
							$scope.vo = data.data ;
						}
						// 取消加载
						Metronic.unblockUI();
					})
				}
				$scope.getPostDetail() ;
				
				$scope.getDeptList = function(){
    				$http.post("common/findDeptList").success(function(data){
    					if(data.result === "success"){
    						$scope.deptList = data.list;
    					}
    				})
    			}
    			$scope.getDeptList();
				
				//跟新用户信息
				$scope.postSubmit = function(){
					$http.post("post/updatePost", $scope.vo).success(function (data) {
                        if (data.result === "success") {
                            ejpAlert.show("修改成功！");
                            $location.path("#/post_list.html");
                        }
                    })
				}
				
			});
	}]);
