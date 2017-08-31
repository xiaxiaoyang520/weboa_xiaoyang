var Login = function() {
    var handleLogin = function() {
        $('.login-form').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules: {
                userTel: {
                    required: true
                },
                userPassword: {
                    required: true
                }
            },
            messages: {
                userTel: {
                    required: "请输入手机号."
                },
                userPassword: {
                    required: "请输入密码."
                }
            },
            invalidHandler: function(event, validator) { //display error alert on form submit
//            	debugger;
                $('.alert-danger', $('.login-form')).show();
            },
            highlight: function(element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
					$('.has-error .form-control').parent('.input-icon').css("border-left-color","#ebccd1");
					$('#btn_login').css("background-color","#ebccd1");
            },
            success: function(label) {
                label.closest('.form-group').removeClass('has-error');
                label.remove();
            },
            errorPlacement: function(error, element) {
                error.insertAfter(element.closest('.input-icon'));
            },
            submitHandler: function(form) {
                form.submit(); // form validation success, call ajax form submit
            }
        });
        $('.login-form input').keypress(function(e) {
            if (e.which == 13) {
                if ($('.login-form').validate().form()) {
                    $('.login-form').submit(); //form validation success, call ajax form submit
                }
                return false;
            }
        });
    }
    var queryParam = function(name) {
        var url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
    var validateMsg = function(){
    	//var msg = $.cookie("error");
    	var msg = queryParam('error');
    	if(msg){
    		$("#msgDiv").html(msg);
    	}else{
    		$("#msgDiv").html("");    		
    	}
    }
    return {
        //main function to initiate the module
        init: function() {
            handleLogin();
            validateMsg();
            //handleForgetPassword();
            //handleRegister();
        }
    };
}();