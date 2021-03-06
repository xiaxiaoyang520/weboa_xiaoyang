MetronicApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        // 默认跳转路径
        $urlRouterProvider.otherwise("/speech_list.html");

        $stateProvider
            //言论信息列表
            .state(
                'speech_list',
                {
                    url: "/speech_list.html",
                    templateUrl: "views/speech/speech_list.html",
                    data: {
                        pageTitle: '言论列表'
                    },
                    ncyBreadcrumb: {
                        label: '言论列表',
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
            //发表言论
            .state(
                'speech_add',
                {
                    url: "/speech_add.html",
                    templateUrl: "views/speech/speech_add.html",
                    data: {
                        pageTitle: '言论发表'
                    },
                    ncyBreadcrumb: {
                        label: '言论发表',
                        parent: 'speech_list'
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
    }]);