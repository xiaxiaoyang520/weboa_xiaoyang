/**
 * 新增小品会
 */
MetronicApp.controller("addTastingController",
    ['$rootScope', '$scope', '$http', '$location', '$modal', 'pagedataLoading', 'ejpAlert',
        function ($rootScope, $scope, $http, $location, $modal, pagedataLoading, ejpAlert) {
            $scope.$on('$viewContentLoaded', function () {
                Metronic.initAjax();

                // set default layout mode
                $rootScope.settings.layout.pageBodySolid = false;
                $rootScope.settings.layout.pageSidebarClosed = false;

                $scope.vo = {};

                //初始化省市区三级联动
                initCitySelector('city-select', 'common/getProvinceCityArea.action');

                $scope.productSkuList = [];

                $scope.init = function (vo) {
                    if (vo.city == undefined || vo.city.city == undefined || vo.city.city == "") {
                        ejpAlert.show("请先选择活动城市");
                        return;
                    } else {
                        $http.post("city/getCityId.action", vo.city).success(function (data) {
                            console.log(data);
                            $scope.cityId = data;
                            $scope.addProductSkuModal();
                        })
                    }
                }

                //添加产品sku
                $scope.addProductSkuModal = function () {
                    var modalInstance = $modal.open({
                        templateUrl: 'views/modals/tasting_productSku.html',
                        controller: 'tastingProductSkuController',
                        size: 'lg',
                        resolve: {
                            requestResults: function () {
                                return {
                                    "cityId": $scope.cityId,
                                    "selectedproductSkuList": $scope.productSkuList
                                }
                            }
                        }
                    }).result.then(function (data) {
                        console.log(data);
                        angular.forEach(data.hasCheckedProductSkuList, function (item) {
                            $scope.productSkuList.push(item);
                        });
                    })
                }

                //改变城市，清空已选的产品sku
                $scope.changeCity = function () {
                    $scope.productSkuList = [];
                }

                //移除
                $scope.remove = function (id) {
                    var productSkus = [];
                    angular.forEach($scope.productSkuList, function (data) {
                        if (data.id != id) {
                            productSkus.push(data);
                        }
                    });

                    $scope.productSkuList = productSkus;
                }

                //保存
                $scope.tastingSubmit = function () {
                    $scope.productSkuIdList = [];
                    if ($scope.productSkuList.length == 0) {
                        ejpAlert.show("必须选择产品sku！");
                        return;
                    }
                    angular.forEach($scope.productSkuList, function (item) {
                        $scope.productSkuIdList.push(item.id);
                    })
                    $scope.vo.productSkuIds = $scope.productSkuIdList;
                    $scope.vo.cityId = $scope.cityId;
                    $scope.vo.beginTime = new Date($scope.vo.beginTime);
                    $scope.vo.endTime = new Date($scope.vo.endTime);
                    $scope.vo.userId = 1;
                    $http.post("tasting/addTasting", $scope.vo).success(function (data) {
                        if (data.result === "success") {
                            ejpAlert.show("新增成功！");
                            $location.path("#/tasting_list.html");
                        }
                    })
                }
            });
        }]);
//新增产品sku
MetronicApp.controller("tastingProductSkuController",
    ['$rootScope', '$scope', '$http', '$location', '$modal', 'pagedataLoading', 'ejpAlert', '$modalInstance', 'requestResults',
        function ($rootScope, $scope, $http, $location, $modal, pagedataLoading, ejpAlert, $modalInstance, requestResults) {
            console.log(requestResults);
            $scope.vo = {};
            $scope.title = "产品sku";
            var vm = $scope.vm = {};
            vm.pages = {
                itemsPerPage: 20,
                index: 1,
                totalResult: 0,
                totalPage: 0
            };
            vm.items = [];

            //用户新选择的产品sku记录
            $scope.hasCheckedProductSkuList = [];
            //用户新选择的产品sku记录id集合
            $scope.productSkuIdList = [];

            $scope.saleModeList = [{"value": 0, "key": "代营"}, {"value": 1, "key": "自营"}, {
                "value": 2,
                "key": "合作"
            }, {"value": 3, "key": "寄售"},]

            $scope.productSkuList = function () {
                $scope.vo.cityId = requestResults.cityId;
                $http.post("tasting/findProductSkus/" + vm.pages.index, $scope.vo).success(function (data) {
                    console.log(data);
                    if (data.result === "success") {
                        $scope.vm.items = data.datas.dataList;
                        $scope.vm.pages.totalResult = data.datas.pager.recordCount;
                        $scope.vm.pages.totalPage = data.datas.pager.totalPage;
                        //循环当前页面数据，将活动已选产品勾选中，并用户不能再选择
                        angular.forEach(requestResults.selectedproductSkuList, function (data) {
                            angular.forEach($scope.vm.items, function (item) {
                                if (data.id === item.id) {
                                    //选择checkbox标识
                                    item.flag = true;
                                    //当前记录CheckBox禁止选择
                                    item.disabled = true;
                                }
                            })
                        })
                        //翻页加载操作栏选中数据
                        if ($scope.productSkuIdList.length > 0) {
                            angular.forEach($scope.productSkuIdList, function (productSku) {
                                angular.forEach($scope.vm.items, function (item) {
                                    if (productSku == item.id) {
                                        item.flag = true;
                                    }
                                })
                            })
                        }
                    }
                })
            }
            $scope.productSkuList();

            /* ***********************查询功能********************************** */
            //查询按钮
            $scope.searchClick = function () {
                $scope.vm.pages = {
                    itemsPerPage: 20,
                    index: 1,
                    totalResult: 0,
                    totalPage: 0
                };
                $scope.productSkuList();
            };
            //清空按钮
            $scope.resteExist = function () {
                $scope.vo = {};
            };


            //********************全选***************************
            $scope.allCheck = false;
            $scope.checkAll = function () {
                angular.forEach($scope.vm.items, function (data) {
                    data.flag = $scope.allCheck;
                    if (data.flag) {//选中
                        if ($scope.productSkuIdList.indexOf(data.id) < 0) {
                            $scope.productSkuIdList.push(data.id);
                            $scope.hasCheckedProductSkuList.push(data);
                        }
                    } else {
                        if ($scope.productSkuIdList.length > 0 && $scope.productSkuIdList.indexOf(data.id) >= 0) {
                            var idx = $scope.productSkuIdList.indexOf(data.id);
                            $scope.productSkuIdList.splice(idx, 1);
                            $scope.hasCheckedProductSkuList.splice(idx, 1);
                        }
                    }
                })
            }

            //勾选
            $scope.updateSelection = function ($event, item) {
                var checkbox = $event.target;
                var action = (checkbox.checked ? 'add' : 'remove');
                updateSelected(action, item, checkbox.name);
                $scope.isAllCheck();
            }

            var updateSelected = function (action, item, name) {
                if (action == "add" && $scope.productSkuIdList.indexOf(item.id) == -1) {
                    $scope.productSkuIdList.push(item.id);
                    $scope.hasCheckedProductSkuList.push(item);
                }
                if (action == "remove" && $scope.productSkuIdList.indexOf(item.id) > -1) {
                    var idx = $scope.productSkuIdList.indexOf(item.id);
                    $scope.productSkuIdList.splice(idx, 1);
                    $scope.hasCheckedProductSkuList.splice(idx, 1);
                }
                $scope.isAllCheck();
            }

            $scope.isSelected = function (id) {
                return $scope.productSkuIdList.indexOf(id) >= 0;
            }

            $scope.isAllCheck = function () {
                $scope.allCheck = true;
                angular.forEach($scope.vm.items, function (data, index) {
                    if ($scope.productSkuIdList.length == 0 || $scope.productSkuIdList.indexOf(data.id) < 0) {
                        $scope.allCheck = false;
                    }
                })
            }

            //翻页勾选
            $scope.pageChange = function () {
                angular.forEach($scope.vm.items, function (item, index) {
                    if (item.flag) {//选中
                        if ($scope.productSkuIdList.indexOf(item.id) < 0) {
                            $scope.productSkuIdList.push(item.id);
                        }
                    } else {
                        if ($scope.productSkuIdList.length > 0 && $scope.productSkuIdList.indexOf(item.id) > 0) {
                            $scope.productSkuIdList.splice(index, 1);
                        }
                    }
                });
                $scope.productSkuList();
            }


            $scope.ok = function () {
                var selectedProductList = {
                    'productSkuIdList': $scope.productSkuIdList,
                    'hasCheckedProductSkuList': $scope.hasCheckedProductSkuList,
                }

                $modalInstance.close(selectedProductList);
            }

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        }]);