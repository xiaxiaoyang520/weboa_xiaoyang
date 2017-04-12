/**
 * GetCityId 获取城市Id,service
 */
MetronicApp.service('GetCityIdService',['ajaxService',function (ajaxService){
		var org = {
		};
		this.getCityId = function(org,successFunction,errorFunction){
			ajaxService.AjaxPost(org,"companyUser/getCityId",successFunction,errorFunction);
		};
		this.getOrg = function (){
			return org;
		}
		this.setOrg = function(obj){
			org = angular.copy(obj);
		}
	}]
);