MetronicApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        // 默认跳转路径
        $urlRouterProvider.otherwise("/dept_list.html");

        $stateProvider
        //言论管理
            .state('dept_manage', {
                ncyBreadcrumb: {
                    label: '言论管理'
                }
            })
            //言论信息列表
            .state(
                'dept_list',
                {
                    url: "/dept_list.html",
                    templateUrl: "views/dept/dept_list.html",
                    data: {
                        pageTitle: '言论信息管理'
                    },
                    ncyBreadcrumb: {
                        label: '言论信息管理',
                        parent: 'dept_manage'
                    },
                    controller: "deptController",
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
                                            'js/controllers/dept/deptController.js']
                                    }]);
                            }]
                    }
                })
            //新增言论
            .state(
                'dept_add',
                {
                    url: "/dept_add.html",
                    templateUrl: "views/dept/dept_add.html",
                    data: {
                        pageTitle: '新增言论'
                    },
                    ncyBreadcrumb: {
                        label: '新增言论',
                        parent: 'dept_manage'
                    },
                    controller: "addDeptController",
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
                                            'js/controllers/dept/deptController.js']
                                    }]);
                            }]
                    }
                })
            //言论信息编辑
            .state(
                'dept_edit',
                {
                    url: "/dept_edit/:id",
                    templateUrl: "views/dept/dept_edit.html",
                    data: {
                        pageTitle: '编辑言论信息'
                    },
                    ncyBreadcrumb: {
                        label: '编辑言论信息',
                        parent: 'dept_manage'
                    },
                    controller: "editDeptController",
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
                                            'js/controllers/dept/deptController.js']
                                    }]);
                            }]
                    }
                })
                //言论详细信息
            .state(
                'dept_detail',
                {
                    url: "/dept_detail/:id",
                    templateUrl: "views/dept/dept_detail.html",
                    data: {
                        pageTitle: '言论详细信息'
                    },
                    ncyBreadcrumb: {
                        label: '言论详细信息',
                        parent: 'dept_manage'
                    },
                    controller: "detailDeptController",
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
                                            'js/controllers/dept/deptController.js']
                                    }]);
                            }]
                    }
                })
    }]);