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
				itemsPerPage : 5,
				index :  1,
				totalResult : 0,
				totalPage : 0
			};
			vm.items = [] ;
			$scope.vo = {
					createUser:0
			};
			$scope.getSpeechList = function(){
				//显示加载中……
				pagedataLoading.loading();
				$http.post("speech/findSpeechList/"+$scope.vm.pages.index+"/"+$scope.vo.createUser).success(function(data){
					if(data.result==="success"){
						$scope.vm.items = data.datas.dataList;
						$scope.vm.pages.totalResult = data.datas.pager.recordCount;
						$scope.vm.pages.totalPage = data.datas.pager.totalPage;
					}
					//隐藏加载中……
					pagedataLoading.unloading();
				})
			}
			$scope.getSpeechList();

//			/* ***********************查询功能********************************** */
//			//查询按钮
//			$scope.searchClick = function() {
//
//				$scope.vm.pages = {
//					itemsPerPage : 10,
//					index : 1,
//					totalResult : 0,
//					totalPage : 0
//				};
//				$scope.getSpeechList();
//			};
//			//清空按钮
//			$scope.resetClick = function() {
//				$scope.vo = {};
//			};
			
			//点赞方法
			var userInfo = $scope.userInfo = getUserInfo.userInfo();
			$scope.addPraiseNum = function(speechId){
					$http.post("speech/addPraiseNum/"+speechId+"/"+userInfo.userId).success(function(data){
						if(data.result==="success"){
							$scope.getSpeechList();
						}
					})
			
			};
			//发表评论
			$scope.releaseComment = function(speechId){
				var comment = {
						speechId :speechId,
						userId:userInfo.userId,
						context:$scope.vo.commentText
				}
				$http.post("speech/addComment",comment).success(function(data){
					if(data.result==="success"){
						$scope.getSpeechList();
						$scope.vo.commentText='';
					}
				})
			};
			
			//查看自己发表的言论
			$scope.findMySelfSpeechList = function(){
				$scope.vo.createUser = userInfo.userId;
				$scope.getSpeechList();
			}
			
			//查看当前言论发表的人言论
			$scope.findCurrentUserSpeechList = function(createUser){
				$scope.vo.createUser = createUser;
				$scope.getSpeechList();
			}
			
			//查看所有言论
			$scope.findAllSpeechList = function(){
				$scope.vo.createUser = 0;
				$scope.getSpeechList();
			}
			
		});
}]);

//发表言论
MetronicApp.controller("addSpeechController",
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
	                $scope.speechSubmit = function () {
	                	$scope.vo.createUser = userInfo.userId;
	                    $http.post("speech/addSpeech", $scope.vo).success(function (data) {
	                        if (data.result === "success") {
	                            ejpAlert.show("发表成功！");
	                            $location.path("/speech_list.html");
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
