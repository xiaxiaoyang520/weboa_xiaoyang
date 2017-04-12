/**
 * 小品会列表
 */
MetronicApp.controller("tastingController",
	['$rootScope','$scope','$http','$location','$modal','pagedataLoading','ejpAlert','getUserInfo',
	function($rootScope, $scope, $http, $location, $modal, pagedataLoading,ejpAlert,getUserInfo) {
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

			//获取用户角色
			$scope.identity = getUserInfo.userInfo();
			console.info($scope.identity);

			//初始化省市区三级联动
			initCitySelector('city-select', 'common/getProvinceCityArea.action');

			$scope.getTastingList = function(){
				//显示加载中……
				pagedataLoading.loading();
				$http.post("tasting/findTastingList/"+vm.pages.index,$scope.vo).success(function(data){
					if(data.result==="success"){
						$scope.vm.items = data.datas.dataList ;
						$scope.vm.pages.totalResult = data.datas.pager.recordCount;
						$scope.vm.pages.totalPage = data.datas.pager.totalPage;
					}
					//隐藏加载中……
					pagedataLoading.unloading();
				})
			}
			$scope.getTastingList();

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
				$scope.getTastingList();
			};
			//清空按钮
			$scope.resetClick = function() {
				$scope.vo = {};
				$scope.getTastingList();
			};

			//新增小品会活动
			$scope.addTasting = function(){
				 var modalInstance = $modal.open({
				      templateUrl: 'views/modals/tasting_add.html',
				      controller: 'addTastingController',
				      size: 'md',
				      resolve: {
				    	  data: function () {

					        }
			        }
		    }).result.then(function(data){
		    	$scope.getTastingList();
		    })
	  }
		});
}]);
//小品会详情
MetronicApp.controller("tastingMenuController",
		['$rootScope','$scope','$http','$location','$modal','pagedataLoading','ejpAlert','$stateParams',
		function($rootScope, $scope, $http, $location, $modal, pagedataLoading,ejpAlert,$stateParams) {
			$scope.$on('$viewContentLoaded', function() {
				Metronic.initAjax();

				// set default layout mode
				$rootScope.settings.layout.pageBodySolid = false;
				$rootScope.settings.layout.pageSidebarClosed = false;

			   $scope.id =	$stateParams.id;

               $scope.tastVO = {} ;
               //产品汇总
               $scope.productVO = {} ;
               //订单汇总
               $scope.orderRO = {} ;
               //用户汇总
               $scope.userRO = {} ;

               $scope.id = $stateParams.id ;

               //用户汇总下单件数总计，下单金额总计
                $scope.userOrderNumTotal=0 ;
                $scope.userOrderAmountTotal =0 ;
               //产品汇总下单件数总计，下单金额总计
               $scope.productOrderNumTotal =0;
               $scope.productOrderAmountTotal =0 ;


				//获得小品会详情
				$scope.tastDetail = function(){
					// 正在加载
					Metronic.blockUI({
						message:'加载中，请稍后...'
					});
					$http.post("tasting/queryTastingById/"+$stateParams.id).success(function(data){
						if(data.result==="success"){
							$scope.tastVO = data.data ;
						}
						// 取消加载
						Metronic.unblockUI();
					})
				}
				$scope.tastDetail() ;
				
				//获得小品会详情用户汇总
				$scope.queryUserStatis = function(){
					// 正在加载
					Metronic.blockUI({
						message:'加载中，请稍后...'
					});
					$http.post("tasting/queryUserStatis/"+$stateParams.id).success(function(data){
						if(data.result==="success"){
							$scope.userRO =data.data.userStatis ;
							 //用户汇总下单件数总计，下单金额总计
							if($scope.userRO.length!=0){
								$scope.isHideUser= true ;
								angular.forEach($scope.userRO,function(item){
									$scope.userOrderNumTotal +=item.orderNum ;
									$scope.userOrderAmountTotal += item.orderAmount ;
								});
							}
						}
						// 取消加载
						Metronic.unblockUI();
					})
				}

				//获得小品会详情产品汇总
				$scope.queryProductStatis = function(){
					// 正在加载
					Metronic.blockUI({
						message:'加载中，请稍后...'
					});
					$http.post("tasting/queryProductStatis/"+$stateParams.id).success(function(data){
						if(data.result==="success"){
							$scope.productVO = data.data.productStatis ;
							//产品汇总下单件数总计，下单金额总计
							if($scope.productVO.length!=0){
								$scope.isHideProduct = true ;
								angular.forEach($scope.productVO,function(item){
									$scope.productOrderNumTotal += item.productNum ;
									$scope.productOrderAmountTotal += item.orderAmount ;
								});
							}
						}
						// 取消加载
						Metronic.unblockUI();
					})
				}
				
				//获得小品会详情订单汇总
				$scope.queryOrderStatis = function(){
					// 正在加载
					Metronic.blockUI({
						message:'加载中，请稍后...'
					});
					$http.post("tasting/queryOrderStatis/"+$stateParams.id).success(function(data){
						if(data.result==="success"){
							$scope.orderRO =data.data.orderStatis ;
						}
						// 取消加载
						Metronic.unblockUI();
					})
				}
			});
	}]);
