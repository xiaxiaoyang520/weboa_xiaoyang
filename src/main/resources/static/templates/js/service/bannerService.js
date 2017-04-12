/**
 * BannerService 广告管理的服务js
 */
MetronicApp.service('BannerService',['ajaxService',function (ajaxService){
		this.getBanners = function(page,searchVO,successFunction,errorFunction){
			ajaxService.AjaxGetWithData(searchVO,"banner/getBanners/"+page+".action",successFunction,errorFunction);
		};
		this.createBanner = function(banner,successFunction,errorFunction){
			ajaxService.AjaxPost(banner,"banner/createBanner.action",successFunction,errorFunction);
		};
		this.updateBanner = function(banner,successFunction,errorFunction){
			ajaxService.AjaxPut(banner,"banner/updateBanner.acion",successFunction,errorFunction);
		};
		this.getBanner = function (banner,successFunction,errorFunction){
			ajaxService.AjaxGet("banner/getBanner/"+banner.id,successFunction,errorFunction);
		};
		this.deleteBanner = function(banner,successFunction,errorFunction){
			ajaxService.AjaxDelete("banner/deleteBanner/"+banner.id+".action",successFunction,errorFunction);
		};
		this.getPromotions = function(page,searchVO,successFunction,errorFunction){
			ajaxService.AjaxGetWithData(searchVO,"banner/getPromotions/"+page+".action",successFunction,errorFunction);
		};
		this.getProducts = function(page,searchVO,successFunction,errorFunction){
			ajaxService.AjaxGetWithData(searchVO,"banner/getProducts/"+page+".action",successFunction,errorFunction);
		};
		this.getCategorys = function(page,searchVO,successFunction,errorFunction){
			ajaxService.AjaxGetWithData(searchVO,"banner/getCategroys/"+page+".action",successFunction,errorFunction);
		};
	}]
);