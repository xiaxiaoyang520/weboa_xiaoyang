MetronicApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        // 默认跳转路径
        $urlRouterProvider.otherwise("/speech_list.html");

        $stateProvider
        //言论管理
            .state('speech_manage', {
                ncyBreadcrumb: {
                    label: '言论管理'
                }
            })
            //言论信息列表
            .state(
                'speech_list',
                {
                    url: "/speech_list.html",
                    templateUrl: "views/speech/speech_list.html",
                    data: {
                        pageTitle: '言论信息管理'
                    },
                    ncyBreadcrumb: {
                        label: '言论信息管理',
                        parent: 'speech_manage'
                    },
                    controller: "speechController",
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
                                            'js/controllers/speech/speechController.js']
                                    }]);
                            }]
                    }
                })
            //新增言论
            .state(
                'speech_add',
                {
                    url: "/speech_add.html",
                    templateUrl: "views/speech/speech_add.html",
                    data: {
                        pageTitle: '新增言论'
                    },
                    ncyBreadcrumb: {
                        label: '新增言论',
                        parent: 'speech_manage'
                    },
                    controller: "addSpeechController",
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
                                            'js/controllers/speech/speechController.js']
                                    }]);
                            }]
                    }
                })
            //言论信息编辑
            .state(
                'speech_edit',
                {
                    url: "/speech_edit/:id",
                    templateUrl: "views/speech/speech_edit.html",
                    data: {
                        pageTitle: '编辑言论信息'
                    },
                    ncyBreadcrumb: {
                        label: '编辑言论信息',
                        parent: 'speech_manage'
                    },
                    controller: "editSpeechController",
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
                                            'js/controllers/speech/speechController.js']
                                    }]);
                            }]
                    }
                })
                //言论详细信息
            .state(
                'speech_detail',
                {
                    url: "/speech_detail/:id",
                    templateUrl: "views/speech/speech_detail.html",
                    data: {
                        pageTitle: '言论详细信息'
                    },
                    ncyBreadcrumb: {
                        label: '言论详细信息',
                        parent: 'speech_manage'
                    },
                    controller: "detailSpeechController",
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
                                            'js/controllers/speech/speechController.js']
                                    }]);
                            }]
                    }
                })
    }]);