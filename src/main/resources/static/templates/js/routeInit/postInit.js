MetronicApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        // 默认跳转路径
        $urlRouterProvider.otherwise("/post_list.html");

        $stateProvider
            //用户信息列表
            .state(
                'post_list',
                {
                    url: "/post_list.html",
                    templateUrl: "views/post/post_list.html",
                    data: {
                        pageTitle: '职位管理'
                    },
                    ncyBreadcrumb: {
                        label: '职位管理',
                    },
                    controller: "postController",
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
                                            'js/controllers/post/postController.js']
                                    }]);
                            }]
                    }
                })
            //新增用户
            .state(
                'post_add',
                {
                    url: "/post_add.html",
                    templateUrl: "views/post/post_add.html",
                    data: {
                        pageTitle: '职位新增'
                    },
                    ncyBreadcrumb: {
                        label: '职位新增',
                        parent: 'post_list'
                    },
                    controller: "addPostController",
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
                                            'js/controllers/post/postController.js']
                                    }]);
                            }]
                    }
                })
            //用户信息编辑
            .state(
                'post_edit',
                {
                    url: "/post_edit/:id",
                    templateUrl: "views/post/post_edit.html",
                    data: {
                        pageTitle: '职位编辑'
                    },
                    ncyBreadcrumb: {
                        label: '职位编辑',
                        parent: 'post_list'
                    },
                    controller: "editPostController",
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
                                            'js/controllers/post/postController.js']
                                    }]);
                            }]
                    }
                })
                //用户详细信息
            .state(
                'post_detail',
                {
                    url: "/post_detail/:id",
                    templateUrl: "views/post/post_detail.html",
                    data: {
                        pageTitle: '职位详细'
                    },
                    ncyBreadcrumb: {
                        label: '职位详细',
                        parent: 'post_list'
                    },
                    controller: "detailPostController",
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
                                            'js/controllers/post/postController.js']
                                    }]);
                            }]
                    }
                })
    }]);