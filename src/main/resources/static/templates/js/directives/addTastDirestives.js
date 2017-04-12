/**
 * 新增小品会弹框指令
 */
MetronicApp.directive('addProductSku',['$scope',function($scope){
		return {
			restrict: 'E',
			scope:{
				selectedSkuList : "=",
				so:"="
			},
			template : '<button class="btn blue" data-ng-click="addProductSkuModal()"> <i class="fa fa-plus"></i>添加产品sku</button>',
			replace:true,
		    controller:['$scope','$rootScope', '$state', '$modal', function($scope,$rootScope, $state, $modal){
	           
	                //打开调拨单弹框
	                $scope.addProductSkuModal = function(){
	            		var modalInstance = $modal.open({
	            			bindToController : true,
							templateUrl : 'views/modals/tasting_productSku.html',
							controllerAs : "tastingProductSkuController",
							size : 'lg',
							resolve : {
								requestResults : function() {
									
									var skuIdList = [];
									angular.forEach($scope.selectedSkuList,function(item){
										if(skuIdList.indexOf(item.transferApplicationId) < 0){
											skuIdList.push(item.transferApplicationId);
										}
									});
									$scope.so.selectedSkuList = skuIdList;
									return $scope.so
								}
							}
						});
	            		
	            		modalInstance.result.then(function(productList) {
	            			 $scope.settleBillList = productList;
	        			});
	            	}
	                
	            }]	
		};
	}]);
