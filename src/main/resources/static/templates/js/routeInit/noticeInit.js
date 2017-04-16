MetronicApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        // 默认跳转路径
        $urlRouterProvider.otherwise("/notice_list.html");

        $stateProvider
            //通知和公告
            .state(
                'notice_list',
                {
                    url: "/notice_list.html",
                    templateUrl: "views/notice/notice_list.html",
                    data: {
                        pageTitle: '通知和公告'
                    },
                    ncyBreadcrumb: {
                        label: '通知和公告',
                    },
                    controller: "noticeController",
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
                                            'js/controllers/notice/noticeController.js']
                                    }]);
                            }]
                    }
                })
            //发布通知和公告
            .state(
                'notice_add',
                {
                    url: "/notice_add.html",
                    templateUrl: "views/notice/notice_add.html",
                    data: {
                        pageTitle: '通知和公告发布'
                    },
                    ncyBreadcrumb: {
                        label: '通知和公告发布',
                        parent: 'notice_list'
                    },
                    controller: "addNoticeController",
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
                                            'js/controllers/notice/noticeController.js']
                                    }]);
                            }]
                    }
                })
                .state(
                'notice_detail',
                {
                    url: "/notice_detail/:id",
                    templateUrl: "views/notice/notice_detail.html",
                    data: {
                        pageTitle: '通知和公告详情'
                    },
                    ncyBreadcrumb: {
                        label: '通知和公告详情',
                        parent: 'notice_list'
                    },
                    controller: "detailNoticeController",
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
                                            'js/controllers/notice/noticeController.js']
                                    }]);
                            }]
                    }
                })
    }]);