/**
 * ModalService
 */
MetronicApp.service('modalService', ['$modal', function($modal) {
    this.openModal = function(config) {
    	var DEFAULT = {
    		url:'',
    		ctrl:'modalInstanceCtrl',
    		size:'',
    		params:''
    	}

    	var config = $.extend(DEFAULT, config);
        //创建弹框对象
        var modalInstance = $modal.open({
            templateUrl: config.url,
            controller: config.ctrl,
            size: config.size,
            resolve: {
                items: function() {
                    return config.params;
                }
            }
        });

        //弹框打开后执行
        if(config.openedFunction && typeof(openedFunction) == "function"){
        	modalInstance.opened.then(function(){
	        	config.openedFunction();
	        });
        }
        
        //弹框提交成功后回掉函数
        modalInstance.result.then(function(result){
        	config.responseSuccess(result)
        },function(reason){
        	config.responseError(reason)
        });
    }
}]);
