OMVC.toolbar_form_controller = function (model, view) {
	view.input.bind('input', function(){
		var val = $(this).val();
		model.setLogin(val);
		if(model.getLogin().length>0){
			model.setValid(true);
			model.setShow(true);
		}else{
			model.setValid(false);
		}
		
	});
	view.buttonAuth.bind('click',function(){
		if(model.getValid()){
			app.setLogin(model.getLogin());
			model.setShow(false);
			app.start();
		}else{
			toast.message("Введите логин!");
		}
	});
	view.buttonLogout.bind('click',function(){
		app.destroy();
	});
};