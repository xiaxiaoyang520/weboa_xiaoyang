/**
 * 已登录用户的信息
 */
MetronicApp
		.config([
				'$stateProvider',
				'$urlRouterProvider',
				function($stateProvider, $urlRouterProvider) {
					
					$stateProvider
									//============================= 已登录用户的信息=========================
									.state('userMessage',{
										url:'/userMessage.html',
										templateUrl: 'shared/userMessage.html',
										data : {
											pageTitle : '已登录用户的信息'
										},
										ncyBreadcrumb : {
											label : '已登录用户的信息'
										},
										controller:'userMessageController',
										resolve : {
											deps : [
													'$ocLazyLoad',
													function($ocLazyLoad) {
														return $ocLazyLoad
																.load([ {
																	name : 'MetronicApp',
																	insertBefore : '#ng_load_plugins_before',
																	files : [
																			'../assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css',
																			'../assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
																			'../assets/global/plugins/jquery.cityselect.js',
																			'../assets/global/plugins/jquery.cityselect.init.js',
																			'js/controllers/userMessageController.js' ]
																} ]);
													} ]
										}
									})
				}])