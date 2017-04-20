/*******************************************************************************
 * Metronic AngularJS App Main Script
 ******************************************************************************/

/* Metronic App */
var MetronicApp = angular.module("MetronicApp", [ "ui.router", "ui.bootstrap",
		"oc.lazyLoad", "ngSanitize", "pasvaz.bindonce", "ngMessages",
		"blockUI","toastr", "ncy-angular-breadcrumb" ]);

/* Configure ocLazyLoader(refer: https://github.com/ocombe/ocLazyLoad) */
MetronicApp.config([ '$ocLazyLoadProvider', function($ocLazyLoadProvider) {
	$ocLazyLoadProvider.config({
	// global configs go here
	});
} ]);

/* Configure angular-block-ui */
MetronicApp.config([ 'blockUIConfig', function(blockUIConfig) {
	// Change the default overlay message
	blockUIConfig.message = '加载中...';

	// Change the default delay to 100ms before the blocking is visible
	blockUIConfig.delay = 100;

	// Disable automatically blocking of the user interface
	blockUIConfig.autoBlock = false;

	// Disable auto body block
	blockUIConfig.autoInjectBodyBlock = false;

	// Provide the custom template via a url
	blockUIConfig.templateUrl = 'shared/block-ui-tpl.html';

} ]);

/* Configure angular-breadscrumb */
MetronicApp.config(function($breadcrumbProvider) {
	$breadcrumbProvider.setOptions({
		prefixStateName : 'dashboard',
		templateUrl : 'shared/breadscrumb-tpl.html'
	});
})

/*******************************************************************************
 * BEGIN: BREAKING CHANGE in AngularJS v1.3.x:
 ******************************************************************************/
/**
 * `$controller` will no longer look for controllers on `window`. The old
 * behavior of looking on `window` for controllers was originally intended for
 * use in examples, demos, and toy apps. We found that allowing global
 * controller functions encouraged poor practices, so we resolved to disable
 * this behavior by default.
 * 
 * To migrate, register your controllers with modules rather than exposing them
 * as globals:
 * 
 * Before:
 * 
 * ```javascript function MyController() { // ... } ```
 * 
 * After:
 * 
 * ```javascript angular.module('myApp', []).controller('MyController',
 * [function() { // ... }]);
 * 
 * Although it's not recommended, you can re-enable the old behavior like this:
 * 
 * ```javascript angular.module('myModule').config(['$controllerProvider',
 * function($controllerProvider) { // this option might be handy for migrating
 * old apps, but please don't use it // in new ones!
 * $controllerProvider.allowGlobals(); }]);
 */

// AngularJS v1.3.x workaround for old style controller declarition in HTML
MetronicApp.config([ '$controllerProvider', function($controllerProvider) {
	// this option might be handy for migrating old apps, but please don't use
	// it
	// in new ones!
	$controllerProvider.allowGlobals();
} ]);

/*******************************************************************************
 * END: BREAKING CHANGE in AngularJS v1.3.x:
 ******************************************************************************/

/*******************************************************************************
 * config httpProvider add myIterceptors
 ******************************************************************************/
MetronicApp.config([ '$httpProvider', function($httpProvider) {
	$httpProvider.interceptors.push(['$rootScope','$location', '$q','toastr','getUserInfo',function($rootScope,$location,$q,toastr,getUserInfo) {
      return {

     	response:function(resp){
    		
			//统一处理响应数据
			if('fail'=== resp.data.result){
				toastr.info(resp.data.message, 'Info');
				delete resp.data.result;
			}else if('error' === resp.data.result){
				toastr.error(resp.data.message, 'Error');
				delete resp.data.result;
			}else if('success'=== resp.data.result){
				delete resp.data.detailMessage;
			}else if('failure'===resp.data.result){
				toastr.error(resp.data.message, 'Error');
				$location.path('/dashboard.html');
			}
			return resp;
		},
        responseError: function (rejection) {
        	// 取消正在加载
            Metronic.unblockUI();
            if (rejection.status === 403) {
                $log.error("访问被拒绝：" + rejection.config.url);
                toastr.warning(rejection.data.message, "警告", {
                    timeOut: 10000,
                    preventOpenDuplicates: true,
                    onHidden: function () {
                        var redirectURI = rejection.headers("redirectURI");
                        if (redirectURI) {
                            if (rejection.data.message.indexOf("登录后访问") > 0) {
                                window.location = redirectURI;
                            }
                        }
                    }
                });
                return rejection;
            }
            if (rejection) {
                if (rejection.status === 404) {
                    $rootScope.msg = "请求资源不存在：" + rejection.config.url;
                    $location.path('/error.html');
                }
            } else {
                $rootScope.msg = "未知问题，请联系运维人员！";
                $location.path('/error.html');
            }
            return rejection;
        }
		};
	}]);
} ]);

/* Setup App Main Controller */
MetronicApp.controller('AppController', [ '$scope', '$rootScope',
		function($scope, $rootScope) {
			$scope.$on('$viewContentLoaded', function() {
				Metronic.initComponents(); // init core components
				// Layout.init(); // Init entire layout(header, footer, sidebar,
				// etc) on page load if the partials included in server side
				// instead of loading with ng-include directive
			});
		} ]);

/*******************************************************************************
 * Layout Partials. By default the partials are loaded through AngularJS
 * ng-include directive. In case they loaded in server side(e.g: PHP include
 * function) then below partial initialization can be disabled and Layout.init()
 * should be called on page load complete as explained above.
 ******************************************************************************/

/* Setup Layout Part - Header */
MetronicApp.controller('HeaderController', [ '$scope', '$http', '$log','$location',
		'modalService','$modal','getUserInfo', function($scope, $http, $log,$location, modalService,$modal,getUserInfo) {
			$scope.$on('$includeContentLoaded', function() {
				Layout.initHeader(); // init header
				$scope.vo = {};
				$scope.logout=function(){
					window.location = "login.html";
				};
				var userInfo = $scope.userInfo = getUserInfo.userInfo();
				if(userInfo){
					if(userInfo.userPower==1){
						$scope.vo.userRole='员工';
					}
					if(userInfo.userPower==2){
						$scope.vo.userRole='部门主管';
					}
					if(userInfo.userPower==3){
						$scope.vo.userRole='管理员';
					}
				$scope.userInfo={trueName:userInfo.userName}
				$scope.open = function() {
					modalService.openModal({
						'url' : 'views/modals/common/swapRoleModal.html',
						'ctrl' : ModalSwapRoleCtrl,
						'size' : 'sm',
						responseSuccess : function(result) {
							if (result == 'success') {
								window.location = "index.html";
							}
						},
						responseError : function(reason) {
							$log.info('Modal dismissed at: ' + new Date());
						}
					});
				};
				}else {
					$scope.logout();
				}
				
				$scope.upDatePassword = function() {
			        //创建修改密码弹框
			        var modalInstance = $modal.open({
			            templateUrl: 'views/modals/common/upDateUserPassword.html',
			            controller: 'upDateUserPasswordCtrl',
			            size: 'md',
			            resolve: {
			                items: function() {
			                    return {};
			                }
			            }
			        });
			        modalInstance.result.then(
				        function(result){    	
							if (result == 'success') {
								window.location = "index.html";
							}			        	
				        },function(errMsg){
				        	$log.info('Modal dismissed at: ' + new Date());
				        }		
			        );					
				};
				
				
			});
		} ]).controller("upDateUserPasswordCtrl",["$rootScope","$scope", "$location","$http", "$modalInstance","getUserInfo", "ejpAlert",function ($rootScope,$scope,$location, $http, $modalInstance,getUserInfo,ejpAlert) {
			//修改用户密码

			var identity = getUserInfo.userInfo();
			$scope.result={};
			
			$scope.upDatePassword = function(obj) {
				if(obj.newPwd!=obj.newPwd1){
					ejpAlert.show("两次密码不一致！");
					return;
				}
				
				if(obj.newPwd.length < 6){
					ejpAlert.show("密码至少为6位字符！");
					return;
				}
			
				var dto={
					'oldPwd':obj.oldPwd,
					'newPwd':obj.newPwd,
					'userId':identity.userId
				};
				$http.post('user/changePasswordByOldPassword',dto).success(
					function(data) {
						if(data.result=='success'){
							ejpAlert.show("修改成功！");
							$modalInstance.close(data);
						}else if(data.result=='fail'){
							ejpAlert.show(data.message);
						}else if(data.result=='error'){
							$rootScope.msg = data.message;
							// 跳转到错误页面
							$location.path('/error.html');
						}
					});
			};
			$scope.cancel=function(){
				$modalInstance.close();
			}	
		}]);

function ModalSwapRoleCtrl($scope, $http, $modalInstance) {

	var search = 'YJP_PARTNER_UserInfo' + "=";
	var returnvalue = "";
	if (document.cookie.length > 0) {
		offset = document.cookie.indexOf(search);
		if (offset != -1) {
			offset += search.length
			end = document.cookie.indexOf(";", offset);
			if (end == -1)
				end = document.cookie.length;
			returnvalue = decodeURIComponent(document.cookie.substring(offset,
					end));
			// unescape(document.cookie.substring(offset,
			// end))
		}
	}
	$scope.userInfo = JSON.parse(returnvalue);
	console.log($scope.userInfo);
	var formData = $scope.formData = {};

	$scope.formData.UserIdentityVOList = $scope.userInfo.authList;

	var checkedItem = null;

	$scope.checkedChange = function(item) {
		checkedItem = item;
	}

	$scope.ok = function() {
		if (checkedItem != null
				&& (checkedItem.roleType != $scope.userInfo.userRole||checkedItem.cityOrg.id!=$scope.userInfo.city.city_Id)) {
			// 写cookie操作
			// var exp = new Date(); //当前时间
			// exp.setTime(exp.getTime() - 1);
			// var cval=getCookie(name);
			
			$scope.userInfo.userRole = checkedItem.roleType;
			//设置用户授权城市
			$scope.userInfo.city.province=checkedItem.cityOrg.province;
			$scope.userInfo.city.city=checkedItem.cityOrg.city;
			$scope.userInfo.city.county=checkedItem.cityOrg.county;
			$scope.userInfo.city.city_Id=checkedItem.cityOrg.id;
			$scope.userInfo.orgId=checkedItem.cityOrg.id;
			
			console.log($scope.userInfo);
			
			document.cookie = 'YJP_PARTNER_UserInfo' + "="
					+ JSON.stringify($scope.userInfo);
			$modalInstance.close('success');
		} else {
			$modalInstance.dismiss('cancel');
		}
	};

	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
}

MetronicApp.run(["$rootScope", "settings", "$state",
                 function ($rootScope, settings, $state) {
                     $rootScope.$state = $state; // state to be accessed from view
                 }]);

             /* Setup Rounting For All Pages */
             MetronicApp
                 .config([
                     '$stateProvider',
                     '$urlRouterProvider',
                     function ($stateProvider, $urlRouterProvider) {
                         // Redirect any unmatched url
                         $urlRouterProvider.otherwise("/dashboard.html");

                         $stateProvider
                             .state(
                                 'dashboard',
                                 {
                                     url: "/dashboard.html",
                                     templateUrl: "views/dashboard.html",
                                     data: {
                                         pageTitle: '首页'
                                     },
                                     ncyBreadcrumb: {
                                         label: '<i class="fa fa-home"></i>首页',
                                     },
                                     controller: "DashboardController",
                                     resolve: {
                                         deps: [
                                             '$ocLazyLoad',
                                             function ($ocLazyLoad) {
                                                 return $ocLazyLoad
                                                     .load({
                                                         name: 'MetronicApp',
                                                         insertBefore: '#ng_load_plugins_before', // load
                                                         files: [
                                                             '../assets/global/plugins/bootstrap-daterangepicker/daterangepicker-bs3.css',
                                                             '../assets/amcharts/angular-chart.css',
                                                             '../assets/pages/scripts/index.js',
                                                             '../assets/amcharts/angular-chart.js',
                                                             'js/controllers/DashboardController.js'

                                                         ]
                                                     });
                                             }]
                                     }
                                 })

                             // 错误页
                             .state(
                                 'error',
                                 {
                                     url: "/error.html",
                                     templateUrl: "shared/error.html",
                                     data: {
                                         pageTitle: '出错了'
                                     },
                                     ncyBreadcrumb: {
                                         // label : '<i class="fa
                                         // fa-home"></i>首页',
                                     },
                                     controller: "ErrorController",
                                     resolve: {
                                         deps: [
                                             '$ocLazyLoad',
                                             function ($ocLazyLoad) {
                                                 return $ocLazyLoad
                                                     .load({
                                                         name: 'MetronicApp',
                                                         insertBefore: '#ng_load_plugins_before', // load
                                                         files: ['js/controllers/ErrorController.js']
                                                     });
                                             }]
                                     }
                                 })

                     }]);

/* Setup Layout Part - Sidebar */
MetronicApp.controller('SidebarController', [
		'$scope',
		'$http',
		function($scope, $http) {
			$scope.$on('$includeContentLoaded', function() {
				Layout.initSidebar(); // init sidebar
			});

			$scope.sidebarList = {};

			// 读取Cookie
			
			var search = 'YJP_PARTNER_UserInfo' + "=";
			var returnvalue = "";
			if (document.cookie.length > 0) {
				offset = document.cookie.indexOf(search);
				if (offset != -1) {
					offset += search.length
					end = document.cookie.indexOf(";", offset);
					if (end == -1)
						end = document.cookie.length;
					returnvalue = decodeURIComponent(document.cookie.substring(offset,
							end));
					// unescape(document.cookie.substring(offset,
					// end))
				}
			}

			
			$scope.getSidebarList = function() {		
				$http.post('findUserPrivilegeList.action').success(
						function(data) {
							$scope.sidebarList = data.datas.dataList;
						}).error(function() {
					console.log("error");
				})
			};
			$scope.getSidebarList();
		} ]);

/* Setup Layout Part - Footer */
MetronicApp.controller('FooterController', [ '$scope', function($scope) {
	$scope.$on('$includeContentLoaded', function() {
		Layout.initFooter(); // init footer
	});
} ]);

/* Init global settings and run the app */
MetronicApp.run([ "$rootScope", "settings", "$state",
		function($rootScope, settings, $state) {
			$rootScope.$state = $state; // state to be accessed from view
		} ]);

