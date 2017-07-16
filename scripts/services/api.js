const api = {
	getInfo:function(params,callbac,callbackerror){
		if(callbackerror === undefined) {
			callbackerror = function(){};
		}
		params.userToken = api.userToken;
		$.ajax({            
			url: "api.php",
			method: 'GET',
			data:params,
		}).done(function(data){
			var d = JSON.parse(data);
			if(d.success){
				callbac(d.data);
			}else callbackerror(d.errormsg);
		}).fail(function (jqXHR, textStatus) {
			callbackerror(textStatus);
		});
	},
	'getImages':function(path,callbac,callbac_error){
		api.getInfo({'controller':'images','action':'getimages','path':path},callbac,callbac_error);
	},
	'encrypt':function(url_key,message,callbac,callbac_error){
		api.getInfo({'controller':'cryptography','action':'crypt','url':url_key,'message':message},callbac,callbac_error);
	}
};