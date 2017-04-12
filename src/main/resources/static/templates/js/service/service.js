/* Setup global settings */
MetronicApp.factory('settings', ['$rootScope','securityService',function($rootScope,securityService) {
    // supported languages
    var settings = {
        layout: {
            pageSidebarClosed: false, // sidebar menu state
            pageBodySolid: false, // solid body color state
            pageAutoScrollOnLoad: 200
                // auto scroll to top on page load
        },
        layoutImgPath: Metronic.getAssetsPath() + 'layout/img/',
        layoutCssPath: Metronic.getAssetsPath() + 'layout/css/',
        userDetailsId: ''
    };

    $rootScope.settings = settings;

    //securityService.setUserInfo('YJP_OP_UserInfo');
    
    //console.log($rootScope.currentUserInfo);
    
    //配置静态资源访问 权限
    $rootScope.privilegeSettings = {
        /***
        '/templates/index.html': 'product',
        'views/companyUser/address_list.html': 'User',
        'views/agency/agency_list.html': 'SysUser',
        'views/agency/agency_detail.html': 'SysUser',
        'views/agency/agency_edit.html': 'SysUser',
        'views/agency/agency_create.html': 'SysUser',
        'views/agency/agency_detail_product.html': 'SysUser',
        'views/bizrule/cashcoupon/cash_coupon_template_list.html': 'bizrule',
        'views/bizrule/cashcoupon/cash_coupon_template_add.html': 'bizrule',
        'views/bizrule/cashcoupon/cash_coupon_template_update.html': 'bizrule',
        'views/bizrule/cashcoupon/cash_coupon_template_detail.html': 'bizrule',
        'views/bizrule/registration/registration_rule_list.html': 'bizrule',
        'views/bizrule/registration/registration_rule_add.html': 'bizrule',
        'views/bizrule/registration/registration_rule_update.html': 'bizrule',
        'views/bizrule/registration/registration_rule_detail.html': 'bizrule',
        'views/bizrule/product/product_attached_gift_rule_list.html': 'bizrule',
        'views/bizrule/product/product_attached_gift_rule_add.html': 'bizrule',
        'views/bizrule/product/product_attached_gift_rule_update.html': 'bizrule',
        'views/bizrule/product/product_attached_gift_rule_detail.html': 'bizrule',
        'views/bizrule/product/product_limitation_rule_list.html': 'bizrule',
        'views/bizrule/product/product_limitation_rule_add.html': 'bizrule',
        'views/bizrule/product/product_limitation_rule_update.html': 'bizrule',
        'views/bizrule/product/product_limitation_rule_detail.html': 'bizrule',
        'views/bizrule/product/product_promotion_rule_list.html': 'bizrule',
        'views/bizrule/product/product_promotion_rule_add.html': 'bizrule',
        'views/bizrule/product/product_promotion_rule_update.html': 'bizrule',
        'views/bizrule/product/product_promotion_rule_detail.html': 'bizrule',
        'views/bizrule/order/order_additional_purchase_rule_list.html': 'bizrule',
        'views/bizrule/order/order_additional_purchase_rule_add.html': 'bizrule',
        'views/bizrule/order/order_additional_purchase_rule_update.html': 'bizrule',
        'views/bizrule/order/order_additional_purchase_rule_detail.html': 'bizrule',
        'views/bizrule/order/order_attached_gift_rule_list.html': 'bizrule',
        'views/bizrule/order/order_attached_gift_rule_add.html': 'bizrule',
        'views/bizrule/order/order_attached_gift_rule_update.html': 'bizrule',
        'views/bizrule/order/order_attached_gift_rule_detail.html': 'bizrule',
        'views/bizrule/order/order_date_rule_list.html': 'bizrule',
        'views/bizrule/order/order_date_rule_add.html': 'bizrule',
        'views/bizrule/order/order_date_rule_update.html': 'bizrule',
        'views/bizrule/order/order_date_rule_detail.html': 'bizrule',
        'views/bizrule/order/order_incentive_rule_list.html': 'bizrule',
        'views/bizrule/order/order_incentive_rule_add.html': 'bizrule',
        'views/bizrule/order/order_incentive_rule_update.html': 'bizrule',
        'views/bizrule/order/order_incentive_rule_detail.html': 'bizrule',
        'views/bizrule/order/order_reducation_rule_list.html': 'bizrule',
        'views/bizrule/order/order_reducation_rule_add.html': 'bizrule',
        'views/bizrule/order/order_reducation_rule_update.html': 'bizrule',
        'views/bizrule/order/order_reducation_rule_detail.html': 'bizrule',
        'views/bizrule/order/order_use_cash_coupon_rule_list.html': 'bizrule',
        'views/bizrule/order/order_use_cash_coupon_rule_add.html': 'bizrule',
        'views/bizrule/order/order_use_cash_coupon_rule_update.html': 'bizrule',
        'views/bizrule/order/order_use_cash_coupon_rule_detail.html': 'bizrule',
        'views/bizrule/order/order_incentive_rule_item_list.html': 'bizrule',
        'views/bizrule/order/order_incentive_rule_item_add.html': 'bizrule',
        'views/bizrule/order/order_incentive_rule_item_update.html': 'bizrule',
        'views/companyUsers/company_users.html': 'User',
        'views/companyUsers/company_user_create.html': 'User',
        'views/companyUsers/company_user_edit.html': 'User',
        'views/companyUsers/company_user_menu.html': 'User',
        'views/companyUsers/company_user_detail.html': 'User',
        'views/companyUsers/company_user_bonus_list.html': 'User',
        'views/companyUsers/company_user_supplier.html': 'User',
        'views/dispatchingVendor/dispatching_list.html': 'Supplier',
        'views/dispatchingVendor/dispatching_edit.html': 'Supplier',
        'views/orders/orders.html': 'Order',
        'views/orders/order_add.html': 'Order',
        'views/orders/selfRunOrders.html': 'Order',
        'views/orders/vendorOrders.html': 'Order',
        'views/orders/order_detail.html': 'Order',
        'views/orders/dispatchingVendorOrders.html': 'Order',
        'views/orders/orderSlip.html': 'Order',
        'views/orders/order_add.html': 'Order',
        'views/orgs/citys.html':'SysUser',
        'views/orgs/city_add.html':'SysUser',
        'views/orgs/city_users.html':'SysUser',
        'views/orgs/city_user_details.html':'SysUser',
        'views/products/productInfoList.html': 'Product',
        'views/products/productInfo_create.html': 'Product',
        'views/products/productInfo_details.html': 'Product',
        'views/products/productInfo_edit.html': 'Product',
        'views/products/products.html': 'Product',
        'views/products/product_details.html': 'Product',
        'views/products/specificationList.html': 'Product',
        'views/products/product_edit2.html': 'Product',
        'views/setting/op_list.html': 'System',
        'views/setting/op_category_list.html': 'System',
        'views/setting/op_brand_list.html': 'System',
        'views/supplier/supplier_list.html': 'SysUser',
        'views/supplier/supplier_detail.html': 'SysUser',
        'views/supplier/supplier_detail_product.html': 'SysUser',
        'views/supplier/supplier_edit.html': 'SysUser',
        'views/supplier/supplier_create.html': 'SysUser',
        'views/tag/tag_create.html':'User',
        'views/tag/tag_detail.html':'User',
        'views/tag/tag_edit.html':'User',
        'views/tag/tag_list.html':'User',
        'views/user/user_list.html':'User',
        'views/user/user_detail.html':'User',
        'views/user/user_edit.html':'User',
        'views/user/user_create.html':'User',
        'views/user/user_orgRole.html':'User',
        'views/warehouse/list.html': 'SysUser',
        'views/warehouse/add.html': 'SysUser',
        'views/warehouse/update.html': 'SysUser',
        'views/warehouse/detail.html': 'SysUser',
        'views/warehouse/warehouse_info.html': 'SysUser',
        'views/warehouse/warehouse_manager.html': 'SysUser',
        'views/warehouse/warehouse_stock.html': 'SysUser',
        'views/warehouse/warehouse_manager_detail.html': 'SysUser',
        'views/activity/wholesale_promotion_list.html': 'promotionEvent',
        'views/activity/wholesale_promotion_add.html': 'promotionEvent',
        'views/activity/wholesale_promotion_detail.html': 'promotionEvent',
        'views/activity/wholesale_promotion_edit.html': 'promotionEvent',
        'views/activity/wholesale_promotion_product_edit.html': 'promotionEvent',
        'views/activity/wholesale_promotion_template_edit.html': 'promotionEvent',
        'views/activity/propose_activity_list.html': 'promotionEvent',
        'views/activity/propose_activity_add.html': 'promotionEvent',
        'views/activity/propose_activity_detail.html': 'promotionEvent',
        'views/activity/propose_activity_edit.html': 'promotionEvent',
        ***/
    }
    
    //获取用户角色对静态资源的访问权限
    $rootScope.userPrivileges = '';
   /* $.post('findUserPrivilegeList.action').success(
        function(data) {
            $rootScope.userPrivileges = data;
            console.log("获取权限信息>>>>>>>>>>>>>>>>>>>" + data);
        }).error(function(data) {
        console.log(data);
    });*/

    return settings;
}]);

//Interceptor Service拦截器
MetronicApp.factory('myInterceptor', ['$q', '$rootScope',
    function($q, $rootScope) {
        var Interceptor = {
            'request': function(config) {
                var access = false;
                //检查文件是否已经配置了权限
//                console.log(config);
//                console.log(config.url);
                var url = config.url.toLowerCase().replace("/himalaya", "");
//                console.log(url)
                var privilegeCode = $rootScope.privilegeSettings[url];
//                console.log(privilegeCode);

                //页面有权限限制， 检查用户是否有访问权限
                if (privilegeCode != null) {
                    if ($rootScope.userPrivileges.datas != null) {
                        $rootScope.userPrivileges.datas.forEach(function(privilege) {
                            if (privilege.privilegeCode == privilegeCode) {
                                access = true;
                            }
                        });
                    }
                } else {
                    //页面不需要权限
                    access = true;
                }

                if (!access) {
                    console.log("你没有权限访问当前页面" + config.url);
                    $rootScope.$state.go('dashboard');
                }
                return config;
            },
            'response': function(config) {
                if (config.data == 'failed') {
                    console.log("权限不足，不能访问" + config);
                    $rootScope.$state.go('dashboard');
                }
                return config;
            },
            'requestError': function(rejection) {
                //console.log('myInterceptor requestError');
                //console.log(rejection);
                return rejection;
            },
            'responseError': function(rejection) {
                //console.log('myInterceptor responseError');
                return rejection;
            }
        };

        return Interceptor;
    }
]);

// 上传文件service
MetronicApp.service('fileUpload', ['$http', function($http) {
    this.uploadFileToUrl = function(params, picModel, files, uploadUrl) {
        var fd = new FormData();
        fd.append("file", files[0]);
        fd.append("file", files[1]);
        fd.append("file", files[2]);
        fd.append("file", files[3]);
        fd.append("file", files[4]);
        fd.append('owner', picModel.owner);
        fd.append('sequence', picModel.sequence);
        fd.append('code', picModel.code);
        fd.append('businessId', picModel.businessId);
        fd.append('params', params);

        return $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {
                'Content-Type': undefined
            }
        }).success(function(data) {
            console.log(data);
        }).error(function() {});
    }

}]);


MetronicApp.service('fileDownload', ['$http', function($http) {

    this.downloadFileToUrl = function(picModel, picUrl, downloadUrl) {
        return $http.post(downloadUrl, {
            'picUrl': picUrl,
            'code': picModel.code,
            'businessId': picModel.businessId,
            'id': picModel.id
        }).success(function(data) {
            console.log(data.picUrl);
        }).error(function(error) {});
    }

}]);

//
MetronicApp.factory('RecursionHelper', ['$compile', function($compile) {
    return {
        /**
         * Manually compiles the element, fixing the recursion loop.
         * @param element
         * @param [link] A post-link function, or an object with function(s) registered via pre and post properties.
         * @returns An object containing the linking functions.
         */
        compile: function(element, link) {
            // Normalize the link parameter
            if (angular.isFunction(link)) {
                link = {
                    post: link
                };
            }

            // Break the recursion loop by removing the contents
            var contents = element.contents().remove();
            var compiledContents;
            return {
                pre: (link && link.pre) ? link.pre : null,
                /**
                 * Compiles and re-adds the contents
                 */
                post: function(scope, element) {
                    // Compile the contents
                    if (!compiledContents) {
                        compiledContents = $compile(contents);
                    }
                    // Re-add the compiled contents to the element
                    compiledContents(scope, function(clone) {
                        element.append(clone);
                    });
                    // Call the post-linking function, if any
                    if (link && link.post) {
                        link.post.apply(null, arguments);
                    }
                }
            };
        }
    };
}]);

//ajax service
MetronicApp.service('ajaxService', ['$http', "blockUI", function($http, blockUI) {

    this.AjaxDelete = function(route, successFunction, errorFunction) {
        setTimeout(function() {
            $http({
            		method:"DELETE",
            		url:route
            }).success(
                function(response, status, headers, config) {
                    successFunction(response, status);
                }).error(
                function(response) {
                    errorFunction(response);
                });
        }, 500);
    };


    this.AjaxPut = function(data, route, successFunction, errorFunction) {
        setTimeout(function() {
            $http({
            		method:"PUT",
            		url:route,
            		data:data
            }).success(
                function(response, status, headers, config) {
                    successFunction(response, status);
                }).error(
                function(response) {
                    errorFunction(response);
                });
        }, 500);
    };

    this.AjaxPost = function(data, route, successFunction, errorFunction) {
        setTimeout(function() {
            $http.post(route, data).success(
                function(response, status, headers, config) {
                    successFunction(response, status);
                }).error(
                function(response) {
                    errorFunction(response);
                });
        }, 500);
    }

    this.AjaxGet = function(route, successFunction, errorFunction) {
        setTimeout(function() {
            $http({
                method: 'GET',
                url: route
            }).success(
                function(response, status, headers, config) {
                    successFunction(response, status);
                }).error(
                function(response) {
                    errorFunction(response);
                });
        }, 500);
    }

    this.AjaxGetWithData = function(data, route, successFunction, errorFunction) {
        setTimeout(function() {
            $http({
                method: 'GET',
                url: route,
                params: data,
                dataType: "json"
            }).success(
                function(response, status, headers, config) {
                    successFunction(response, status);
                }).error(
                function(response) {
                    errorFunction(response);
                });
        }, 500);
    }

    this.AjaxPostWithBlock = function(data, route, successFunction, errorFunction) {
        console.log(blockUI)
        var dataBlockUI = blockUI.instances.get("dataBlockUI");
        dataBlockUI.start();
        setTimeout(function() {
            $http.post(route, data).success(
                function(response, status, headers, config) {
                    successFunction(response, status);
                    dataBlockUI.stop();
                }).error(
                function(response) {
                    errorFunction(response);
                    dataBlockUI.stop();
                });
        }, 500);
    }
    
    this.AjaxGetWithBlock = function(route, successFunction, errorFunction) {
        console.log(blockUI)
        var dataBlockUI = blockUI.instances.get("dataBlockUI");
        dataBlockUI.start();
        setTimeout(function() {
            $http.get(route).success(
                function(response, status, headers, config) {
                    successFunction(response, status);
                    dataBlockUI.stop();
                }).error(
                function(response) {
                    errorFunction(response);
                    dataBlockUI.stop();
                });
        }, 500);
    }

}]);


/**
 * ModalService
 */
MetronicApp.service('modalService', ['$modal', function($modal) {
    this.openModal = function(config) {
        var DEFAULT = {
            url: 'views/modals/popupMessage.html',
            ctrl: 'modalInstanceCtrl',
            size: '',
            param: ''
        }

        var config = $.extend(DEFAULT, config);

        //创建弹框对象
        var modalInstance = $modal.open({
            templateUrl: config.url,
            controller: config.ctrl,
            size: config.size,
            resolve: {
                items: function() {
                    return config.param;
                }
            }
        });

        //弹框打开后执行
        if (config.openedFunction && typeof(openedFunction) == "function") {
            modalInstance.opened.then(function() {
                config.openedFunction();
            });
        }

        //弹框提交成功后回掉函数
        modalInstance.result.then(function(result) {
            config.responseSuccess(result)
        }, function(reason) {
            config.responseError(reason)
        });
    }
}]);

/**
 * 自定义alert提示窗口<br>
 * 
 * usage:<br>
 * 1) 只提示消息 
 *    ejpAlert.show('your message');
 * 2) 自定义标题的提示消息
 *    ejpAlert.show({title:'your title',msg:'your message'});
 * 3) 带响应操作的提示消息
 *    ejpAlert.show('your message').result.then(function(param){
 *    	  // OK 按钮响应
 *        // your code
 *    },function(param){
 *        // 取消按钮响应
 *        // your code
 *    });
 * */
MetronicApp.service('ejpAlert', ['$modal','$http', function($modal,$http) {
	/*消息提示模式窗口*/
    this.show = function(config) {
    	var DEFAULT = {
			templateUrl:'views/modals/common/popupMessage.html',
			controller:function($scope, $modalInstance, items){
				$scope.results = items;
				// 确认按钮
				$scope.ok = function() {
					$modalInstance.close();
				}; 
				// 取消按钮
				$scope.cancel = function() {
					$modalInstance.dismiss('cancel');
				};
			},
			size:'sm',
			title:'提示消息',
			msg:''
    	}
    	
    	var cfg = (Object.prototype.toString.call(config) === "[object String]") ? $.extend(DEFAULT, {msg:config}) : $.extend(DEFAULT, config);
    	
        //创建弹框对象
        var modalInstance = $modal.open({
            templateUrl: cfg.templateUrl,
            controller: cfg.controller,
            size: cfg.size,
            resolve: {
            	items: function() {
                    return {title:cfg.title,msg:cfg.msg};
                }
            }
        });
        return modalInstance;
    };
    /*审核确认模式窗口*/
    this.check = function(config){
    	var DEFAULT = {
			templateUrl:'views/modals/common/popupCheckWin.html',
			controller:function($scope, $modalInstance, items){
				$scope.results = items;
				// 确认按钮
				$scope.ok = function() {
					$modalInstance.close();
				}; 
				// 取消按钮
				$scope.cancel = function() {
					$modalInstance.dismiss('cancel');
				};
			},
			size:'sm',
			title:'审核提示',
			msg:''
    	}
    	
    	var cfg = (Object.prototype.toString.call(config) === "[object String]") ? $.extend(DEFAULT, {msg:config}) : $.extend(DEFAULT, config);
    	
        //创建弹框对象
        var modalInstance = $modal.open({
            templateUrl: cfg.templateUrl,
            controller: cfg.controller,
            size: cfg.size,
            resolve: {
            	items: function() {
                    return {title:cfg.title,msg:cfg.msg};
                }
            }
        });
        return modalInstance;    	
    };
    /*选择产品类目模式窗口*/
    this.selectProductCategory = function(params){
            //创建弹框对象
            var modalInstance = $modal.open({
                templateUrl: 'views/modals/common/popupProductCategory.html',
                controller: 'SelectProductCategoryController',
                size: 'lg',
                resolve: {
                	params: function() {
                        return {param:params};
                    }
                }
            });
            return modalInstance;
    	
    }
    /*选择产品模式窗口*/
    this.selectProduct = function(params){
            //创建弹框对象
            var modalInstance = $modal.open({
                templateUrl: 'views/modals/common/popupProduct.html',
                controller: 'SelectProductController',
                size: 'lg',
                resolve: {
                	params: function() {
                        return {param:params};
                    }
                }
            });
            return modalInstance; 	
    	
    }
    /*选择用户模式窗口*/
    this.selectUser = function(params){
            //创建弹框对象
            var modalInstance = $modal.open({
                templateUrl: 'views/modals/common/popupUser.html',
                controller: 'SelectUserController',
                size: 'lg',
                resolve: {
                	params: function() {
                        return {param:params};
                    }
                }
            });
            return modalInstance;
    	
    }
    
    // 根据城市选择产品
    this.selectProductSKUByCity = function(params){
    	 //创建弹框对象
        var modalInstance = $modal.open({
            templateUrl: 'views/modals/common/popupProductSKUByCity.html',
            controller: 'SelectProductByCityController',
            size: 'lg',
            resolve: {
            	params: function() {
                    return {param:params};
                }
            }
        });
        return modalInstance;
    };
    
 // 根据城市选择类目
    this.selectCategoryByCity = function(params){
    	 //创建弹框对象
        var modalInstance = $modal.open({
            templateUrl: 'views/modals/common/popupCategoryByCity.html',
            controller: 'SelectCategoryByCityController',
            size: 'lg',
            resolve: {
            	params: function() {
                    return {param:params};
                }
            }
        });
        return modalInstance;
    };
    
    // 选择组合产品下各项规则
    this.selectRuleByCity = function(params){
    	 //创建弹框对象
        var modalInstance = $modal.open({
            templateUrl: params.templateUrl,//'views/modals/common/popupRuleByCity.html',
            controller: 'SelectRuleByCityController',
            size: 'lg',
            resolve: {
            	params: function() {
                    return {param:params};
                }
            }
        });
        return modalInstance;
    };
    
    /*选择用户模式窗口*/
    this.selectUserByCity = function(params){
            //创建弹框对象
            var modalInstance = $modal.open({
                templateUrl: 'views/modals/common/popupUser.html',
                controller: 'SelectUserByCityController',
                size: 'lg',
                resolve: {
                	params: function() {
                        return {param:params};
                    }
                }
            });
            return modalInstance;
    	
    };
    
    // 选择规则下的商品
    this.selectProductOfRule = function(obj){
    	var modalInstance = $modal.open({
    		templateUrl:'views/modals/common/popupProductSKUByCity.html',
    		controller:'SelectProductOfRuleController',
    		size:'lg',
    		resolve:{
    			params:function(){
    				return {param:obj};
    			}
    		}
    	});
    	
    	return modalInstance;
    }
   
    
    //判定城市是否合法
    this.getCityId = function(city){
    	
    	var url = "city/getCityId.action";
    	var id = '';
    	
    	$http.post(url,city)
    	    .success(function(data){
    	    	id = data;
//    	    	console.log('city id of ' + JSON.stringify(city) + ' is ' + id + ' and data is ' + data);
    	    })
    	    .error(function(data){
//    	    	this.show('城市信息不合法');
    	    	console.log('failed get city id of ' + JSON.stringify(city));
    	    });
    	
    	return id;
    };
    
}]);

MetronicApp.controller("SelectProductCategoryController",['$rootScope','$scope','params','$http','$modalInstance','ejpAlert',function($rootScope,$scope,params,$http,$modalInstance,ejpAlert){
	// 确认按钮
	$scope.ok = function() {
		var selected = [];
		$('input[name="_checkbox"]:checked').each(function(){
			selected.push($scope.vm.items[$(this).attr("id")]);
		});
		//获取对象，返回对象数组
		$modalInstance.close(selected);
	}; 
	// 取消按钮
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
	
	$scope.searchClick = function(){
		$scope.vm.pages = {
			itemsPerPage : 20,
			index : 1,
			totalResult : 0,
			totalPage : 0
		};

		$scope.getList();
	};
	$scope.resetClick = function(){
		$scope.vo = {};
	};
	
	//页面加载时，初始化
	//$scope.$on('$viewContentLoaded',function() {
		Metronic.initAjax(); 
		// set default layout mode
		$rootScope.settings.layout.pageBodySolid = false;
		$rootScope.settings.layout.pageSidebarClosed = false;
		$scope.vo = {};

		$scope.vm = {
			pages : {
				itemsPerPage : 20,
				index : 1,
				totalResult : 0,
				totalPage : 0
			}
		};
		
		//获取产品类目列表
        $scope.getList = function() {
        	$http.post('category/findCategoryList/'+$scope.vm.pages.index+'.action',$scope.vo).success(function(data){
        		//console.log(data);
        		if(data.result=='success'){
					$scope.vm.items = data.datas.dataList;
					$scope.vm.pages.totalResult = data.datas.pager.recordCount;
					$scope.vm.pages.totalPage = data.datas.pager.totalPage;
        		}else if(data.result=='fail'){
        			ejpAlert.show(data.message);
				}else if(data.result=='error'){
					console.log(data.message);
					$rootScope.msg = data.message;
					// 跳转到错误页面
					//$location.path('/error.html');
				}
        	})
        };
        $scope.getList();
	//});
}]);

MetronicApp.controller("SelectProductController",['$rootScope','$scope','params','$http','$modalInstance','ejpAlert',function($rootScope,$scope,params,$http,$modalInstance,ejpAlert){
	// 确认按钮
	$scope.ok = function() {
		var selected = [];
		$('input[name="_checkbox"]:checked').each(function(){
			selected.push($scope.vm.items[$(this).attr("id")]);
		});
		//获取对象，返回对象数组
		$modalInstance.close(selected);
	}; 
	// 取消按钮
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
	
	$scope.searchClick = function(){
		$scope.vm.pages = {
			itemsPerPage : 20,
			index : 1,
			totalResult : 0,
			totalPage : 0
		};

		$scope.getList();
	};
	$scope.resetClick = function(){
		$scope.vo = {};
	};
	
	//页面加载时，初始化
	//$scope.$on('$viewContentLoaded',function() {
		Metronic.initAjax(); 
		// set default layout mode
		$rootScope.settings.layout.pageBodySolid = false;
		$rootScope.settings.layout.pageSidebarClosed = false;
		$scope.vo = {};

		//初始化省市区三级联动
		initCitySelector('city-select','common/getProvinceCityArea.action');

		//获取类目列表
        {
            $http.post('common/findAllProductCategoryPs.action').success(function(result) {
                if (result.result == 'success') {
                    $scope.vm.categoryList = result.datas.dataList;
                }
            }).error(function(error) {
                console.log('获取类目信息:'+error);
            });
        }
        
        //$scope.productInfoSpecificationList = {};
        

		$scope.vm = {
			pages : {
				itemsPerPage : 20,
				index : 1,
				totalResult : 0,
				totalPage : 0
			}
		};
		
		//获取产品列表
        $scope.getList = function() {
        	
        	//$http.post('product/findProductQueryList/'+$scope.vm.pages.index+'.action',$scope.vo).success(function(data){
        	
        	$http.post('product/findProductQueryListEnable/'+$scope.vm.pages.index+'.action',$scope.vo).success(function(data){
        		//console.log(data);
        		if(data.result=='success'){
					$scope.vm.items = data.datas.dataList;
					$scope.vm.pages.totalResult = data.datas.pager.recordCount;
					$scope.vm.pages.totalPage = data.datas.pager.totalPage;
        		}else if(data.result=='fail'){
        			ejpAlert.show(data.message);
				}else if(data.result=='error'){
					console.log(data.message);
					$rootScope.msg = data.message;
					// 跳转到错误页面
					//$location.path('/error.html');
				}
        	})
        };
        $scope.getList();
	//});
}]);

MetronicApp.controller("SelectUserController",['$rootScope','$scope','params','$http','$modalInstance','ejpAlert',function($rootScope,$scope,params,$http,$modalInstance,ejpAlert){
	// 确认按钮
	$scope.ok = function() {
		var selected = [];
		$('input[name="_checkbox"]:checked').each(function(){
			selected.push($scope.vm.items[$(this).attr("id")]);
		});
		//获取对象，返回对象数组
		$modalInstance.close(selected);
	}; 
	// 取消按钮
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
	
	$scope.searchClick = function(){
		$scope.vm.pages = {
			itemsPerPage : 10,
			index : 1,
			totalResult : 0,
			totalPage : 0
		};

		$scope.getList();
	};
	
	$scope.resetClick = function(){
		$scope.vo = {};
	};
	
	//页面加载时，初始化
	//$scope.$on('$viewContentLoaded',function() {
		Metronic.initAjax(); 
		// set default layout mode
		$rootScope.settings.layout.pageBodySolid = false;
		$rootScope.settings.layout.pageSidebarClosed = false;
		$scope.vo = {};

		//初始化省市区三级联动
		initCitySelector('city-select','common/getProvinceCityArea.action');
        

		$scope.vm = {
			pages : {
				itemsPerPage : 10,
				index : 1,
				totalResult : 0,
				totalPage : 0
			}
		};
		
		//获取产品列表
        $scope.getList = function() {
        	$http.post('bizUser/findBizUserList/'+$scope.vm.pages.index+'.action',$scope.vo).success(function(data){
        		//console.log(data);
        		if(data.result=='success'){
					$scope.vm.items = data.datas.dataList;
					$scope.vm.pages.totalResult = data.datas.pager.recordCount;
					$scope.vm.pages.totalPage = data.datas.pager.totalPage;
        		}else if(data.result=='fail'){
        			ejpAlert.show(data.message);
				}else if(data.result=='error'){
					$rootScope.msg = data.message;
					// 跳转到错误页面
					//$location.path('/error.html');
					console.log(data.message);
				}
        	})
        };
        $scope.getList();
	//});
}]);

// 选择特定城市下的产品sku
MetronicApp.controller("SelectProductByCityController",['pagedataLoading','$rootScope','$scope','params','$http','$modalInstance','ejpAlert',function(pagedataLoading,$rootScope,$scope,params,$http,$modalInstance,ejpAlert){
	// 确认按钮
	$scope.ok = function() {
		var selected = [];
		$('input[name="_checkbox"]:checked').each(function(){
			selected.push($scope.vm.items[$(this).attr("id")]);
		});
		//获取对象，返回对象数组
		$modalInstance.close(selected);
	}; 
	// 取消按钮
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
	
	$scope.searchClick = function(){
		$scope.vm.pages = {
			itemsPerPage : 20,
			index : 1,
			totalResult : 0,
			totalPage : 0
		};

		$scope.getList();
	};
	$scope.resetClick = function(){
		$scope.vo = {
		};
	};
	
	//页面加载时，初始化
	//$scope.$on('$viewContentLoaded',function() {
		Metronic.initAjax(); 
		// set default layout mode
		$rootScope.settings.layout.pageBodySolid = false;
		$rootScope.settings.layout.pageSidebarClosed = false;
		$scope.vo = {};

		//初始化省市区三级联动
//		initCitySelector('city-select','common/getProvinceCityArea.action');

		//获取类目列表
        {
            $http.post('common/findAllProductCategoryPs.action').success(function(result) {
                if (result.result == 'success') {
                    $scope.vm.categoryList = result.datas.dataList;
                }
            }).error(function(error) {
                console.log('获取类目信息:'+error);
            });
        }
        
        //$scope.productInfoSpecificationList = {};
        

		$scope.vm = {
			pages : {
				itemsPerPage : 20,
				index : 1,
				totalResult : 0,
				totalPage : 0
			},
			items:[]
		};
		
//		$scope.checkAll = function(){
//			angular.forEach($scope.vm.items,function(item){
//				item.selected = true;
//			});
//		}
		
		//获取产品列表
        $scope.getList = function() {
        	//显示加载中……
			pagedataLoading.loading();
			
        	$scope.vo.province = params.param.city.province;
        	$scope.vo.city = params.param.city.city;
        	$scope.vo.county = params.param.city.county;
        	
//        	var idList = [].concat(params.param.idList);
        	var idList = [];
        	angular.forEach(params.param.idList,function(id){
        		if(angular.isNumber(id)){
        			idList.push(id);
        		}else{
        				idList.push(parseInt(id));
        		}
        	});
        	
//        	$http.post('product/findProductSkuQueryEnabledList/' + $scope.vm.pages.index +'.action',$scope.vo).success(function(data){
        	$http.post('product/findProductSkuQueryList/' + $scope.vm.pages.index +'.action',$scope.vo).success(function(data){
        		//console.log(data);
        		if(data.result=='success'){
//					$scope.vm.items = data.datas.dataList;
        			$scope.vm.items = [];
        			var tmpList = data.datas.dataList;
        			angular.forEach(tmpList,function(item){
        				var tmp = item.id;
        				if(angular.isString(tmp)){
        					tmp = parseInt(tmp);
        				}
        				
        				if(idList.indexOf(tmp) < 0){
        					item.isSelect = false;
        					$scope.vm.items.push(item);
        				}else{
        					item.isSelect = true;
        					$scope.vm.items.push(item);
        				}
        			});
        			
        			console.log('ori ids are');
        			console.log(idList);
        			console.log('new ids are');
        			console.log($scope.vm.items);
        			
					$scope.vm.pages.totalResult = data.datas.pager.recordCount;
//        			$scope.vm.pages.totalResult = $scope.vm.items.length;
					$scope.vm.pages.totalPage = data.datas.pager.totalPage;
        		}else if(data.result=='fail'){
        			ejpAlert.show(data.message);
				}else if(data.result=='error'){
					console.log(data.message);
					$rootScope.msg = data.message;
					// 跳转到错误页面
					//$location.path('/error.html');
				}
        	})
        	//隐藏加载中……
			pagedataLoading.unloading();
        };
        $scope.getList();
	//});
}]);

// 选择特定城市下的产品类目（仅限一级类目）
MetronicApp.controller("SelectCategoryByCityController",['pagedataLoading','$rootScope','$scope','params','$http','$modalInstance','ejpAlert',function(pagedataLoading,$rootScope,$scope,params,$http,$modalInstance,ejpAlert){
	// 确认按钮
	$scope.ok = function() {
		var selected = [];
		$('input[name="_checkbox"]:checked').each(function(){
			selected.push($scope.vm.items[$(this).attr("id")]);
		});
		//获取对象，返回对象数组
		$modalInstance.close(selected);
	}; 
	// 取消按钮
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
	
	$scope.searchClick = function(){
		$scope.vm.pages = {
			itemsPerPage : 20,
			index : 1,
			totalResult : 0,
			totalPage : 0
		};

		$scope.getList();
	};
	$scope.resetClick = function(){
		$scope.vo = {};
	};
	
	//页面加载时，初始化
	//$scope.$on('$viewContentLoaded',function() {
		Metronic.initAjax(); 
		// set default layout mode
		$rootScope.settings.layout.pageBodySolid = false;
		$rootScope.settings.layout.pageSidebarClosed = false;
		$scope.vo = {
				city:{}
		};

		$scope.vm = {
			pages : {
				itemsPerPage : 20,
				index : 1,
				totalResult : 0,
				totalPage : 0
			},
			items:[]
		};
		
		//获取产品类目列表
        $scope.getList = function() {
        	
        	//加载中……
			pagedataLoading.loading();
			
        	$scope.vo.city.province = params.param.city.province;
        	$scope.vo.city.city = params.param.city.city;
        	$scope.vo.city.county = params.param.city.county;
        	
        	var idList = [].concat(params.param.idList);
        	
        	
        	$http.post('category/findCityCategoryList/'+$scope.vm.pages.index+'.action',$scope.vo).success(function(data){
        		//console.log(data);
        		if(data.result=='success'){
//					$scope.vm.items = data.datas.dataList;
        			$scope.vm.items = [];
        			var tmpList = data.datas.dataList;
        			angular.forEach(tmpList,function(item){
        				if(idList.indexOf(item.id) < 0){
        					$scope.vm.items.push(item);
        				}
        			});
        			
        			console.log('ori ids are');
        			console.log(idList);
        			console.log('new ids are');
        			console.log($scope.vm.items);
        			
//					$scope.vm.pages.totalResult = data.datas.pager.recordCount;
					$scope.vm.pages.totalResult = $scope.vm.items.length;//data.datas.pager.recordCount;
					$scope.vm.pages.totalPage = data.datas.pager.totalPage;
        		}else if(data.result=='fail'){
        			ejpAlert.show(data.message);
				}else if(data.result=='error'){
					console.log(data.message);
					$rootScope.msg = data.message;
					// 跳转到错误页面
					//$location.path('/error.html');
				}
        	})
        	
        	//隐藏加载中……
			pagedataLoading.unloading();
        };
        $scope.getList();
	//});
}]);

//选择特定城市下的活动规则
MetronicApp.controller("SelectRuleByCityController",['pagedataLoading','$rootScope','$scope','params','$http','$modalInstance','ejpAlert',function(pagedataLoading,$rootScope,$scope,params,$http,$modalInstance,ejpAlert){
	// 确认按钮
	$scope.ok = function() {
		var selected = [];
		$('input[name="_radio"]:checked').each(function(){
			selected.push($scope.vm.items[$(this).attr("id")]);
		});
		//获取对象，返回对象数组
		$modalInstance.close(selected);
	}; 
	// 取消按钮
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
	
	$scope.searchClick = function(){
		$scope.vm.pages = {
			itemsPerPage : 20,
			index : 1,
			totalResult : 0,
			totalPage : 0
		};

		$scope.getList();
	};
	$scope.resetClick = function(){
		$scope.vo = {};
	};
	
	//页面加载时，初始化
	//$scope.$on('$viewContentLoaded',function() {
		Metronic.initAjax(); 
		// set default layout mode
		$rootScope.settings.layout.pageBodySolid = false;
		$rootScope.settings.layout.pageSidebarClosed = false;
		$scope.vo = {};

		//初始化省市区三级联动
//		initCitySelector('city-select','common/getProvinceCityArea.action');

		//获取类目列表
        {
            $http.post('common/findAllProductCategoryPs.action').success(function(result) {
                if (result.result == 'success') {
                    $scope.vm.categoryList = result.datas.dataList;
                }
            }).error(function(error) {
                console.log('获取类目信息:'+error);
            });
        }
        
        //$scope.productInfoSpecificationList = {};
        

		$scope.vm = {
			pages : {
				itemsPerPage : 20,
				index : 1,
				totalResult : 0,
				totalPage : 0
			},
			items:[]
		};
		
		$scope.checkAll = function(){
			angular.forEach($scope.vm.items,function(item){
				item.selected = true;
			});
		}
		
        $scope.getList = function() {
        	
        	//加载中……
			pagedataLoading.loading();
        	
        	$scope.vo.city = {};
        	$scope.vo.city.province = params.param.city.province;
        	$scope.vo.city.city = params.param.city.city;
        	$scope.vo.city.county = params.param.city.county;
        	
        	var idList = [];
        	angular.forEach(params.param.idList,function(id){
        		if(angular.isNumber(id)){
        			idList.push(id);
        		}else{
        				idList.push(parseInt(id));
        		}
        	});
        	
        	$http.post(params.param.url + $scope.vm.pages.index +'.action',$scope.vo).success(function(data){
        		//console.log(data);
        		if(data.result=='success'){
//					$scope.vm.items = data.datas.dataList;
        			$scope.vm.items = [];
        			var tmpList = data.datas.dataList;
        			angular.forEach(tmpList,function(item){
        				var tmp = item.id;
        				if(angular.isString(tmp)){
        					tmp = parseInt(tmp);
        				}
        				
        				if(idList.indexOf(tmp) < 0){
        					$scope.vm.items.push(item);
        				}
        			});
        			
        			console.log('ori ids are');
        			console.log(idList);
        			console.log('new ids are');
        			console.log($scope.vm.items);
        			
//					$scope.vm.pages.totalResult = data.datas.pager.recordCount;
        			$scope.vm.pages.totalResult = $scope.vm.items.length;
					$scope.vm.pages.totalPage = data.datas.pager.totalPage;
        		}else if(data.result=='fail'){
        			ejpAlert.show(data.message);
				}else if(data.result=='error'){
					console.log(data.message);
					$rootScope.msg = data.message;
					// 跳转到错误页面
					//$location.path('/error.html');
				}
        	})
        	
        	//隐藏加载中……
			pagedataLoading.unloading();
        };
        $scope.getList();
	//});
}]);

//选择特定城市下的用户
MetronicApp.controller("SelectUserByCityController",['pagedataLoading','$rootScope','$scope','params','$http','$modalInstance','ejpAlert',function(pagedataLoading,$rootScope,$scope,params,$http,$modalInstance,ejpAlert){
	// 确认按钮
	$scope.ok = function() {
		var selected = [];
		$('input[name="_checkbox"]:checked').each(function(){
			selected.push($scope.vm.items[$(this).attr("id")]);
		});
		//获取对象，返回对象数组
		$modalInstance.close(selected);
	}; 
	// 取消按钮
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
	
	$scope.searchClick = function(){
		$scope.vm.pages = {
			itemsPerPage : 20,
			index : 1,
			totalResult : 0,
			totalPage : 0
		};

		$scope.getList();
	};
	$scope.resetClick = function(){
		$scope.vo = {
				city:params.param.city
		};
	};
	
	//页面加载时，初始化
	//$scope.$on('$viewContentLoaded',function() {
		Metronic.initAjax(); 
		// set default layout mode
		$rootScope.settings.layout.pageBodySolid = false;
		$rootScope.settings.layout.pageSidebarClosed = false;
		$scope.vo = {};

		//初始化省市区三级联动
//		initCitySelector('city-select','common/getProvinceCityArea.action');

		//获取类目列表
        {
            $http.post('common/findAllProductCategoryPs.action').success(function(result) {
                if (result.result == 'success') {
                    $scope.vm.categoryList = result.datas.dataList;
                }
            }).error(function(error) {
                console.log('获取类目信息:'+error);
            });
        }
        
        //$scope.productInfoSpecificationList = {};
        

		$scope.vm = {
			pages : {
				itemsPerPage : 20,
				index : 1,
				totalResult : 0,
				totalPage : 0
			},
			items:[]
		};
		
//		$scope.checkAll = function(){
//			angular.forEach($scope.vm.items,function(item){
//				item.selected = true;
//			});
//		}
		
		//获取产品列表
        $scope.getList = function() {
        	
        	//加载中……
			pagedataLoading.loading();
        	
//        	$scope.vo.province = params.param.city.province;
//        	$scope.vo.city = params.param.city.city;
//        	$scope.vo.county = params.param.city.county;
        	$scope.vo.city = params.param.city;
        	
//        	var idList = [].concat(params.param.idList);
        	var idList = [];
        	angular.forEach(params.param.idList,function(id){
        		if(angular.isNumber(id)){
        			idList.push(id);
        		}else{
        				idList.push(parseInt(id));
        		}
        	});
        	
        	$http.post('bizUser/findBizUserList/' + $scope.vm.pages.index +'.action',$scope.vo).success(function(data){
        		//console.log(data);
        		if(data.result=='success'){
//					$scope.vm.items = data.datas.dataList;
        			$scope.vm.items = [];
        			var tmpList = data.datas.dataList;
        			angular.forEach(tmpList,function(item){
        				var tmp = item.id;
        				if(angular.isString(tmp)){
        					tmp = parseInt(tmp);
        				}
        				
        				if(idList.indexOf(tmp) < 0){
        					$scope.vm.items.push(item);
        				}
        			});
        			
        			console.log('ori ids are');
        			console.log(idList);
        			console.log('new ids are');
        			console.log($scope.vm.items);
        			
//					$scope.vm.pages.totalResult = data.datas.pager.recordCount;
        			$scope.vm.pages.totalResult = $scope.vm.items.length;
					$scope.vm.pages.totalPage = data.datas.pager.totalPage;
        		}else if(data.result=='fail'){
        			ejpAlert.show(data.message);
				}else if(data.result=='error'){
					console.log(data.message);
					$rootScope.msg = data.message;
					// 跳转到错误页面
					//$location.path('/error.html');
				}
        	})
        	
        	//隐藏加载中……
			pagedataLoading.unloading();
        };
        $scope.getList();
	//});
}]);

//选择特定城市下的产品sku(业务规则)
MetronicApp.controller("SelectProductOfRuleController",['pagedataLoading','$rootScope','$scope','params','$http','$modalInstance','ejpAlert',function(pagedataLoading,$rootScope,$scope,params,$http,$modalInstance,ejpAlert){
	
	// 确认按钮
	$scope.ok = function() {
		var selected = [];
		$('input[name="_checkbox"]:checked').each(function(){
			selected.push($scope.vm.items[$(this).attr("id")]);
		});
		//获取对象，返回对象数组
		$modalInstance.close(selected);
	}; 
	
	// 取消按钮
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
	
	$scope.searchClick = function(){
		$scope.vm.pages = {
			itemsPerPage : 20,
			index : 1,
			totalResult : 0,
			totalPage : 0
		};

		$scope.getList();
	};
	$scope.resetClick = function(){
		$scope.vo = {
		};
	};
	
	//页面加载时，初始化
	//$scope.$on('$viewContentLoaded',function() {
		Metronic.initAjax(); 
		// set default layout mode
		$rootScope.settings.layout.pageBodySolid = false;
		$rootScope.settings.layout.pageSidebarClosed = false;
		$scope.vo = {};

		//初始化省市区三级联动
//		initCitySelector('city-select','common/getProvinceCityArea.action');

		//获取类目列表
        {
            $http.post('common/findAllProductCategoryPs.action').success(function(result) {
                if (result.result == 'success') {
                    $scope.vm.categoryList = result.datas.dataList;
                }
            }).error(function(error) {
                console.log('获取类目信息:'+error);
            });
        }
        
        //$scope.productInfoSpecificationList = {};
        

		$scope.vm = {
			pages : {
				itemsPerPage : 20,
				index : 1,
				totalResult : 0,
				totalPage : 0
			},
			items:[]
		};
		
//		$scope.checkAll = function(){
//			angular.forEach($scope.vm.items,function(item){
//				item.selected = true;
//			});
//		}
		
		//获取产品列表
        $scope.getList = function() {
        	//显示加载中……
			pagedataLoading.loading();
			
        	$scope.vo.province = params.param.city.province;
        	$scope.vo.city = params.param.city.city;
        	$scope.vo.county = params.param.city.county;
        	
//        	var idList = [].concat(params.param.idList);
        	var idList = [];
        	angular.forEach(params.param.idList,function(id){
        		if(angular.isNumber(id)){
        			idList.push(id);
        		}else{
        				idList.push(parseInt(id));
        		}
        	});
        	
//        	$http.post('product/findProductSkuQueryEnabledList/' + $scope.vm.pages.index +'.action',$scope.vo).success(function(data){
        	$http.post(params.param.url + $scope.vm.pages.index +'.action',$scope.vo).success(function(data){
        		//console.log(data);
        		if(data.result=='success'){
//					$scope.vm.items = data.datas.dataList;
        			$scope.vm.items = [];
        			var tmpList = data.datas.dataList;
        			angular.forEach(tmpList,function(item){
        				var tmp = item.id;
        				if(angular.isString(tmp)){
        					tmp = parseInt(tmp);
        				}
        				
        				if(idList.indexOf(tmp) < 0){
        					$scope.vm.items.push(item);
        				}
        			});
        			
        			console.log('ori ids are');
        			console.log(idList);
        			console.log('new ids are');
        			console.log($scope.vm.items);
        			
//					$scope.vm.pages.totalResult = data.datas.pager.recordCount;
        			$scope.vm.pages.totalResult = $scope.vm.items.length;
					$scope.vm.pages.totalPage = data.datas.pager.totalPage;
        		}else if(data.result=='fail'){
        			ejpAlert.show(data.message);
				}else if(data.result=='error'){
					console.log(data.message);
					$rootScope.msg = data.message;
					// 跳转到错误页面
					//$location.path('/error.html');
				}
        	})
        	//隐藏加载中……
			pagedataLoading.unloading();
        };
        $scope.getList();
	//});
}]);


/***
//grid service
MetronicApp.service('gridService', ['$http','$q', function($http, $q) {

    this.loadData = function(params) {
        var deffered = $q.defer();
        $http.post('getProductList.action', params, {
            withCredentials: true
        }).success(function(data) {
            deffered.resolve(data);
        }).error(function(data) {
            deffered.reject("error")；
        })
    }

    this.pageChanged = function(params) {
        loadData(params);
    }

    this.search = function() {
        loadData(params)

    }

    this.resetForm = function() {

    }

}]);

***/

/**
 * securityService.js
 */
MetronicApp.service('securityService', ['$rootScope', function ($rootScope) {
	this.setUserInfo = function(cookieName) {
		var search = cookieName + "="
		var returnvalue = "";
		if (document.cookie.length > 0) {
			offset = document.cookie.indexOf(search);
			if (offset != -1) {
				offset += search.length
				end = document.cookie.indexOf(";",
						offset);
				if (end == -1)
					end = document.cookie.length;
				returnvalue = decodeURIComponent(document.cookie.substring(offset, end));
				// unescape(document.cookie.substring(offset,
				// end))
			}
		}
		$rootScope.currentUserInfo = JSON.parse(returnvalue);
		return returnvalue;
	};
}]);

MetronicApp.service('utilService', ['$http', function($http) {

    //把obj的json数组添加target的json数组
    this.unionJSON = function(target, obj) {
        for (var i = 0; i < obj.length; i++) {
            target.push(obj[i]);
        }
    }

    //判断item对象的attr属性是否存在于一个json数组
    this.isExist = function(target, item, attr) {
        var val = item.attr;
        for (var i = 0; i < target.length; i++) {
            var cur = obj[i].attr;
            if (cur == val) {
                return true;
            } else {
                return false;
            }
        }
    }

    this.formatDate = function(stamp) {
        var stamp = new Date(stamp);
        var year = stamp.getFullYear();
        var month = stamp.getMonth() + 1;
        var date = stamp.getDate();
        var hour = stamp.getHours();
        var minute = stamp.getMinutes();
        var second = stamp.getSeconds();
        return year + "-" + month + "-" + date
    }
}]);

//获取用户Cookie信息
MetronicApp.service('getUserInfo',function(){
	var getUserInfo=function getCookieVal(cookieName) {
        var search = cookieName+"=";
        var returnvalue = "";
        if (document.cookie.length > 0) {
            offset = document.cookie.indexOf(search);
            if (offset != -1) {
                offset += search.length
                end = document.cookie.indexOf(";",
                    offset);
                if (end == -1)
                    end = document.cookie.length;
                returnvalue = decodeURIComponent(document.cookie
                    .substring(offset, end));
                // unescape(document.cookie.substring(offset,
                // end))
            }
        }
        return returnvalue;
    };
    return {
    	userInfo:function(){
    		user=getUserInfo('YJP_PARTNER_UserInfo');
    		if(user==undefined||user==''){
    			return null;
    		}
    		return JSON.parse(user);
    	}
    }
});

//等待数据加载
MetronicApp.service('pagedataLoading',function(){
	this.loading = function(){
		Metronic.blockUI({
			target: '#datatable_ajax',
			boxed: true
		});
	}
	this.unloading = function(){
		Metronic.unblockUI('#datatable_ajax');
	}
});




//数据存取帮助服务
MetronicApp.service('dataHelper',function(){
	
	this.setObject = function(key,value){
		$.cookie(key, JSON.stringify(value)); 
	}
	this.getObject = function(key){
		var k = $.cookie(key);
		if(k == undefined || k == null || k == ''){
			return null;
		}
		return JSON.parse($.cookie(key));
	}
	
	this.setString = function(key,value){
		$.cookie(key, value); 
	}
	this.getString = function(key){
		return $.cookie(key);;
	}
});



//合作商结算，计算结算金额
MetronicApp.service('CalculateSettleAmount', ['$cacheFactory','$location',function($cacheFactory,$location) {

    this.getSettleResult = function(settleList) {
    	if(settleList.length<0){
    		return settleList;
    	}
    	/**
    	 * 结算算法 描述 （异或运算，两者相同收配送，两者不同看收款，酒批收款取差额，大商收款算总额）
    	 *    收款方       取货方（谁的货）    算法
    	 *    酒批          酒批          收合作商配送费 
    	 *    酒批          合作商         配送费 - 商品金额
    	 *    合作商         酒批          配送费 + 商品金额
    	 *    合作商         合作商        收合作商配送费  
    	 */
        angular.forEach(settleList,function(item){
        	if(item.payee==0){//收款方是酒批  结算金额为 配送费 - 商品金额
        		if(item.pickupType==0){ //酒批的货
        			item.settleAmount = Number(item.deliveryAmount).toFixed(2);
        		}
                if(item.pickupType==1){ // 合作商的货
                	item.settleAmount = (Number(item.deliveryAmount) - Number(item.payAmount)).toFixed(2);
        		}
        	}
            if(item.payee==1){//收款方是合作商  结算金额为 配送费
	            if(item.pickupType==0){ //酒批的货
	            	item.settleAmount = (Number(item.deliveryAmount) + Number(item.payAmount)).toFixed(2);
        		}
                if(item.pickupType==1){ // 合作商的货
                	item.settleAmount = item.deliveryAmount;
        		}
        	}
        });    
    	return angular.copy(settleList);
    }
}]);
