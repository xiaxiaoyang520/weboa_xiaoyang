MetronicApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        // 默认跳转路径
        $urlRouterProvider.otherwise("/attend_list.html");

        $stateProvider
            //考勤管理
            .state(
                'attend_list',
                {
                    url: "/attend_list.html",
                    templateUrl: "views/attend/attend_list.html",
                    data: {
                        pageTitle: '考勤列表'
                    },
                    ncyBreadcrumb: {
                        label: '考勤列表',
                    },
                    controller: "attendController",
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
                                            'js/controllers/attend/attendController.js']
                                    }]);
                            }]
                    }
                })
    }]);