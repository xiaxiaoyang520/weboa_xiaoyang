
MetronicApp.service('BizUserService', ['$http','$q',function($http,$q) {
   
	//获取全局会员类别
   this.getBizUserClass = function(){
	   
	   return $q(function (resolve, reject) {
		   
		   var cache = angular.fromJson(localStorage.getItem("BizUserClassCache"));
		   if(cache && cache.list && cache.list.length > 0){
			   resolve(cache);
			   return ;
		   }
		   
           $http({
               method: 'get',
               url: 'partner/findBizUserClassList',
           }).success(function (data) {
        	   localStorage.setItem("BizUserClassCache",angular.toJson(data));
               resolve(data);
           }).error(function (data) {
               reject(data.message);
           });
       });
   }
   
   //获取城市下的会员类别
  this.getBizUserClassInCity = function(cityId){
	   
	   return $q(function (resolve, reject) {
           $http({
               method: 'get',
               url: 'partner/findBizUserClassList/'+cityId,
           }).success(function (data) {
               resolve(data)
           }).error(function (data) {
               reject(data.message);
           });
       });
   }
    
}]);