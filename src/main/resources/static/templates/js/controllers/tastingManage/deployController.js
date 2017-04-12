MetronicApp.controller("deployController",
    ['$rootScope', '$scope', '$http', '$location', '$modal', 'pagedataLoading', 'ejpAlert','getUserInfo',
        function ($rootScope, $scope, $http, $location, $modal, pagedataLoading, ejpAlert,getUserInfo) {
            $scope.$on('$viewContentLoaded', function () {
                Metronic.initAjax();

                // set default layout mode
                $rootScope.settings.layout.pageBodySolid = false;
                $rootScope.settings.layout.pageSidebarClosed = false;

                $scope.vo = {};

                // //初始化省市区三级联动
                // initCitySelector('city-select', 'common/getProvinceCityArea.action');

                $scope.pushTime =[];

                $scope.identity =getUserInfo.userInfo();
                $scope.cont=function(){
                    if( $scope.identity.isCityAdmin==true){
                        ejpAlert.show("您没有权限操作！");
                        $location.path("#/tasting_list.html");
                    }
                }
                $scope.cont();
                //console.info($scope.identity);
                $scope.init = function () {
                    $scope.addProductSkuModal();
                }
                $scope.addProductSkuModal = function () {
                    var modalInstance = $modal.open({
                        templateUrl: 'views/modals/pushTime_add.html',
                        controller: 'addPushtimeController',
                        size: 'lg',
                        resolve: {
                            requestResults: function () {
                                return {
                                    // "cityId":$scope.cityId ,
                                    "selectedproductSkuList": $scope.pushTime
                                }
                            }
                        }
                    }).result.then(function (data) {
                        console.log(data);
                        $scope.a = true;
                        if ($scope.pushTime != []) {
                            angular.forEach($scope.pushTime, function (item) {
                                if (item == data.productSkuIdList) {
                                    ejpAlert.show("推送时间已选择");
                                    $scope.a = false;
                                    return;
                                }
                            });
                        }
                        if ($scope.a === true) {
                            $scope.pushTime.push(data.productSkuIdList);
                        }
                        console.log($scope.pushTime);
                    })
                }


                //保存
                $scope.tastingSubmit = function () {

                    $scope.vo.pushTime = $scope.pushTime;
                    $scope.vo.weChatGroupName = $scope.weChat;
                    console.log($scope.vo.pushTime);
                    console.log($scope.vo.weChatGroupName);
                    if(angular.equals($scope.vo.pushTime,[])&&angular.equals( $scope.vo.weChatGroupName,undefined)){
                        ejpAlert.show("请输入要添加的数据");
                        return;
                    }
                    $http.post("tasting/addConfiguration", $scope.vo).success(function (data) {
                        if (data.result === "success") {
                            ejpAlert.show("新增成功！");
                            $location.path("/Tasting_deploy.html");
                        }
                    })
                }
                $scope.tastingClear = function () {

                    $scope.pushTime =[];
                }
            });
        }]);
//新增产品sku
MetronicApp.controller("addPushtimeController",
    ['$rootScope', '$scope', '$http', '$location', '$modal', 'pagedataLoading', 'ejpAlert', '$modalInstance', 'requestResults',
        function ($rootScope, $scope, $http, $location, $modal, pagedataLoading, ejpAlert, $modalInstance, requestResults) {
            // console.log(requestResults);
            $scope.vo = {};
            $scope.title = "新增推送时间";
            var vm = $scope.vm = {};
            // vm.pages = {
            //     itemsPerPage: 20,
            //     index: 1,
            //     totalResult: 0,
            //     totalPage: 0
            // };
            vm.items = [];

            // //用户新选择的产品sku记录
            // $scope.hasCheckedProductSkuList = [];
            //用户新选择的产品sku记录id集合
            $scope.pustTime = [];


            $scope.ok = function () {
                var selectedProductList = {
                    'productSkuIdList': $scope.vo.pushTime
                }

                $modalInstance.close(selectedProductList);
            }

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        }]);
