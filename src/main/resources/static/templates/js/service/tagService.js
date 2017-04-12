/**
 * TagService
 */
MetronicApp.service('tagService', ['ajaxService', function (ajaxService) {
	
	    this.getTags = function (tag, successFunction, errorFunction) {
	        ajaxService.AjaxPostWithBlock(tag, "tag/getTags.action", successFunction, errorFunction);
	    };
        this.createTag = function (tag, successFunction, errorFunction) {
            ajaxService.AjaxPost(tag, "tag/createTag.action", successFunction, errorFunction);
        };
        this.updateTag = function (tag, successFunction, errorFunction) {
            ajaxService.AjaxPost(tag, "tag/updateTag", successFunction, errorFunction);
        };
        this.getTag = function (tag, successFunction, errorFunction) {
            ajaxService.AjaxPost(tag, "tag/getTag", successFunction, errorFunction);
        };
    }]);