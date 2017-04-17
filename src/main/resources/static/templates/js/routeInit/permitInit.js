MetronicApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        // 默认跳转路径
        $urlRouterProvider.otherwise("/permit_list.html");

        $stateProvider
            //审核列表
            .state(
                'permit_list',
                {
                    url: "/permit_list.html",
                    templateUrl: "views/permit/permit_list.html",
                    data: {
                        pageTitle: '审核列表'
                    },
                    ncyBreadcrumb: {
                        label: '审核列表',
                    },
                    controller: "permitController",
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
                                            'js/controllers/permit/permitController.js']
                                    }]);
                            }]
                    }
                })
            //发表言论
            .state(
                'permit_add',
                {
                    url: "/permit_add.html",
                    templateUrl: "views/permit/permit_add.html",
                    data: {
                        pageTitle: '审核提交'
                    },
                    ncyBreadcrumb: {
                        label: '审核提交',
                        parent: 'permit_list'
                    },
                    controller: "addPermitController",
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
                                            'js/controllers/permit/permitController.js']
                                    }]);
                            }]
                    }
                })
    }]);