MetronicApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        // 默认跳转路径
        $urlRouterProvider.otherwise("/dept_list.html");

        $stateProvider
            //部门管理
            .state(
                'dept_list',
                {
                    url: "/dept_list.html",
                    templateUrl: "views/dept/dept_list.html",
                    data: {
                        pageTitle: '部门管理'
                    },
                    ncyBreadcrumb: {
                        label: '部门管理',
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
            //新增部门
            .state(
                'dept_add',
                {
                    url: "/dept_add.html",
                    templateUrl: "views/dept/dept_add.html",
                    data: {
                        pageTitle: '部门新增'
                    },
                    ncyBreadcrumb: {
                        label: '部门新增',
                        parent: 'dept_list'
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
            //部门编辑
            .state(
                'dept_edit',
                {
                    url: "/dept_edit/:id",
                    templateUrl: "views/dept/dept_edit.html",
                    data: {
                        pageTitle: '部门编辑'
                    },
                    ncyBreadcrumb: {
                        label: '部门编辑',
                        parent: 'dept_list'
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
                        pageTitle: '部门详情'
                    },
                    ncyBreadcrumb: {
                        label: '部门详情',
                        parent: 'dept_list'
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