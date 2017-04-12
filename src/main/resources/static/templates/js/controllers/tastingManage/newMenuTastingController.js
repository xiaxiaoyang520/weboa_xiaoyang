/**
 * 小品会新菜单
 */
MetronicApp.controller("newMenuTastingController",
    ['$rootScope', '$scope', '$http', '$location', '$modal', 'pagedataLoading', 'ejpAlert',
        function ($rootScope, $scope, $http, $location, $modal, pagedataLoading, ejpAlert) {
            $scope.$on('$viewContentLoaded', function () {
                Metronic.initAjax();

                // set default layout mode
                $rootScope.settings.layout.pageBodySolid = false;
                $rootScope.settings.layout.pageSidebarClosed = false;

                $scope.vo = {
                };

                var vm = $scope.vm = {};
                // vm.pages = {
                //     itemsPerPage : 20,
                //     index :  1,
                //     totalResult : 0,
                //     totalPage : 0
                // };
                vm.items = [];

                // //初始化省市区三级联动
                // initCitySelector('city-select', 'common/getProvinceCityArea.action');

                $scope.getNewMenuTastingList = function () {
                    //显示加载中……
                    pagedataLoading.loading();
                    $http.post("tasting/queryTastingByDate/" + $scope.vo.queryTime).success(function (data) {
                        if (data.result === "success") {
                            //$scope.vm.items = [];
                            $scope.vm.items = data.data.tasteJiupiGroupListVO;
                        }
                        //隐藏加载中……
                        pagedataLoading.unloading();
                    })
                }
                $scope.getNewMenuList = function () {
                    //显示加载中……
                    pagedataLoading.loading();
                    $http.post("tasting/queryTasting").success(function (data) {
                        if (data.result === "success") {
                            $scope.vm.items = data.data.tasteJiupiGroupListVO;
                            // $scope.vm.pages.totalResult = data.datas.pager.recordCount;
                            // $scope.vm.pages.totalPage = data.datas.pager.totalPage;
                        }
                        //隐藏加载中……
                        pagedataLoading.unloading();
                    })
                }

                $scope.getNewMenuList();

                /* ***********************查询功能********************************** */
                //查询按钮
                $scope.searchClick = function () {

                    // $scope.vm.pages = {
                    //     itemsPerPage : 20,
                    //     index : 1,
                    //     totalResult : 0,
                    //     totalPage : 0
                    // };
                    if (!$scope.vo.queryTime) {
                        ejpAlert.show("请选择时间！");
                        return;
                    };
                    $scope.vm.items=[];
                    $scope.getNewMenuTastingList();
                };
                //清空按钮
                $scope.resetClick = function () {
                    $scope.vo = {};
                    $scope.getNewMenuList();
                };

            });
        }]);
