
MetronicApp.directive('paging', [function () {
    return {
    	templateUrl : 'js/directives/tpl/pager.html',
        restrict: "E",
        replace:true,
        scope: {
            pages:"=",
            onPageChange: "&" 
        }
    };
}]);

