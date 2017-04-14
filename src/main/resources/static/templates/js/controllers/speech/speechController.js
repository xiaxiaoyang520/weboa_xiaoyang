/**
 * 言论列表
 */
MetronicApp.controller("speechController",
	['$rootScope','$scope','$http','$location','$modal','pagedataLoading','ejpAlert','getUserInfo',
	function($rootScope, $scope, $http, $location, $modal, pagedataLoading,ejpAlert,getUserInfo) {
		$scope.$on('$viewContentLoaded', function() {
			Metronic.initAjax();

			// set default layout mode
			$rootScope.settings.layout.pageBodySolid = false;
			$rootScope.settings.layout.pageSidebarClosed = false;

			var vm = $scope.vm = {};
			vm.pages = {
				itemsPerPage : 10,
				index :  1,
				totalResult : 0,
				totalPage : 0
			};
			vm.items = [] ;
			
			$scope.getSpeechList = function(){
				//显示加载中……
				pagedataLoading.loading();
				$http.post("speech/findSpeechList/"+$scope.vm.pages.index).success(function(data){
					if(data.result==="success"){
						$scope.vm.items = data.datas.dataList;
//						$socope.vm.commentList = data.datas.dataList.comments
						$scope.vm.pages.totalResult = data.datas.pager.recordCount;
						$scope.vm.pages.totalPage = data.datas.pager.totalPage;
					}
					//隐藏加载中……
					pagedataLoading.unloading();
				})
			}
			$scope.getSpeechList();

			/* ***********************查询功能********************************** */
			//查询按钮
			$scope.searchClick = function() {

				$scope.vm.pages = {
					itemsPerPage : 10,
					index : 1,
					totalResult : 0,
					totalPage : 0
				};
				$scope.getSpeechList();
			};
			//清空按钮
			$scope.resetClick = function() {
				$scope.vo = {};
			};
			
			//点赞方法
			var userInfo = $scope.userInfo = getUserInfo.userInfo();
			$scope.addPraiseNum = function(speechId){
					$http.post("speech/addPraiseNum/"+speechId+"/"+userInfo.userId).success(function(data){
						if(data.result==="success"){
							$scope.getSpeechList();
						}
					})
			
		};
		});
}]);

//新增用户 信息
MetronicApp.controller("addSpeechController",
	    ['$rootScope', '$scope', '$http', '$location', '$modal', 'pagedataLoading', 'ejpAlert',
	        function ($rootScope, $scope, $http, $location, $modal, pagedataLoading, ejpAlert) {
	            $scope.$on('$viewContentLoaded', function () {
	                Metronic.initAjax();

	                // set default layout mode
	                $rootScope.settings.layout.pageBodySolid = false;
	                $rootScope.settings.layout.pageSidebarClosed = false;
	                
	                $scope.userSexs=[
									 {code:1,name:'帅哥'},
									 {code:2,name:'美女'},
								   ];
	                $scope.user = {
	                		userSex:1
	    				};

	                $scope.vo = {};
	                
	                $scope.getPostList = function(){
	    				$http.post("common/findPostList").success(function(data){
	    					if(data.result === "success"){
	    						$scope.userPostList = data.list;
	    					}
	    				})
	    			}
	    			$scope.getPostList();

	                //保存
	                $scope.userSubmit = function () {
	                    $scope.vo.userName = $scope.user.userName;
	                    $scope.vo.userSex = $scope.user.userSex;
	                    $scope.vo.userTel = $scope.user.userTel;
	                    $scope.vo.userAddr = $scope.user.userAddr;
	                    $scope.vo.userBirth = new Date($scope.user.userBirth)
	                    $http.post("user/addUser", $scope.vo).success(function (data) {
	                        if (data.result === "success") {
	                            ejpAlert.show("新增成功！");
	                            $location.path("#/user_list.html");
	                        }
	                    })
	                }
	            });
	        }]);

//用户详细信息
MetronicApp.controller("detailUserController",
		['$rootScope','$scope','$http','$location','$modal','pagedataLoading','ejpAlert','$stateParams',
		function($rootScope, $scope, $http, $location, $modal, pagedataLoading,ejpAlert,$stateParams) {
			$scope.$on('$viewContentLoaded', function() {
				Metronic.initAjax();

				// set default layout mode
				$rootScope.settings.layout.pageBodySolid = false;
				$rootScope.settings.layout.pageSidebarClosed = false;

			   $scope.id =	$stateParams.id;

               $scope.tastVO = {} ;

				//获得用户详情
				$scope.userDetail = function(){
					// 正在加载
					Metronic.blockUI({
						message:'加载中，请稍后...'
					});
					$http.post("user/queryUserById/"+$stateParams.id).success(function(data){
						if(data.result==="success"){
							$scope.userRO = data.data ;
						}
						// 取消加载
						Metronic.unblockUI();
					})
				}
				$scope.userDetail() ;
				
			});
	}]);

MetronicApp.controller("editUserController",
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
				$scope.userDetail = function(){
					// 正在加载
					Metronic.blockUI({
						message:'加载中，请稍后...'
					});
					$http.post("user/queryUserById/"+$stateParams.id).success(function(data){
						if(data.result==="success"){
							$scope.vo = data.data ;
						}
						// 取消加载
						Metronic.unblockUI();
					})
				}
				$scope.userDetail() ;
				
				$scope.getPostList = function(){
    				$http.post("common/findPostList").success(function(data){
    					if(data.result === "success"){
    						$scope.userPostList = data.list;
    					}
    				})
    			}
    			$scope.getPostList();
				
				//跟新用户信息
				$scope.userSubmit = function(){
					$http.post("user/updateUser", $scope.vo).success(function (data) {
                        if (data.result === "success") {
                            ejpAlert.show("修改成功！");
                            $location.path("#/user_list.html");
                        }
                    })
				}
				
			});
	}]);
