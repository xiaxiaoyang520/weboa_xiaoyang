/**
 * 用户信息列表
 */
MetronicApp.controller("userController",
	['$rootScope','$scope','$http','$location','$modal','pagedataLoading','ejpAlert','getUserInfo',
	function($rootScope, $scope, $http, $location, $modal, pagedataLoading,ejpAlert,getUserInfo) {
		$scope.$on('$viewContentLoaded', function() {
			Metronic.initAjax();

			// set default layout mode
			$rootScope.settings.layout.pageBodySolid = false;
			$rootScope.settings.layout.pageSidebarClosed = false;

			$scope.vo = {} ;
			
			$scope.userSexList = [{code:1,name:'帅哥'},{code:2,name:'美女'}];
			
			$scope.stateList = [{code:1,name:'启用'},{code:2,name:'停用'}];
			
			$scope.userPowerList = [{code:1,name:'员工'},
			                    {code:2,name:'部门主管'},
			                    {code:3,name:'管理员'}];

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
						$scope.vm.items = data.datas.dataList ;
						$scope.vm.pages.totalResult = data.datas.pager.recordCount;
						$scope.vm.pages.totalPage = data.datas.pager.totalPage;
					}
					//隐藏加载中……
					pagedataLoading.unloading();
				})
			}
			$scope.getUserList();

			/* ***********************查询功能********************************** */
			//查询按钮
			$scope.searchClick = function() {

				$scope.vm.pages = {
					itemsPerPage : 10,
					index : 1,
					totalResult : 0,
					totalPage : 0
				};
				$scope.getUserList();
			};
			//清空按钮
			$scope.resetClick = function() {
				$scope.vo = {};
			};
			
			//停用用户
			$scope.disabled = function(userId){
				var user = {state:2,userId:userId};
				$http.post("user/updateUser", user).success(function (data) {
                    if (data.result === "success") {
                        ejpAlert.show("停用成功！");
                        $scope.getUserList();
                    }
                })
			};
			
			//启用用户
			$scope.enabled = function(userId){
				var user = {state:1,userId:userId};
				$http.post("user/updateUser", user).success(function (data) {
                    if (data.result === "success") {
                        ejpAlert.show("启用成功！");
                        $scope.getUserList();
                    }
                })
			};

		});
}]);

//新增用户 信息
MetronicApp.controller("addUserController",
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
	                    $scope.vo.userEmail = $scope.user.userEmail;
	                    $scope.vo.idCardNO = $scope.user.idCardNO;
	                    $scope.vo.userBirth = new Date($scope.user.userBirth)
	                    $http.post("user/addUser", $scope.vo).success(function (data) {
	                        if (data.result === "success") {
	                            ejpAlert.show("新增成功！");
	                            $location.path("/user_list.html");
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
                            $location.path("/user_list.html");
                        }
                    })
				}
				
			});
	}]);
