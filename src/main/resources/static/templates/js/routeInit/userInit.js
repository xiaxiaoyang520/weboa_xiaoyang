MetronicApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        // 默认跳转路径
        $urlRouterProvider.otherwise("/user_list.html");

        $stateProvider
            //用户信息列表
            .state(
                'user_list',
                {
                    url: "/user_list.html",
                    templateUrl: "views/user/user_list.html",
                    data: {
                        pageTitle: '用户信息列表'
                    },
                    ncyBreadcrumb: {
                        label: '用户管理',
                    },
                    controller: "userController",
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([{
                                        name: 'MetronicApp',
                                        insertBefore: '#ng_load_plugins_before',
                                        files: [
                                            '../assets/global/plugins/select2/select2.css',
                                            '../assets/global/plugins/angularjs/plugins/ui-select/selectize.default.css',
                                            '../assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css',
                                            '../assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                                            '../assets/global/plugins/jquery.cityselect.js',
                                            '../assets/global/plugins/jquery.cityselect.init.js',
                                            '../assets/global/plugins/angularjs/angular-sanitize.js',
                                            'js/controllers/user/userController.js']
                                    }]);
                            }]
                    }
                })
            //新增用户
            .state(
                'user_add',
                {
                    url: "/user_add.html",
                    templateUrl: "views/user/user_add.html",
                    data: {
                        pageTitle: '用户新增'
                    },
                    ncyBreadcrumb: {
                        label: '用户新增',
                        parent: 'user_list'
                    },
                    controller: "addUserController",
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([{
                                        name: 'MetronicApp',
                                        insertBefore: '#ng_load_plugins_before',
                                        files: [
                                            '../assets/global/plugins/select2/select2.css',
                                            '../assets/global/plugins/angularjs/plugins/ui-select/selectize.default.css',
                                            '../assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css',
                                            '../assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                                            '../assets/global/plugins/jquery.cityselect.js',
                                            '../assets/global/plugins/jquery.cityselect.init.js',
                                            '../assets/global/plugins/angularjs/angular-sanitize.js',
                                            'js/controllers/user/userController.js']
                                    }]);
                            }]
                    }
                })
            //用户信息编辑
            .state(
                'user_edit',
                {
                    url: "/user_edit/:id",
                    templateUrl: "views/user/user_edit.html",
                    data: {
                        pageTitle: '用户编辑'
                    },
                    ncyBreadcrumb: {
                        label: '用户编辑',
                        parent: 'user_list'
                    },
                    controller: "editUserController",
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([{
                                        name: 'MetronicApp',
                                        insertBefore: '#ng_load_plugins_before',
                                        files: [
                                            '../assets/global/plugins/select2/select2.css',
                                            '../assets/global/plugins/angularjs/plugins/ui-select/selectize.default.css',
                                            '../assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css',
                                            '../assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                                            '../assets/global/plugins/jquery.cityselect.js',
                                            '../assets/global/plugins/jquery.cityselect.init.js',
                                            '../assets/global/plugins/angularjs/angular-sanitize.js',
                                            'js/controllers/user/userController.js']
                                    }]);
                            }]
                    }
                })
                //用户详细信息
            .state(
                'user_detail',
                {
                    url: "/user_detail/:id",
                    templateUrl: "views/user/user_detail.html",
                    data: {
                        pageTitle: '用户详情'
                    },
                    ncyBreadcrumb: {
                        label: '用户详情',
                        parent: 'user_list'
                    },
                    controller: "detailUserController",
                    resolve: {
                        deps: [
                            '$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad
                                    .load([{
                                        name: 'MetronicApp',
                                        insertBefore: '#ng_load_plugins_before',
                                        files: [
                                            '../assets/global/plugins/select2/select2.css',
                                            '../assets/global/plugins/angularjs/plugins/ui-select/selectize.default.css',
                                            '../assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css',
                                            '../assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                                            '../assets/global/plugins/jquery.cityselect.js',
                                            '../assets/global/plugins/jquery.cityselect.init.js',
                                            '../assets/global/plugins/angularjs/angular-sanitize.js',
                                            'js/controllers/user/userController.js']
                                    }]);
                            }]
                    }
                })
    }]);